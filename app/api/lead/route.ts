import { NextResponse } from "next/server";
import { Resend } from "resend";
import { LeadEmail } from "@/components/LeadEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limit
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
        const from = process.env.LEADS_FROM_EMAIL;
        const to = process.env.LEADS_TO_EMAIL;

        if (!from || !to) {
            throw new Error("Missing email configuration");
        }

        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            "unknown";

        if (!rateLimit(ip).ok) {
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
        const website = String(body.website || "").trim();

        // Honeypot (silent success)
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

        const { error } = await resend.emails.send({
            from,
            to,
            subject,
            react: LeadEmail({ name, company, contact, category, message }),
            replyTo: looksLikeEmail(contact) ? contact : undefined,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ ok: false }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Lead API crash:", err);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
