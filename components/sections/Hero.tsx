"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useScrollY } from "@/lib/hooks";

export function Hero() {
    const reduceMotion = useReducedMotion();
    const y = useScrollY();

    const heroShift = useMemo(() => {
        if (reduceMotion) return 0;
        return Math.min(y * 0.08, 48);
    }, [y, reduceMotion]);

    return (
        <section className="relative h-[100svh] overflow-hidden text-[#141414]">
            {/* HERO IMAGE */}
            <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero.png')",
                    // push subject (model) to the right so copy sits on clean space
                    backgroundPosition: "80% 2%",
                }}
            />

            {/* LEFT SCRIM (this is the key) */}
            <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-[#F6F1E8]/95 via-[#F6F1E8]/55 to-transparent"
            />

            {/* your subtle texture overlay (keep) */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 10%, rgba(0,0,0,0.07), transparent 45%), radial-gradient(circle at 80% 30%, rgba(0,0,0,0.05), transparent 50%), linear-gradient(180deg, rgba(0,0,0,0.06), transparent 35%, rgba(0,0,0,0.05))",
                }}
            />

            {/* glow blobs (keep) */}
            <motion.div
                aria-hidden
                className="absolute -left-44 top-8 h-[560px] w-[560px] rounded-full blur-3xl opacity-40"
                style={{
                    transform: `translateY(${heroShift}px)`,
                    background:
                        "radial-gradient(circle at 30% 30%, rgba(160,140,110,0.45), transparent 60%)",
                }}
            />
            <motion.div
                aria-hidden
                className="absolute -right-60 bottom-[-140px] h-[680px] w-[680px] rounded-full blur-3xl opacity-35"
                style={{
                    transform: `translateY(${heroShift * 0.8}px)`,
                    background:
                        "radial-gradient(circle at 40% 40%, rgba(60,55,50,0.35), transparent 62%)",
                }}
            />

            {/* CONTENT */}
            <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20 md:pb-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-3xl"
                >
                    <p className="mb-4 text-xs tracking-[0.32em] text-[#2a2a2a]/70">
                        THE HOUSE OF AVAL
                    </p>

                    <h1 className="text-4xl leading-[1.08] tracking-tight md:text-6xl md:leading-[1.03]">
                        Where design vision meets{" "}
                        <span className="italic">disciplined craftsmanship</span>.
                    </h1>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-[#2a2a2a]/80 md:text-base">
                        A strategic production partner to premium fashion brands — translating
                        ideas into refined, handcrafted garments that balance beauty, quality,
                        and commercial success.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <a
                            href="#collaboration"
                            className="rounded-full bg-[#141414] px-6 py-3 text-sm text-[#F6F1E8] transition hover:opacity-90"
                        >
                            Begin a collaboration
                        </a>
                        <a
                            href="#craft"
                            className="rounded-full border border-[#141414]/25 px-6 py-3 text-sm text-[#141414] transition hover:border-[#141414]/40"
                        >
                            Explore our approach
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.1, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-14 flex items-center gap-3 text-xs tracking-[0.22em] text-[#141414]/55"
                >
                    <span className="h-px w-10 bg-[#141414]/30" />
                    SCROLL
                </motion.div>
            </div>
        </section>
    );
}
