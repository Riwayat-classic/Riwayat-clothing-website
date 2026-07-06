// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: Footer
// WHAT IT DOES: Site footer with 4 columns — brand + social, quick links, services, contact info
// TO CUSTOMIZE: Edit social links and contact info in data/content.json (contact). Change columns in the JSX below.
// SEARCH TERM: "Tailwind CSS grid", "Next.js Link", "responsive footer"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"
import { getContent } from "@/lib/data"

export async function Footer() {
  const content = await getContent()
  const c = content.contact
  const year = new Date().getFullYear()

  return (
    <footer className="bg-maroon-dark text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {/* Brand + social */}
        <div>
          <div className="mb-5">
           <Link href="/" aria-label="Riwayat Home">
  <Image
    src="/images/riwayat-logo.png"
    alt="Riwayat Classic Groom & Partywear"
    width={220}
    height={90}
    priority
    className="h-14 w-auto object-contain"
  />
</Link>
          </div>
          <p className="text-sm leading-relaxed text-cream/70">
            Classic Groom & Partywear crafted with
premium fabrics, expert tailoring and
timeless elegance for modern gentlemen.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={c.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
             className="rounded-full border border-gold/40 p-2.5 text-gold transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-maroon-dark"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={c.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-gold/40 p-2 text-gold transition-colors hover:bg-gold hover:text-maroon-dark"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={c.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="rounded-full border border-gold/40 p-2 text-gold transition-colors hover:bg-gold hover:text-maroon-dark"
            >
              <span className="text-sm font-bold leading-none">TT</span>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="label-royal mb-4 text-sm text-gold">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li><Link href="/collection" className="hover:text-gold">Collection</Link></li>
            <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="label-royal mb-4 text-sm text-gold">Services</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/services" className="hover:text-gold">Bespoke Sherwani</Link></li>
            <li><Link href="/services" className="hover:text-gold">Tailored Suits</Link></li>
            <li><Link href="/services" className="hover:text-gold">Partywear</Link></li>
            <li><Link href="/services" className="hover:text-gold">Custom Fittings</Link></li>
            <li><Link href="/services" className="hover:text-gold">Groom Styling</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="label-royal mb-4 text-sm text-gold">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{c.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span>{c.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${c.email}`} className="hover:text-gold">{c.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/60 md:flex-row md:px-8">
          <p>&copy; {year} Riwayat. All rights reserved.</p>
          <Link href="/contact" className="hover:text-gold">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
