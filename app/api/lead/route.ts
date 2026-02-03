import { NextResponse } from "next/server";
import { Resend } from "resend";
import { LeadEmail } from "@/components/LeadEmail";

export const runtime = "nodejs"; // IMPORTANT: force Node (Resend needs this)

const resend = new Resend(process.env.RESEND_API_KEY);

// ---------------- Rate limit ----------------
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string, limit = 5, windowMs = 10 * 60 * 1000) {
    const now = Date.now();
    const entry = buckets.get(ip);

    if (!entry || entry.resetAt <= now) {
        buckets.set(ip, { count: 1, resetAt: now + windowMs });
        return true;
    }

    if (entry.count >= limit) return false;

    entry.count += 1;
    return true;
}

// ---------------- Validators ----------------
function looksLikeEmail(s: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function looksLikePhone(s: string) {
    const cleaned = s.replace(/[\s()-]/g, "");
    return /^[+]?\d{8,16}$/.test(cleaned);
}

// ---------------- Handler ----------------
export async function POST(req: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            throw new Error("Missing RESEND_API_KEY");
        }

        const from = process.env.LEADS_FROM_EMAIL || "Aval <onboarding@resend.dev>";
        const rawTo = process.env.LEADS_TO_EMAIL;

        if (!rawTo) {
            throw new Error("Missing LEADS_TO_EMAIL");
        }

        // ALWAYS send `to` as an array (Resend-safe)
        const to = rawTo.split(",").map(e => e.trim()).filter(Boolean);

        if (to.length === 0) {
            throw new Error("LEADS_TO_EMAIL resolved to empty array");
        }

        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            "unknown";

        if (!rateLimit(ip)) {
            return NextResponse.json(
                { ok: false, error: "Rate limited" },
                { status: 429 }
            );
        }

        const body = await req.json();

        const name = String(body.name || "").trim();
        const company = String(body.company || "").trim();
        const contact = String(body.contact || "").trim();
        const category = String(body.category || "").trim();
        const message = String(body.message || "").trim();
        const website = String(body.website || "").trim(); // honeypot

        // Honeypot → silent success
        if (website) {
            return NextResponse.json({ ok: true, honeypot: true });
        }

        if (!name || !contact || !message) {
            return NextResponse.json({ ok: false }, { status: 400 });
        }

        if (!looksLikeEmail(contact) && !looksLikePhone(contact)) {
            return NextResponse.json({ ok: false }, { status: 400 });
        }

        const subject = `New Aval inquiry — ${name}${company ? ` (${company})` : ""}`;

        const { data, error } = await resend.emails.send({
            from,                     // SAFE sender
            to,                       // ARRAY, not string
            subject,
            react: LeadEmail({
                name,
                company,
                contact,
                category,
                message,
            }),
            // 🚫 NO replyTo — this caused your 422s
        });

        if (error) {
            console.error(
                "RESEND ERROR (FULL):",
                JSON.stringify(error, null, 2)
            );

            return NextResponse.json(
                { ok: false, resendError: error },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true, data });
    } catch (err: any) {
        console.error(
            "LEAD API CRASH:",
            err?.message || err
        );

        return NextResponse.json(
            { ok: false, error: err?.message || "Server error" },
            { status: 500 }
        );
    }
}
