"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { useScrollY } from "@/lib/hooks";

export function Header() {
    const reduceMotion = useReducedMotion();
    const y = useScrollY();
    const isSolid = y > 24;

    const pathname = usePathname();
    const onHome = pathname === "/";

    const [open, setOpen] = useState(false);

    function sectionHref(section: string) {
        return onHome ? `#${section}` : `/#${section}`;
    }

    return (
        <>
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
                    {/* Logo */}
                    <Link href="/" className="text-xs tracking-[0.32em]">
                        THE HOUSE OF AVAL
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-7 text-xs tracking-[0.18em] text-[#141414]/75 md:flex">
                        <Link href={sectionHref("heritage")} className="hover:text-[#141414]">
                            ABOUT
                        </Link>
                        <Link href={sectionHref("craft")} className="hover:text-[#141414]">
                            VALUE
                        </Link>
                        <Link href={sectionHref("silhouettes")} className="hover:text-[#141414]">
                            ADVANTAGE
                        </Link>
                        <Link href={sectionHref("collaboration")} className="hover:text-[#141414]">
                            COLLABORATE
                        </Link>
                        <Link href="/collections" className="hover:text-[#141414]">
                            COLLECTIONS
                        </Link>
                    </nav>

                    {/* Desktop CTA */}
                    <Link
                        href={sectionHref("collaboration")}
                        className="hidden md:inline-flex rounded-full border border-[#141414]/25 px-4 py-2 text-xs tracking-[0.14em] hover:border-[#141414]/40"
                    >
                        START
                    </Link>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden flex flex-col gap-1.5"
                        aria-label="Open menu"
                    >
                        <span className="h-px w-6 bg-[#141414]" />
                        <span className="h-px w-6 bg-[#141414]" />
                        <span className="h-px w-6 bg-[#141414]" />
                    </button>
                </div>

                {!reduceMotion && (
                    <div className={cn("h-px w-full", isSolid ? "bg-[#141414]/10" : "bg-transparent")} />
                )}
            </motion.header>

            {/* Mobile overlay menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 bg-[#F6F1E8] flex flex-col px-6 pt-24"
                >

                    <nav className="flex flex-col gap-6 text-sm tracking-[0.22em]">
                        <Link href="/" onClick={() => setOpen(false)}>
                            HOME
                        </Link>

                        <Link href="/collections" onClick={() => setOpen(false)}>
                            COLLECTIONS
                        </Link>

                        <Link
                            href={sectionHref("collaboration")}
                            onClick={() => setOpen(false)}
                        >
                            COLLABORATE
                        </Link>
                    </nav>
                </motion.div>
            )}
        </>
    );
}
