"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

export function Craft() {
    const tiles = [
        { label: "Handwork · Engineered", src: "/craft/handwork.png" },
        { label: "Embellishment · Controlled", src: "/craft/embellishment.png" },
        { label: "Finish · Repeatable", src: "/craft/finish.png"},
        { label: "Scale · Consistent", src: "/craft/scale.png" },
    ];

    return (
        <section id="craft" className="bg-[#141414] text-[#F6F1E8]">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <p className="text-xs tracking-[0.32em] text-[#F6F1E8]/60">HOW WE ADD VALUE</p>
                    <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                        Craftsmanship that feels luxury — yet works commercially.
                    </h2>

                    <div className="mt-10 grid gap-8 md:grid-cols-12">
                        <div className="md:col-span-5">
                            <p className="text-sm leading-7 text-[#F6F1E8]/80">
                                We specialize in hand embroidery, beadwork, sequins, stones, and surface textures that look rich
                                and elevated — while being engineered for dependable production.
                            </p>

                            <ul className="mt-8 space-y-3 text-sm text-[#F6F1E8]/75">
                                {[
                                    "Control weight & wearability",
                                    "Reduce rejection rates",
                                    "Stay within target FOBs",
                                    "Scale consistently",
                                ].map((t) => (
                                    <li key={t} className="flex gap-3">
                                        <span className="mt-2 h-px w-8 bg-[#F6F1E8]/35" />
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 space-y-2 text-sm">
                                <p className="text-[#F6F1E8]/80">
                                    <span className="text-[#F6F1E8]">Your customer</span> experiences luxury.
                                </p>
                                <p className="text-[#F6F1E8]/80">
                                    <span className="text-[#F6F1E8]">You</span> experience reliability.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-7">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {tiles.map(({ label, src }, i) => (
                                    <motion.div
                                        key={label}
                                        variants={reveal}
                                        custom={0.08 * i}
                                        className="group relative overflow-hidden rounded-2xl border border-[#F6F1E8]/12 bg-[#0f0f0f] p-7 md:p-8"
                                    >
                                        <div className="pointer-events-none absolute inset-0 opacity-40">
                                            <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[#F6F1E8]/10 blur-3xl" />
                                            <div className="absolute -right-10 bottom-[-40px] h-72 w-72 rounded-full bg-[#F6F1E8]/10 blur-3xl" />
                                        </div>

                                        <div className="relative">
                                            <div className="text-xs tracking-[0.22em] text-[#F6F1E8]/65">{label}</div>

                                            {/* IMAGE SLOT (replaces placeholder) */}
                                            <div className="mt-10 relative h-28 overflow-hidden rounded-xl border border-[#F6F1E8]/10">
                                                <Image
                                                    src={src}
                                                    alt={label}
                                                    fill
                                                    sizes="(min-width: 768px) 280px, 90vw"
                                                    className="object-cover object-center opacity-90 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.02]"
                                                />
                                                {/* subtle consistency overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />
                                            </div>

                                            {/* optional helper text — remove when images final */}
                                            <div className="mt-4 text-xs text-[#F6F1E8]/55">Macro detail</div>
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
