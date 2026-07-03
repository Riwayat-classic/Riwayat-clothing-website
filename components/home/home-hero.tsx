// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: HomeHero
// WHAT IT DOES: Full-screen hero with background image, maroon gradient overlay, staggered fade-in text and two CTA buttons
// TO CUSTOMIZE: Change the background image (/images/hero-banner.png). Edit headings via data/content.json (hero). Adjust overlay strength in the gradient classes.
// SEARCH TERM: "Tailwind background image overlay", "CSS keyframe animation stagger", "Next.js Image fill"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"
import { waLink } from "@/lib/whatsapp"
import type { SiteContent } from "@/lib/types"

export function HomeHero({ content }: { content: SiteContent }) {
  const { hero, contact } = content
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-banner.png"
        alt="Groom wearing an embroidered Riwayat sherwani"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Maroon gradient overlay (stronger on the left) */}
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark via-maroon-dark/80 to-maroon-dark/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 md:px-8">
        <div className="max-w-2xl">
          <p className="label-royal animate-fade-up text-sm text-gold md:text-base">
            {hero.preTitle}
          </p>
          <h1 className="animate-fade-up delay-100 mt-4 font-heading text-4xl font-bold leading-tight text-cream text-balance sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-pretty text-lg leading-relaxed text-cream/85">
            {hero.tagline}
          </p>
          <div className="animate-fade-up delay-300 mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/collection"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold text-maroon-dark transition-colors hover:bg-gold-light"
            >
              View Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waLink(contact.whatsapp, "Hello Riwayat, I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold px-7 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-maroon-dark"
            >
              <MessageCircle className="h-4 w-4" />
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
