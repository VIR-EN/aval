"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

export function Heritage() {
    const timeline = [
        {
            k: "CRAFT",
            v: "Specialists in hand embroidery, beadwork, sequins, stones, and surface texture.",
        },
        {
            k: "DESIGN",
            v: "We translate creative vision into production-ready garments — advising where it matters.",
        },
        {
            k: "COMMERCE",
            v: "We engineer for weight, rejection rates, FOB targets, and scalable consistency.",
        },
        {
            k: "TRUST",
            v: "55 years of repeatable quality — so brands can build categories, not one-offs.",
        },
    ];

    return (
        <section id="heritage" className="bg-[#F6F1E8] text-[#141414]">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.28 }}
                >
                    <p className="text-xs tracking-[0.32em] text-[#141414]/60">THE HOUSE OF AVAL</p>
                    <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                        More than manufacturing. A value partner.
                    </h2>

                    <div className="mt-10 grid gap-10 md:grid-cols-12">
                        <div className="md:col-span-5">
                            <p className="text-sm leading-7 text-[#2a2a2a]/80">
                                At The House of Aval, we work at the intersection of{" "}
                                <span className="text-[#141414]">craft</span>,{" "}
                                <span className="text-[#141414]">design sensitivity</span>, and{" "}
                                <span className="text-[#141414]">commercial intelligence</span>.
                            </p>

                            <p className="mt-5 text-sm leading-7 text-[#2a2a2a]/80">
                                We are not just manufacturers. We are problem solvers for brands who want beauty without chaos,
                                and craftsmanship without risk.
                            </p>

                            <p className="mt-5 text-sm leading-7 text-[#2a2a2a]/80">
                                A strategic partner to premium fashion brands for{" "}
                                <span className="text-[#141414]">55 years</span>.
                            </p>
                        </div>

                        <div className="md:col-span-7 space-y-5">
                            {timeline.map((it, i) => (
                                <motion.div
                                    key={it.k}
                                    variants={reveal}
                                    custom={0.12 * i}
                                    className="flex gap-5"
                                >
                                    <div className="w-24 shrink-0 text-xs tracking-[0.22em] text-[#141414]/70">
                                        {it.k}
                                    </div>
                                    <div className="h-px flex-1 self-center bg-[#141414]/15" />
                                    <div className="w-full max-w-md text-sm leading-7 text-[#2a2a2a]/80">{it.v}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
