"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";
import { useState } from "react";

type Category = {
    slug: string;
    title: string;
    description: string;
    images: string[];
    count: number;
};

const categories: Category[] = [
    {
        slug: "bridal",
        title: "Bridal / Bridal Party",
        description:
            "Statement bridal pieces developed with high handwork density, structural integrity, and repeatable embellishment techniques suitable for scaled production.",
        images: Array.from({ length: 10 }, (_, i) =>
            `/collections/bridal/${String(i + 1).padStart(2, "0")}.png`
        ),
        count:8,
    },
    {
        slug: "evening",
        title: "Evening",
        description:
            "High-impact occasionwear balancing surface richness with controlled weight, fluid movement, and precision finishing for global evening markets.",
        images: Array.from({ length: 10 }, (_, i) =>
            `/collections/evening/${String(i + 1).padStart(2, "0")}.png`
        ),
        count: 7,
    },
    {
        slug: "lux-pret",
        title: "Lux Pret",
        description:
            "Elevated ready-to-wear designed for versatility — refined silhouettes, material intelligence, and construction choices that translate across seasons.",
        images: Array.from({ length: 10 }, (_, i) =>
            `/collections/pret/${String(i + 1).padStart(2, "0")}.png`
        ),
        count:7,
    },
    {
        slug: "prom",
        title: "Prom",
        description:
            "Youth-driven formalwear focused on volume control, trend responsiveness, and cost-aware embellishment for high-turn retail cycles.",
        images: Array.from({ length: 10 }, (_, i) =>
            `/collections/prom/${String(i + 1).padStart(2, "0")}.png`
        ),
        count:5,
    },
    {
        slug: "contemporary",
        title: "Contemporary",
        description:
            "Modern silhouettes engineered for everyday luxury — clean lines, balanced proportions, and fabrics chosen for comfort, durability, and scale.",
        images: Array.from({ length: 10 }, (_, i) =>
            `/collections/contemporary/${String(i + 1).padStart(2, "0")}.png`
        ),
        count:7,
    },
    {
        slug: "concept-swatches",
        title: "Concept Swatches",
        description:
            "Surface development and material exploration — embroidery tests, fabric trials, and concept swatches that inform full collection execution.",
        images: Array.from({ length: 10 }, (_, i) =>
            `/collections/concept/${String(i + 1).padStart(2, "0")}.png`
        ),
        count:7,
    },
];


export default function CollectionsClient() {
    return (
        <section className="bg-[#F6F1E8] text-[#141414]">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                {/* Header */}
                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="text-xs tracking-[0.32em] text-[#141414]/60">
                        COLLECTION CAPABILITIES
                    </p>
                    <h1 className="mt-4 text-3xl md:text-4xl">
                        Categories we develop with technical depth.
                    </h1>
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-[#2a2a2a]/80">
                        Each category represents a different construction logic, surface
                        language, and production challenge.
                    </p>
                </motion.div>

                {/* Category cards */}
                <div className="mt-16 grid gap-12 md:grid-cols-2">
                    {categories.map((cat, i) => (
                        <CategoryCard key={cat.slug} cat={cat} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CategoryCard({
                          cat,
                          index,
                      }: {
    cat: Category;
    index: number;
}) {
    const [active, setActive] = useState(0);
    const images = cat.images.slice(0, cat.count);
    const total = images.length;

    function prev() {
        setActive((a) => (a === 0 ? total - 1 : a - 1));
    }

    function next() {
        setActive((a) => (a === total - 1 ? 0 : a + 1));
    }

    return (
        <motion.div
            variants={reveal}
            custom={0.08 * index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col rounded-2xl border border-[#141414]/12 bg-white/40 p-6 md:p-8 backdrop-blur-sm"
        >
            {/* Portrait viewer */}
            <div className="group relative mb-6 overflow-hidden border border-[#141414]/10 bg-[#F6F1E8]">
                {/* Tall portrait frame */}
                <div className="flex w-full justify-center overflow-hidden px-1 py-1">
                <img
                        src={images[active]}
                        alt=""
                        className="block max-h-[680px] w-full object-contain"
                        loading="lazy"
                    />
                </div>

                {/* Navigation (only if >1 image) */}
                {total > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 px-3 py-1 text-sm text-[#141414] opacity-0 transition group-hover:opacity-100 hover:bg-white"
                        >
                            ‹
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 px-3 py-1 text-sm text-[#141414] opacity-0 transition group-hover:opacity-100 hover:bg-white"
                        >
                            ›
                        </button>
                    </>
                )}

                {/* Index indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/70 px-3 py-1 text-xs tracking-wide text-[#141414]">
                    {active + 1} / {total}
                </div>
            </div>

            <h3 className="text-lg">{cat.title}</h3>

            <p className="mt-3 text-sm leading-7 text-[#2a2a2a]/75">
                {cat.description}
            </p>
        </motion.div>
    );
}

