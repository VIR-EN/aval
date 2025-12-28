"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const reveal: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.0,
            delay: custom,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};


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

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}



export default function HomePage() {
    const reduceMotion = useReducedMotion();
    const scrollY = useScrollProgress();

    // Subtle parallax for hero background (very restrained)
    const heroShift = useMemo(() => {
        if (reduceMotion) return 0;
        return Math.min(scrollY * 0.08, 48); // cap
    }, [scrollY, reduceMotion]);

    return (
        <main className="min-h-screen bg-[#F6F1E8] text-[#141414]">
            <Header />

            {/* HERO */}
            <section className="relative h-[100svh] overflow-hidden">
                {/* Fabric grain / film texture layer */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 10%, rgba(0,0,0,0.07), transparent 45%), radial-gradient(circle at 80% 30%, rgba(0,0,0,0.05), transparent 50%), linear-gradient(180deg, rgba(0,0,0,0.06), transparent 35%, rgba(0,0,0,0.05))",
                    }}
                />

                {/* Soft “fabric fold” suggestion via gradient shapes */}
                <motion.div
                    aria-hidden
                    className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
                    style={{
                        transform: `translateY(${heroShift}px)`,
                        background:
                            "radial-gradient(circle at 30% 30%, rgba(160,140,110,0.45), transparent 60%)",
                    }}
                />
                <motion.div
                    aria-hidden
                    className="absolute -right-56 bottom-[-120px] h-[640px] w-[640px] rounded-full blur-3xl opacity-35"
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
                        transition={{
                            duration: 1.2,
                            delay: 0.8, // “pause” = luxury
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="max-w-3xl"
                    >
                        <p className="mb-4 text-xs tracking-[0.32em] text-[#2a2a2a]/70">
                            AVAL FASHION HOUSE
                        </p>

                        <h1 className="text-4xl leading-[1.05] tracking-tight md:text-6xl">
                            Women’s couture, perfected over{" "}
                            <span className="italic">55 years</span>.
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-[#2a2a2a]/80 md:text-base">
                            Bridal · Evening · Formal. A heritage atelier devoted to
                            hand-crafted embroidery, beadwork, and disciplined finishing.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            <a
                                href="#appointment"
                                className="rounded-full bg-[#141414] px-6 py-3 text-sm text-[#F6F1E8] transition hover:opacity-90"
                            >
                                Request an appointment
                            </a>
                            <a
                                href="#craft"
                                className="rounded-full border border-[#141414]/20 px-6 py-3 text-sm text-[#141414] transition hover:border-[#141414]/35"
                            >
                                Explore the craft
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

            {/* HERITAGE */}
            <Section id="heritage" eyebrow="HERITAGE" title="Time is our material.">
                <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="text-sm leading-7 text-[#2a2a2a]/80">
                            For 55 years, Aval has dressed women for the most significant
                            moments of their lives—built on mastery passed through hands, not
                            trends.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <Timeline />
                    </div>
                </div>
            </Section>

            {/* CRAFT */}
            <Section
                id="craft"
                eyebrow="ATELIER"
                title="Craft that rewards closeness."
                tone="dark"
            >
                <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="text-sm leading-7 text-[#F6F1E8]/80">
                            Hand embroidery. Beadwork that catches light like jewelry.
                            Finishing that is disciplined, not decorative.
                        </p>
                        <ul className="mt-8 space-y-3 text-sm text-[#F6F1E8]/75">
                            <li className="flex gap-3">
                                <span className="mt-2 h-px w-8 bg-[#F6F1E8]/35" />
                                Hours, not units
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-px w-8 bg-[#F6F1E8]/35" />
                                Precision inherited
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 h-px w-8 bg-[#F6F1E8]/35" />
                                Ritualized quality checks
                            </li>
                        </ul>
                    </div>

                    {/* Placeholder “macro tiles” — later replace with real photos */}
                    <div className="md:col-span-7">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <MacroTile label="Beadwork · Light" />
                            <MacroTile label="Embroidery · Relief" />
                            <MacroTile label="Hand finishing · Edge" />
                            <MacroTile label="Drape · Movement" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* SILHOUETTES */}
            <Section
                id="silhouettes"
                eyebrow="WOMENSWEAR"
                title="Silhouettes, curated—never commodified."
            >
                <div className="grid gap-6 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <p className="text-sm leading-7 text-[#2a2a2a]/80">
                            Bridal, evening, formal, prom—presented as a private viewing. One
                            look at a time.
                        </p>
                    </div>
                    <div className="md:col-span-8">
                        <div className="grid gap-4 md:grid-cols-2">
                            <LookCard title="Bridal" subtitle="Ritual, purity, detail." />
                            <LookCard title="Evening" subtitle="Sculptural elegance." />
                            <LookCard title="Formal" subtitle="Quiet authority." />
                            <LookCard title="Prom" subtitle="Modern, refined glamour." />
                        </div>
                    </div>
                </div>
            </Section>

            {/* MANIFESTO */}
            <Section id="manifesto" eyebrow="PHILOSOPHY" title="The Aval discipline.">
                <div className="space-y-6">
                    <Statement>Quality is not an outcome. It is a practice.</Statement>
                    <Statement>Luxury resists speed.</Statement>
                    <Statement>Craft outlives fashion.</Statement>
                </div>
            </Section>

            {/* APPOINTMENT */}
            <section id="appointment" className="bg-[#141414] text-[#F6F1E8]">
                <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                    <motion.div
                        variants={reveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        className="grid gap-10 md:grid-cols-12"
                    >
                        <div className="md:col-span-6">
                            <p className="text-xs tracking-[0.32em] text-[#F6F1E8]/65">
                                APPOINTMENT
                            </p>
                            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                                Begin a consultation.
                            </h2>
                            <p className="mt-6 text-sm leading-7 text-[#F6F1E8]/80">
                                Share your occasion and timeline. We will respond with next
                                steps and available appointment windows.
                            </p>
                        </div>

                        <div className="md:col-span-6">
                            <form className="space-y-4">
                                <input
                                    className="w-full rounded-xl border border-[#F6F1E8]/20 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                    placeholder="Name"
                                />
                                <input
                                    className="w-full rounded-xl border border-[#F6F1E8]/20 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                    placeholder="Phone / WhatsApp"
                                />
                                <input
                                    className="w-full rounded-xl border border-[#F6F1E8]/20 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                    placeholder="Occasion (Bridal / Evening / Formal / Prom)"
                                />
                                <textarea
                                    className="h-28 w-full resize-none rounded-xl border border-[#F6F1E8]/20 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#F6F1E8]/45 focus:border-[#F6F1E8]/35"
                                    placeholder="Tell us what you’re looking for…"
                                />
                                <button
                                    type="button"
                                    className="rounded-full bg-[#F6F1E8] px-6 py-3 text-sm text-[#141414] transition hover:opacity-90"
                                >
                                    Submit request
                                </button>
                                <p className="text-xs text-[#F6F1E8]/55">
                                    (For now this is a visual prototype. Next we’ll wire it to
                                    email/DB.)
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

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
                        HERITAGE
                    </a>
                    <a className="hover:text-[#141414]" href="#craft">
                        ATELIER
                    </a>
                    <a className="hover:text-[#141414]" href="#silhouettes">
                        WOMENSWEAR
                    </a>
                    <a className="hover:text-[#141414]" href="#appointment">
                        APPOINTMENT
                    </a>
                </nav>
                <a
                    href="#appointment"
                    className="rounded-full border border-[#141414]/20 px-4 py-2 text-xs tracking-[0.14em] hover:border-[#141414]/35"
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
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
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
    const items = [
        { year: "1969", text: "Founded as an embroidery-first women’s atelier." },
        { year: "1985", text: "Refined formalwear finishing standards; repeat clientele grew." },
        { year: "2002", text: "Expanded bridal craftsmanship—beadwork and hand finishing." },
        { year: "Today", text: "A legacy house: couture discipline, modern silhouettes." },
    ];
    return (
        <div className="space-y-5">
            {items.map((it, i) => (
                <motion.div
                    key={it.year}
                    variants={reveal}
                    custom={0.12 * i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    className="flex gap-5"
                >
                    <div className="w-20 shrink-0 text-sm tracking-[0.12em] text-[#141414]/70">
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
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-[#F6F1E8]/10 bg-[#0f0f0f] p-6"
        >
            <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[#F6F1E8]/10 blur-3xl" />
                <div className="absolute -right-10 bottom-[-40px] h-72 w-72 rounded-full bg-[#F6F1E8]/10 blur-3xl" />
            </div>
            <div className="relative">
                <div className="text-xs tracking-[0.22em] text-[#F6F1E8]/65">{label}</div>
                <div className="mt-10 h-28 rounded-xl border border-[#F6F1E8]/10 bg-gradient-to-b from-[#F6F1E8]/10 to-transparent" />
                <div className="mt-4 text-xs text-[#F6F1E8]/55">
                    (Replace with real macro photography)
                </div>
            </div>
        </motion.div>
    );
}

function LookCard({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="group overflow-hidden rounded-2xl border border-[#141414]/10 bg-white/40 p-6 backdrop-blur-sm transition hover:border-[#141414]/20"
        >
            <div className="text-xs tracking-[0.32em] text-[#141414]/55">{title.toUpperCase()}</div>
            <div className="mt-3 text-lg">{title}</div>
            <div className="mt-2 text-sm text-[#2a2a2a]/75">{subtitle}</div>
            <div className="mt-10 h-32 rounded-xl border border-[#141414]/10 bg-gradient-to-b from-[#141414]/5 to-transparent" />
        </motion.div>
    );
}

function Statement({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-2xl border border-[#141414]/10 bg-white/35 p-6 text-lg leading-8 md:text-xl"
        >
            {children}
        </motion.div>
    );
}

function Footer() {
    return (
        <footer className="bg-[#F6F1E8]">
            <div className="mx-auto max-w-6xl px-6 py-12 text-xs tracking-[0.18em] text-[#141414]/60">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>© {new Date().getFullYear()} AVAL FASHION HOUSE</div>
                    <div className="flex gap-6">
                        <a href="#heritage" className="hover:text-[#141414]">
                            Heritage
                        </a>
                        <a href="#craft" className="hover:text-[#141414]">
                            Atelier
                        </a>
                        <a href="#appointment" className="hover:text-[#141414]">
                            Appointment
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
