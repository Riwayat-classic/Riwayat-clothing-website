// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: Testimonials
// WHAT IT DOES: Displays client testimonials on a maroon section
// TO CUSTOMIZE: Edit data/testimonials.json
// SEARCH TERM: "Tailwind grid responsive", "lucide react icons"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { Star, Quote } from "lucide-react"

type Testimonial = {
  id: string
  quote: string
  author: string
  location: string
  rating: number
}

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-maroon py-20 text-cream md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="label-royal text-xs text-gold">Words From Our Clients</p>
          <h2 className="mt-3 text-balance text-3xl text-cream md:text-4xl">Trusted by Grooms & Gentlemen</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-lg border border-gold/30 bg-maroon-dark/40 p-8">
              <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
              <div className="mt-4 flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 leading-relaxed text-cream/90">{`"${t.quote}"`}</blockquote>
              <figcaption className="mt-6">
                <span className="block font-heading text-lg text-gold-light">{t.author}</span>
                <span className="text-sm text-cream/70">{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
