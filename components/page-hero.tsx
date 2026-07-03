// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: PageHero
// WHAT IT DOES: Reusable inner-page hero banner with a title, subtitle and breadcrumb on a maroon background
// TO CUSTOMIZE: Change background via the maroon gradient classes. Pass `crumb` for the breadcrumb current-page label.
// SEARCH TERM: "Next.js Link breadcrumb", "Tailwind gradient background", "reusable hero component"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function PageHero({
  title,
  subtitle,
  crumb,
}: {
  title: string
  subtitle?: string
  crumb: string
}) {
  return (
    <section className="bg-gradient-to-b from-maroon-dark to-maroon pt-28 pb-14 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <nav className="mb-4 flex items-center justify-center gap-1 text-xs text-cream/70">
          <Link href="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gold">{crumb}</span>
        </nav>
        <h1 className="font-heading text-4xl font-bold text-cream text-balance md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-cream/80">
            {subtitle}
          </p>
        )}
        <div className="mx-auto mt-6 h-px w-24 bg-gold" />
      </div>
    </section>
  )
}
