"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

export function Consistency() {
    const gains = [
        "✔ A reliable extension of your design and production team",
        "✔ Better margins through smarter craftsmanship",
        "✔ Fewer production surprises",
        "✔ Transparency at every stage of production",
        "✔ A supplier who protects your brand image",
    ];

    return (
        <section id="manifesto" className="bg-[#F6F1E8] text-[#141414]">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.28 }}
                >
                    <p className="text-xs tracking-[0.32em] text-[#141414]/60">CONSISTENCY</p>
                    <h2 className="mt-4 text-3xl leading-tight md:text-4xl">Reliability is the real luxury.</h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-12">
                        <div className="md:col-span-6">
                            <p className="text-sm leading-7 text-[#2a2a2a]/80">
                                Luxury brands suffer when vendors shift quality season to season. We focus on repeatable workmanship,
                                stable quality teams, process documentation, and controlled handwork standards — so you can build
                                long-term categories, not one-off styles.
                            </p>

                            <div className="mt-8 rounded-2xl border border-[#141414]/12 bg-white/35 p-7 md:p-8">
                                <p className="text-xs tracking-[0.32em] text-[#141414]/55">ONE-LINE POSITIONING</p>
                                <p className="mt-4 text-base leading-7 text-[#141414] md:text-lg">
                                    The House of Aval is a system-driven production partner bringing certainty and transparency to premium garment manufacturing.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="space-y-5">
                                {gains.map((t, i) => (
                                    <motion.div
                                        key={t}
                                        variants={reveal}
                                        custom={0.08 * i}
                                        className="rounded-2xl border border-[#141414]/12 bg-white/35 p-7 md:p-8 text-sm leading-7 md:text-base"
                                    >
                                        {t}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
