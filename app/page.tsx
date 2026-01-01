"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

function useScrollProgress() {
    const [y, setY] = useState(0);
    useEffect(() => {
        const onScroll = () => setY(window.scrollY || 0);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return y;
}

const revealVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.0, delay: custom, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Page() {
    return (
        <main className="min-h-[100svh] bg-[#F6F1E8] text-[#141414]">
            <Header />

            <Hero />

            {/* WHAT MAKES AVAL DIFFERENT */}
            <Section
                id="heritage"
                eyebrow="THE HOUSE OF AVAL"
                title="More than manufacturing. A value partner."
            >
                <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="text-sm leading-7 text-[#2a2a2a]/80">
                            At The House of Aval, we work at the intersection of{" "}
                            <span className="text-[#141414]">craft</span>,{" "}
                            <span className="text-[#141414]">design sensitivity</span>, and{" "}
                            <span className="text-[#141414]">commercial intelligence</span>.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-[#2a2a2a]/80">
                            We are not just manufacturers. We are problem solvers for brands
                            who want beauty without chaos, and craftsmanship without risk.
                        </p>

                        <p className="mt-5 text-sm leading-7 text-[#2a2a2a]/80">
                            A strategic partner to premium fashion brands for{" "}
                            <span className="text-[#141414]">55 years</span>.
                        </p>
                    </div>

                    <div className="md:col-span-7">
                        <Timeline />
                    </div>
                </div>
            </Section>

            {/* HOW WE ADD VALUE */}
            <Section
                id="craft"
                eyebrow="HOW WE ADD VALUE"
                title="Craftsmanship that feels luxury — yet works commercially."
                tone="dark"
            >
                <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="text-sm leading-7 text-[#F6F1E8]/80">
                            We specialize in hand embroidery, beadwork, sequins, stones, and
                            surface textures that look rich and elevated — while being
                            engineered for dependable production.
                        </p>

                        <ul className="mt-8 space-y-3 text-sm text-[#F6F1E8]/75">
                            <li className="flex gap-3">
                                <span className="mt-2 h-px w-8 bg-[#F6F1E8]/35" />
                                Control weight & wearability
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-px w-8 bg-[#F6F1E8]/35" />
                                Reduce rejection rates
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-px w-8 bg-[#F6F1E8]/35" />
                                Stay within target FOBs
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-px w-8 bg-[#F6F1E8]/35" />
                                Scale consistently
                            </li>
                        </ul>

                        <div className="mt-8 space-y-2 text-sm">
                            <p className="text-[#F6F1E8]/80">
                                <span className="text-[#F6F1E8]">Your customer</span> experiences
                                luxury.
                            </p>
                            <p className="text-[#F6F1E8]/80">
                                <span className="text-[#F6F1E8]">You</span> experience
                                reliability.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <MacroTile label="Handwork · Engineered" />
                            <MacroTile label="Embellishment · Controlled" />
                            <MacroTile label="Finish · Repeatable" />
                            <MacroTile label="Scale · Consistent" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* TRANSLATION / SPEED / MARKET INTELLIGENCE */}
            <Section
                id="silhouettes"
                eyebrow="PARTNER ADVANTAGES"
                title="Design translation, speed, and market intelligence."
            >
                <div className="grid gap-6 md:grid-cols-12">
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
                            <LookCard
                                title="Design Translation"
                                subtitle="Sketches → production-ready garments. Mood boards → wearable, sellable styles."
                            />
                            <LookCard
                                title="Commercial Intelligence"
                                subtitle="Embellishment density, fabric substitutions, construction simplification, cost vs. impact."
                            />
                            <LookCard
                                title="Speed & Flexibility"
                                subtitle="Small MOQs, capsules, seasonal drops, tight sampling timelines — hands-on development."
                            />
                            <LookCard
                                title="Aesthetic Intelligence"
                                subtitle="Global sensibility across contemporary luxury, occasion/evening, festive & resort — ‘just enough’."
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* CONSISTENCY + CLIENT GAINS */}
            <Section
                id="manifesto"
                eyebrow="CONSISTENCY"
                title="Reliability is the real luxury."
            >
                <div className="grid gap-6 md:grid-cols-12">
                    <div className="md:col-span-6">
                        <p className="text-sm leading-7 text-[#2a2a2a]/80">
                            Luxury brands suffer when vendors shift quality season to season.
                            We focus on repeatable workmanship, stable quality teams, process
                            documentation, and controlled handwork standards — so you can
                            build long-term categories, not one-off styles.
                        </p>

                        <div className="mt-8 rounded-2xl border border-[#141414]/12 bg-white/35 p-7 md:p-8">
                            <p className="text-xs tracking-[0.32em] text-[#141414]/55">
                                ONE-LINE POSITIONING
                            </p>
                            <p className="mt-4 text-base leading-7 text-[#141414] md:text-lg">
                                The House of Aval partners with global fashion brands to
                                translate design vision into refined, handcrafted garments that
                                balance beauty, quality, and commercial success.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="space-y-5">
                            <Statement>
                                ✔ A reliable extension of your design team
                            </Statement>
                            <Statement>
                                ✔ Better margins through smarter craftsmanship
                            </Statement>
                            <Statement>✔ Fewer production surprises</Statement>
                            <Statement>✔ Faster go-to-market</Statement>
                            <Statement>
                                ✔ A supplier who protects your brand image
                            </Statement>
                        </div>
                    </div>
                </div>
            </Section>

            <Collaboration />

            <Footer />
        </main>
    );
}

function Header() {
    const reduceMotion = useReducedMotion();
    const scrollY = useScrollProgress();
    const isSolid = scrollY > 24;

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed inset-x-0 top-0 z-50",
                isSolid ? "bg-[#F6F1E8]/70 backdrop-blur-md" : "bg-transparent"
            )}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <div className="text-xs tracking-[0.32em]">AVAL</div>

                <nav className="hidden items-center gap-7 text-xs tracking-[0.18em] text-[#141414]/75 md:flex">
                    <a className="hover:text-[#141414]" href="#heritage">
                        ABOUT
                    </a>
                    <a className="hover:text-[#141414]" href="#craft">
                        VALUE
                    </a>
                    <a className="hover:text-[#141414]" href="#silhouettes">
                        ADVANTAGE
                    </a>
                    <a className="hover:text-[#141414]" href="#collaboration">
                        COLLABORATE
                    </a>
                </nav>

                <a
                    href="#collaboration"
                    className="rounded-full border border-[#141414]/25 px-4 py-2 text-xs tracking-[0.14em] hover:border-[#141414]/40"
                >
                    START
                </a>
            </div>

            {!reduceMotion && (
                <div className={cn("h-px w-full", isSolid ? "bg-[#141414]/10" : "bg-transparent")} />
            )}
        </motion.header>
    );
}

function Hero() {
    const reduceMotion = useReducedMotion();
    const scrollY = useScrollProgress();

    const heroShift = useMemo(() => {
        if (reduceMotion) return 0;
        return Math.min(scrollY * 0.08, 48);
    }, [scrollY, reduceMotion]);

    return (
        <section className="relative h-[100svh] overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 10%, rgba(0,0,0,0.07), transparent 45%), radial-gradient(circle at 80% 30%, rgba(0,0,0,0.05), transparent 50%), linear-gradient(180deg, rgba(0,0,0,0.06), transparent 35%, rgba(0,0,0,0.05))",
                }}
            />

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

function Section({
                     id,
                     eyebrow,
                     title,
                     tone,
                     children,
                 }: {
    id: string;
    eyebrow: string;
    title: string;
    tone?: "dark";
    children: React.ReactNode;
}) {
    const dark = tone === "dark";
    return (
        <section
            id={id}
            className={cn(dark ? "bg-[#141414] text-[#F6F1E8]" : "bg-[#F6F1E8] text-[#141414]")}
        >
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <motion.div
                    variants={revealVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    custom={0}
                >
                    <p
                        className={cn(
                            "text-xs tracking-[0.32em]",
                            dark ? "text-[#F6F1E8]/60" : "text-[#141414]/60"
                        )}
                    >
                        {eyebrow}
                    </p>
                    <h2 className={cn("mt-4 text-3xl leading-tight md:text-4xl", dark && "text-[#F6F1E8]")}>
                        {title}
                    </h2>
                    <div className="mt-10">{children}</div>
                </motion.div>
            </div>
        </section>
    );
}

function Timeline() {
    // Updated to reflect “heritage + partner mindset” (not product history)
    const items = [
        { year: "CRAFT", text: "Specialists in hand embroidery, beadwork, sequins, stones, and surface texture." },
        { year: "DESIGN", text: "We translate creative vision into production-ready garments — advising where it matters." },
        { year: "COMMERCE", text: "We engineer for weight, rejection rates, FOB targets, and scalable consistency." },
        { year: "TRUST", text: "55 years of repeatable quality — so brands can build categories, not one-offs." },
    ];

    return (
        <div className="space-y-5">
            {items.map((it, i) => (
                <motion.div
                    key={it.year}
                    variants={revealVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    custom={0.12 * i}
                    className="flex gap-5"
                >
                    <div className="w-24 shrink-0 text-xs tracking-[0.22em] text-[#141414]/70">
                        {it.year}
                    </div>
                    <div className="h-px flex-1 self-center bg-[#141414]/15" />
                    <div className="w-full max-w-md text-sm leading-7 text-[#2a2a2a]/80">{it.text}</div>
                </motion.div>
            ))}
        </div>
    );
}

function MacroTile({ label }: { label: string }) {
    return (
        <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="group relative overflow-hidden rounded-2xl border border-[#F6F1E8]/12 bg-[#0f0f0f] p-7 md:p-8"
        >
            <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[#F6F1E8]/10 blur-3xl" />
                <div className="absolute -right-10 bottom-[-40px] h-72 w-72 rounded-full bg-[#F6F1E8]/10 blur-3xl" />
            </div>
            <div className="relative">
                <div className="text-xs tracking-[0.22em] text-[#F6F1E8]/65">{label}</div>
                <div className="mt-10 h-28 rounded-xl border border-[#F6F1E8]/10 bg-gradient-to-b from-[#F6F1E8]/10 to-transparent" />
                <div className="mt-4 text-xs text-[#F6F1E8]/55">(Replace with macro photography)</div>
            </div>
        </motion.div>
    );
}

function LookCard({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={0}
            className="group overflow-hidden rounded-2xl border border-[#141414]/12 bg-white/40 p-7 md:p-8 backdrop-blur-sm transition hover:border-[#141414]/20"
        >
            <div className="text-xs tracking-[0.32em] text-[#141414]/55">{title.toUpperCase()}</div>
            <div className="mt-3 text-lg">{title}</div>
            <div className="mt-2 text-sm leading-7 text-[#2a2a2a]/75">{subtitle}</div>
            <div className="mt-10 h-32 rounded-xl border border-[#141414]/10 bg-gradient-to-b from-[#141414]/5 to-transparent" />
        </motion.div>
    );
}

function Statement({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={0}
            className="rounded-2xl border border-[#141414]/12 bg-white/35 p-7 md:p-8 text-sm leading-7 md:text-base"
        >
            {children}
        </motion.div>
    );
}

function Collaboration() {
    return (
        <section id="collaboration" className="bg-[#141414] text-[#F6F1E8]">
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                <motion.div
                    variants={revealVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    custom={0}
                    className="grid gap-10 md:grid-cols-12"
                >
                    <div className="md:col-span-6">
                        <p className="text-xs tracking-[0.32em] text-[#F6F1E8]/65">COLLABORATION</p>
                        <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                            Begin a conversation.
                        </h2>
                        <p className="mt-6 text-sm leading-7 text-[#F6F1E8]/80">
                            Tell us about your brand, category, and goals. We’ll respond with how
                            Aval can support your vision — from development through delivery.
                        </p>
                    </div>

                    <div className="md:col-span-6">
                        <form className="space-y-4">
                            <input
                                className="w-full rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Name"
                            />
                            <input
                                className="w-full rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Brand / Company"
                            />
                            <input
                                className="w-full rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Email / WhatsApp"
                            />
                            <input
                                className="w-full rounded-xl border border-[#F6F1E8]/22 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                placeholder="Category (Occasion / Evening / Resort / Festive)"
                            />
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
                            <p className="text-xs text-[#F6F1E8]/55">
                                (Prototype — next we’ll wire this to email/CRM.)
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-[#F6F1E8]">
            <div className="mx-auto max-w-6xl px-6 py-12 text-xs tracking-[0.18em] text-[#141414]/60">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>© {new Date().getFullYear()} THE HOUSE OF AVAL</div>
                    <div className="flex gap-6">
                        <a href="#heritage" className="hover:text-[#141414]">
                            About
                        </a>
                        <a href="#craft" className="hover:text-[#141414]">
                            Value
                        </a>
                        <a href="#collaboration" className="hover:text-[#141414]">
                            Collaborate
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
