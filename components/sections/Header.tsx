"use client";

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

    function sectionHref(section: string) {
        return onHome ? `#${section}` : `/#${section}`;
    }

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
                {/* Logo / Home */}
                <Link
                    href="/"
                    className="text-xs tracking-[0.32em]"
                >
                    THE HOUSE OF AVAL
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-7 text-xs tracking-[0.18em] text-[#141414]/75 md:flex">
                    <Link className="hover:text-[#141414]" href={sectionHref("heritage")}>
                        ABOUT
                    </Link>
                    <Link className="hover:text-[#141414]" href={sectionHref("craft")}>
                        VALUE
                    </Link>
                    <Link className="hover:text-[#141414]" href={sectionHref("silhouettes")}>
                        ADVANTAGE
                    </Link>
                    <Link className="hover:text-[#141414]" href={sectionHref("collaboration")}>
                        COLLABORATE
                    </Link>
                    <Link className="hover:text-[#141414]" href="/collections">
                        COLLECTIONS
                    </Link>
                </nav>

                {/* CTA */}
                <Link
                    href={sectionHref("collaboration")}
                    className="rounded-full border border-[#141414]/25 px-4 py-2 text-xs tracking-[0.14em] hover:border-[#141414]/40"
                >
                    START
                </Link>
            </div>

            {!reduceMotion && (
                <div className={cn("h-px w-full", isSolid ? "bg-[#141414]/10" : "bg-transparent")} />
            )}
        </motion.header>
    );
}
