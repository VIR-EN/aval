import {Header} from "@/components/sections/Header";
import {Footer} from "@/components/sections/Footer";

export default function CopyrightPage() {
    return (
        <>
            <Header/>
            <main className="bg-[#F6F1E8] text-[#141414] min-h-[100vh]">
                <div className="mx-auto max-w-4xl px-6 py-24">

                    <p className="text-xs tracking-[0.32em] text-[#141414]/60">
                        THE HOUSE OF AVAAL
                    </p>

                    <h1 className="mt-4 text-3xl leading-tight md:text-4xl">
                        Copyright
                    </h1>

                    <div className="mt-10 space-y-6 text-sm leading-7 text-[#2a2a2a]/80">
                        <p>
                            © {new Date().getFullYear()} The House of Avaal. All rights reserved.
                        </p>

                        <p>
                            All content on this website — including but not limited to text, imagery,
                            graphics, designs, layouts, visual elements, and brand identifiers —
                            is the property of The House of Avaal unless otherwise stated.
                        </p>

                        <p>
                            No part of this website may be copied, reproduced, republished,
                            transmitted, distributed, or used for commercial purposes without
                            prior written permission from The House of Avaal.
                        </p>

                        <p>
                            Product designs, embellishment techniques, construction methods,
                            and production processes displayed on this website are protected
                            intellectual property and may not be replicated or used without authorization.
                        </p>

                        <p>
                            For copyright, permissions, or legal inquiries, please contact:
                            <br />
                            <span className="text-[#141414]">
                                info@thehouseofavaal.com
                            </span>
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
