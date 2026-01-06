import { NextResponse } from "next/server";
import { Resend } from "resend";
import { LeadEmail } from "@/components/LeadEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limit (good baseline). For stronger limits on Vercel, use Upstash later.
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string, limit = 5, windowMs = 10 * 60 * 1000) {
    const now = Date.now();
    const entry = buckets.get(ip);

    if (!entry || entry.resetAt <= now) {
        buckets.set(ip, { count: 1, resetAt: now + windowMs });
        return { ok: true };
    }

    if (entry.count >= limit) return { ok: false };

    entry.count += 1;
    return { ok: true };
}

function looksLikeEmail(s: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function looksLikePhone(s: string) {
    const cleaned = s.replace(/[\s()-]/g, "");
    return /^[+]?\d{8,16}$/.test(cleaned);
}

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.LEADS_FROM_EMAIL;
        const to = process.env.LEADS_TO_EMAIL;

        if (!apiKey) throw new Error("Missing RESEND_API_KEY");
        if (!from) throw new Error("Missing LEADS_FROM_EMAIL");
        if (!to) throw new Error("Missing LEADS_TO_EMAIL");

        // Rate limit by IP
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            "unknown";

        const rl = rateLimit(ip, 5, 10 * 60 * 1000);
        if (!rl.ok) {
            return NextResponse.json(
                { ok: false, error: "Too many submissions. Try again later." },
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

        // Honeypot: if filled, silently succeed
        if (website) {
            return NextResponse.json({ ok: true });
        }

        // Required
        if (!name || !contact || !message) {
            return NextResponse.json(
                { ok: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Contact must be email OR phone
        const okContact = looksLikeEmail(contact) || looksLikePhone(contact);
        if (!okContact) {
            return NextResponse.json(
                { ok: false, error: "Invalid email or phone number" },
                { status: 400 }
            );
        }

        // Length limits
        if (name.length > 80 || company.length > 120 || contact.length > 120 || category.length > 120) {
            return NextResponse.json({ ok: false, error: "Fields too long" }, { status: 400 });
        }
        if (message.length > 2000) {
            return NextResponse.json({ ok: false, error: "Message too long" }, { status: 400 });
        }

        const subject = `New Aval inquiry — ${name}${company ? ` (${company})` : ""}`;

        const { error } = await resend.emails.send({
            from,
            to,
            subject,
            react: LeadEmail({ name, company, contact, category, message }),
            replyTo: looksLikeEmail(contact) ? contact : undefined,
        });

        if (error) {
            console.error("RESEND ERROR:", error);
            return NextResponse.json({ ok: false, error }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        console.error("API /api/lead CRASH:", err);
        return NextResponse.json(
            { ok: false, error: err?.message || "Server error" },
            { status: 500 }
        );
    }
}
