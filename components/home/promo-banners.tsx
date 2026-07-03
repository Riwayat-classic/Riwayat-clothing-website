// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: PromoBanners
// WHAT IT DOES: 2x2 grid of promotional image cards with title + subtitle overlay
// TO CUSTOMIZE: Edit promos in data/content.json (promos array — image, title, subtitle). Change grid via md:grid-cols-2.
// SEARCH TERM: "Tailwind CSS grid", "image overlay gradient", "Next.js Image"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import Image from "next/image"
import type { SiteContent } from "@/lib/types"

export function PromoBanners({ promos }: { promos: SiteContent["promos"] }) {
  return (
    <section className="bg-cream-light py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {promos.map((promo) => (
            <div
              key={promo.title}
              className="group relative h-64 overflow-hidden rounded-sm border border-gold/30"
            >
              <Image
                src={`/images/${promo.image}`}
                alt={promo.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 via-maroon-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-xl font-bold text-cream">{promo.title}</h3>
                <p className="mt-1 text-sm text-cream/80">{promo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
