"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

export function Collaboration() {
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
                            Tell us about your brand, category, and goals. We’ll respond with how Aval can support your vision — from
                            development through delivery.
                        </p>
                    </div>

                    <div className="md:col-span-6">
                        <form className="space-y-4">
                            {["Name", "Brand / Company", "Email / WhatsApp", "Category (Occasion / Evening / Resort / Festive)"].map(
                                (p) => (
                                    <input
                                        key={p}
                                        className="w-full rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                        placeholder={p}
                                    />
                                )
                            )}
                            <textarea
                                className="h-28 w-full resize-none rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Briefly describe the collection, timelines, and any constraints (FOB / MOQ / handwork level)…"
                            />
                            <button
                                type="button"
                                className="rounded-full bg-[#F6F1E8] px-6 py-3 text-sm text-[#141414] transition hover:opacity-90"
                            >
                                Submit
                            </button>
                            <p className="text-xs text-[#F6F1E8]/55">(Prototype — next we’ll wire this to email/CRM.)</p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
