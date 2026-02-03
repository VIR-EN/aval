"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();
    const onHome = pathname === "/";

    function sectionHref(section: string) {
        return onHome ? `#${section}` : `/#${section}`;
    }

    return (
        <footer className="bg-[#F6F1E8]">
            <div className="mx-auto max-w-6xl px-6 py-12 text-xs tracking-[0.18em] text-[#141414]/60">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* Left */}
                    <div>
                        © {new Date().getFullYear()} THE HOUSE OF AVAL. All rights reserved.
                    </div>

                    {/* Right */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link
                            href={sectionHref("heritage")}
                            className="transition hover:text-[#141414]"
                        >
                            About
                        </Link>

                        <Link
                            href={sectionHref("craft")}
                            className="transition hover:text-[#141414]"
                        >
                            Value
                        </Link>

                        <Link
                            href={sectionHref("silhouettes")}
                            className="transition hover:text-[#141414]"
                        >
                            Advantage
                        </Link>

                        <Link
                            href="/copyright"
                            className="transition hover:text-[#141414]"
                        >
                            Copyright
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
