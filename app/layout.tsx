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
  title: "Riwayat | Classic Groom & Partywear — Karachi",
  description:
    "Riwayat (روایت) — premium men's classic groom and partywear in Karachi. Bespoke sherwanis, suits, waistcoats and accessories where tradition meets elegance.",
  generator: "v0.app",
  keywords: ["Riwayat", "sherwani", "groom wear", "partywear", "Karachi", "menswear", "bespoke suits"],
  openGraph: {
    title: "Riwayat | Classic Groom & Partywear",
    description: "Where Tradition Meets Elegance — premium menswear in Karachi.",
    type: "website",
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
