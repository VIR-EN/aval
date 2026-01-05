import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Heritage } from "@/components/sections/Heritage";
import { Craft } from "@/components/sections/Craft";
import { Advantages } from "@/components/sections/Advantages";
import { Consistency } from "@/components/sections/Consistency";
import { Collaboration } from "@/components/sections/Collaboration";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
    return (
        <main className="min-h-[100svh] bg-[#F6F1E8] text-[#141414]">
            <Header />
            <Hero />
            <Heritage />
            <Craft />
            <Advantages />
            <Consistency />
            <Collaboration />
            <Footer />
        </main>
    );
}
