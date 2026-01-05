export function Footer() {
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
