import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default:
            "The House of Avaal — Luxury Fashion Design, Development & Manufacturing Partner",
        template: "%s | The House of Avaal",
    },
    description:
        "The House of Avaal is a full-service luxury fashion design, development, and manufacturing partner working across luxury prêt, bridal, eveningwear, prom, and contemporary categories for global brands.",
    keywords: [
        "The House of Avaal",
        "Avaal",
        "luxury fashion manufacturing partner",
        "fashion design and development house",
        "luxury ready to wear manufacturer",
        "luxury pret manufacturer",
        "bridal wear manufacturer",
        "eveningwear manufacturer",
        "fashion sourcing and production",
        "full service garment factory",
        "fashion development and manufacturing",
    ],
    authors: [{ name: "The House of Avaal" }],
    creator: "The House of Avaal",
    metadataBase: new URL("https://yourdomain.com"),
    openGraph: {
        title:
            "The House of Avaal — Luxury Fashion Design & Manufacturing Partner",
        description:
            "A full-service luxury fashion design, development, and manufacturing partner working across prêt, bridal, eveningwear, and contemporary collections.",
        siteName: "The House of Avaal",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
