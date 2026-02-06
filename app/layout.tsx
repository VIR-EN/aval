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

    // ✅ MUST BE YOUR REAL DOMAIN
    metadataBase: new URL("https://thehouseofavaal.com"),

    openGraph: {
        title:
            "The House of Avaal — Luxury Fashion Design, Development & Manufacturing Partner",
        description:
            "A full-service luxury fashion design, development, and manufacturing partner working across prêt, bridal, eveningwear, prom, and contemporary collections.",

        // ✅ REAL DOMAIN
        url: "https://thehouseofavaal.com",
        siteName: "The House of Avaal",

        images: [
            {
                url: "/og-img.jpg",
                width: 1200,
                height: 630,
                alt: "The House of Avaal — Luxury Fashion",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "The House of Avaal — Luxury Fashion Design & Manufacturing Partner",
        description:
            "A full-service luxury fashion design and manufacturing partner for global fashion brands.",
        images: ["/og-img.jpg"],
    },
};



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="uiazuycLSZUHdkRTS2ycxbvN5dQjNKCa-Id7zWgrHPc"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            {children}
            </body>
        </html>
    );
}
