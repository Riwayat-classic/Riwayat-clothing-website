// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: HomeHero
// WHAT IT DOES: Full-screen luxury hero with cinematic background, maroon & gold overlay,
// animated entrance, premium glass panel, decorative accents and dual CTA buttons.
// TO CUSTOMIZE:
// - Background image: /images/hero-banner.png
// - Hero content: data/content.json (hero)
// - Overlay strength: gradient classes below
// - Decorative blur colors: gold/maroon blocks
// SEARCH TERM:
// "Next.js Image fill"
// "Tailwind CSS glassmorphism"
// "Tailwind radial gradient"
// "CSS floating animation"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

import { waLink } from "@/lib/whatsapp"
import type { SiteContent } from "@/lib/types"

export function HomeHero({ content }: { content: SiteContent }) {
  const { hero, contact } = content

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-banner.png"
        alt="Groom wearing an embroidered Riwayat Sherwani"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-[1.02]"
      />

      {/* Dark luxury overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Premium maroon gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark via-maroon-dark/85 to-maroon-dark/25" />

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-maroon/30 blur-3xl" />

      {/* Gold radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(212,175,55,0.18),transparent_42%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 py-28 md:px-8 lg:py-36">
        <div className="max-w-3xl">
          {/* Luxury content panel */}
          <div className="rounded-2xl border border-gold/20 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-10">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="label-royal animate-fade-up text-sm uppercase tracking-[0.28em] text-gold md:text-base">
                {hero.preTitle}
              </p>
            </div>

            <h1 className="animate-fade-up delay-100 font-heading text-4xl font-bold leading-tight text-cream text-balance sm:text-5xl lg:text-7xl">
              {hero.title}
            </h1>

            <div className="mt-6 h-px w-28 bg-gradient-to-r from-gold to-transparent" />

            <p className="animate-fade-up delay-200 mt-8 max-w-2xl text-lg leading-8 text-cream/90 md:text-xl">
              {hero.tagline}
            </p>

            <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/collection"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold text-maroon-dark transition-all duration-300 hover:-translate-y-1 hover:bg-gold-light hover:shadow-[0_10px_30px_rgba(212,175,55,0.35)]"
              >
                View Collection

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={waLink(
                  contact.whatsapp,
                  "Hello Riwayat, I'd like to book an appointment."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-sm border border-gold/80 bg-white/5 px-8 py-4 text-sm font-semibold text-gold backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-maroon-dark hover:shadow-[0_10px_30px_rgba(212,175,55,0.30)]"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

                Book Appointment
              </a>
            </div>

            {/* Premium footer row */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-6 text-sm text-cream/70">
              <div>
                <span className="font-semibold text-gold">Premium</span> Fabrics
              </div>

              <div>
                <span className="font-semibold text-gold">Custom</span> Tailoring
              </div>

              <div>
                <span className="font-semibold text-gold">Made&nbsp;to&nbsp;Order</span>
              </div>

              <div>
                <span className="font-semibold text-gold">Ready&nbsp;to&nbsp;Wear</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-3 text-gold/80">
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="flex h-12 w-6 justify-center rounded-full border border-gold/50">
            <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  )
}