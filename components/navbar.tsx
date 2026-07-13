"use client"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: Navbar
// WHAT IT DOES: Fixed top navigation. Transparent over the hero, turns solid maroon on scroll. Highlights the active page and has a mobile slide-in drawer.
// TO CUSTOMIZE: Edit the `links` array below to change menu items. Change WhatsApp number in data/content.json. Change scroll threshold in `useEffect` (window.scrollY > 40).
// SEARCH TERM: "Next.js usePathname", "React useState hook", "scroll event listener React", "Tailwind fixed navbar"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, MessageCircle } from "lucide-react"
import { waLink } from "@/lib/whatsapp"

const links = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

// WhatsApp number for the navbar CTA (also editable in data/content.json)
const WHATSAPP = "923222951804"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const solid = scrolled || pathname !== "/"

  return (
    <header
  className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
    solid
      ? "bg-[#F8F1E7]/95 border-[#D4AF37]/30 shadow-md backdrop-blur"
      : "bg-[#F8F1E7]/90 border-transparent"
  }`}
>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Riwayat home">
         <Image
 src="/images/navbar-logo.png"
  alt="Riwayat Classic Groom & Partywear"
  width={220}
  height={90}
  priority
 className="h-14 w-auto object-contain md:h-16 lg:h-20"
/>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                className={`label-royal text-sm font-semibold tracking-[0.18em] transition-all duration-300 ${
  active
    ? "text-[#8B5A2B]"
    : "text-[#3E2A1F] hover:text-[#B8860B]"
}`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop WhatsApp CTA */}
        <a
          href={waLink(WHATSAPP, "Hello Riwayat, I'd like to book an appointment.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-[#8B5A2B] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6F4518] hover:shadow-lg lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Book Appointment
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-[#5B3920] lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-maroon-dark/70 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Panel */}
        <div
          className={`fixed right-0 top-0 z-[9999] flex h-screen w-72 max-w-[80%] flex-col overflow-y-auto bg-maroon-dark p-6 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-heading text-xl font-bold text-cream">Menu</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-cream" />
            </button>
          </div>
          <ul className="flex flex-col gap-5">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`label-royal text-sm ${active ? "text-gold" : "text-cream/90"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <a
            href={waLink(WHATSAPP, "Hello Riwayat, I'd like to book an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-4 py-3 text-sm font-semibold text-maroon-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  )
}
