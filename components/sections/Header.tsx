"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useScrollY } from "@/lib/hooks";

export function Header() {
    const reduceMotion = useReducedMotion();
    const y = useScrollY();
    const isSolid = y > 24;

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
                <div className="text-xs tracking-[0.32em]">THE HOUSE OF AVAL</div>

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
