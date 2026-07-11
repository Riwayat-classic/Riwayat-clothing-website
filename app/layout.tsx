// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: RootLayout
// WHAT IT DOES: Wraps every page with global fonts, metadata, Navbar, Footer and floating widgets
// TO CUSTOMIZE: Change brand fonts below (Playfair_Display, Lato, Cinzel) or edit site title/description in `metadata`
// SEARCH TERM: "Next.js App Router layout", "next/font/google", "Next.js Metadata API"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Playfair_Display, Lato, Cinzel } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ScrollToTop } from "@/components/scroll-to-top"

// Headings: elegant serif
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
})
// Body: clean, readable
const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
})
// Labels: uppercase, spaced, royal
const cinzel = Cinzel({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://riwayatdesigners.com"),

  title: {
    default: "Riwayat | Classic Groom & Partywear",
    template: "%s | Riwayat",
  },

  description:
    "Riwayat (روایت) offers premium sherwanis, tailored suits, waistcoats and groom styling in Karachi. Serving clients across Pakistan, USA, Canada and the UK.",

  keywords: [
    "Riwayat",
    "Sherwani",
    "Prince Coat",
    "Waistcoat",
    "Menswear",
    "Groom Wear",
    "Partywear",
    "Tailored Suits",
    "Custom Tailoring",
    "Karachi",
    "Pakistan",
    "Wedding Sherwani",
    "Classic Groom & Partywear",
  ],

  authors: [
    {
      name: "Riwayat",
    },
  ],

  creator: "Riwayat",

  openGraph: {
    title: "Riwayat | Classic Groom & Partywear",
    description:
      "Premium sherwanis, tailored suits and groom styling crafted in Karachi.",

   url: "https://riwayatdesigners.com",

    siteName: "Riwayat",

    locale: "en_PK",

    type: "website",

    images: [
  {
    url: "/images/riwayat-og-banner.png",
    width: 1200,
    height: 630,
    alt: "Riwayat | Classic Groom & Partywear",
  },
],
  },

  twitter: {
    card: "summary_large_image",

    title: "Riwayat | Classic Groom & Partywear",

    description:
      "Premium sherwanis, tailored suits and groom styling crafted in Karachi.",

    images: ["/images/riwayat-og-banner.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${cinzel.variable} bg-background`}
    >
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
