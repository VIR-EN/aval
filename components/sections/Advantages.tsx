"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

export function Advantages() {
    const cards = [
        {
            title: "Design Translation",
            subtitle: "Sketches → production-ready garments. Mood boards → wearable, sellable styles.",
            image: "/advantages/design.PNG",
        },
        {
            title: "Commercial Intelligence",
            subtitle: "Embellishment density, fabric substitutions, construction simplification, cost vs. impact.",
            image: "/advantages/commercial.PNG",
        },
        {
            title: "Speed & Flexibility",
            subtitle: "Small MOQs, capsules, seasonal drops, tight sampling timelines — hands-on development.",
            image: "/advantages/speed.PNG",
        },
        {
            title: "Aesthetic Intelligence",
            subtitle:
                "Global sensibility across contemporary luxury, occasion/evening, festive & resort — ‘just enough’.",
            image: "/advantages/aesthetic.PNG",
        },
    ];

    return (
        <section id="silhouettes" className="bg-[#F6F1E8] text-[#141414]">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.28 }}
                >
                    <p className="text-xs tracking-[0.32em] text-[#141414]/60">
                        PARTNER ADVANTAGES
                    </p>

                    <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                        Design translation, speed, and market intelligence.
                    </h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-12">
                        <div className="md:col-span-4">
                            <p className="text-sm leading-7 text-[#2a2a2a]/80">
                                Many brands have strong creative vision — what they often need is{" "}
                                <span className="text-[#141414]">translation</span>.
                            </p>
                            <p className="mt-5 text-sm leading-7 text-[#2a2a2a]/80">
                                We help convert ideas into production-ready garments without
                                compromising the aesthetic — and without introducing avoidable
                                cost, complexity, or risk.
                            </p>
                        </div>

                        <div className="md:col-span-8">
                            <div className="grid gap-4 md:grid-cols-2">
                                {cards.map((c, i) => (
                                    <motion.div
                                        key={c.title}
                                        variants={reveal}
                                        custom={0.08 * i}
                                        className="group overflow-hidden rounded-2xl border border-[#141414]/12 bg-white/40 p-7 md:p-8 backdrop-blur-sm transition hover:border-[#141414]/20"
                                    >
                                        <div className="text-xs tracking-[0.32em] text-[#141414]/55">
                                            {c.title.toUpperCase()}
                                        </div>

                                        <div className="mt-3 text-lg">{c.title}</div>

                                        <div className="mt-2 text-sm leading-7 text-[#2a2a2a]/75">
                                            {c.subtitle}
                                        </div>

                                        {/* IMAGE */}
                                        <div className="mt-10 overflow-hidden rounded-xl border border-[#141414]/10">
                                            <div className="relative h-32 w-full">
                                                <Image
                                                    src={c.image}
                                                    alt={c.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                                />
                                            </div>
                                        </div>
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
