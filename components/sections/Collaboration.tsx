"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";
import { useState } from "react";

function looksLikeEmail(s: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function looksLikePhone(s: string) {
    // allow +, digits, spaces, (), -
    // require 8–16 digits total (after stripping formatting)
    const cleaned = s.replace(/[\s()-]/g, "");
    return /^[+]?\d{8,16}$/.test(cleaned);
}

export function Collaboration() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "ok" | "err" | "rate">("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formEl = e.currentTarget; // capture before await
        setLoading(true);
        setStatus("idle");

        const form = new FormData(formEl);

        const payload = {
            name: String(form.get("name") || "").trim(),
            company: String(form.get("company") || "").trim(),
            contact: String(form.get("contact") || "").trim(),
            category: String(form.get("category") || "").trim(),
            message: String(form.get("message") || "").trim(),
            website: String(form.get("website") || "").trim(), // honeypot
        };

        // Frontend validation (UX)
        const okContact = looksLikeEmail(payload.contact) || looksLikePhone(payload.contact);
        if (!payload.name || !payload.contact || !payload.message || !okContact) {
            setLoading(false);
            setStatus("err");
            return;
        }

        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.status === 429) {
                setStatus("rate");
                return;
            }

            if (res.ok) {
                setStatus("ok");
                formEl.reset();
            } else {
                setStatus("err");
            }
        } catch {
            setStatus("err");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="collaboration" className="bg-[#141414] text-[#F6F1E8]">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid gap-10 md:grid-cols-12"
                >
                    <div className="md:col-span-6">
                        <p className="text-xs tracking-[0.32em] text-[#F6F1E8]/65">COLLABORATION</p>
                        <h2 className="mt-4 text-3xl leading-tight md:text-4xl">Begin a conversation.</h2>
                        <p className="mt-6 text-sm leading-7 text-[#F6F1E8]/80">
                            Tell us about your brand, category, and goals. We’ll respond with how Avaal can support your vision — from
                            development through delivery.
                        </p>
                    </div>

                    <div className="md:col-span-6">
                        <form className="space-y-4" onSubmit={onSubmit}>
                            {/* Honeypot: bots fill this, humans never see it */}
                            <input
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                className="hidden"
                                aria-hidden="true"
                            />

                            <input
                                name="name"
                                required
                                className="w-full rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Name"
                            />
                            <input
                                name="company"
                                className="w-full rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Brand / Company"
                            />
                            <input
                                name="contact"
                                required
                                className="w-full rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Email / WhatsApp"
                            />
                            <input
                                name="category"
                                className="w-full rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Category (Occasion / Evening / Resort / Festive)"
                            />

                            <textarea
                                name="message"
                                required
                                className="h-28 w-full resize-none rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Briefly describe the collection, timelines, and any constraints (FOB / MOQ / handwork level)…"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="rounded-full bg-[#F6F1E8] px-6 py-3 text-sm text-[#141414] transition hover:opacity-90 disabled:opacity-60"
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>

                            {status === "ok" && (
                                <p className="text-xs text-[#F6F1E8]/55">Submitted — we’ll get back to you shortly.</p>
                            )}
                            {status === "rate" && (
                                <p className="text-xs text-[#F6F1E8]/55">Too many submissions. Please try again in a bit.</p>
                            )}
                            {status === "err" && (
                                <p className="text-xs text-[#F6F1E8]/55">
                                    Please enter a valid email address or WhatsApp phone number.
                                </p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
