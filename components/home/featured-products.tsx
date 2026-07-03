// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: FeaturedProducts
// WHAT IT DOES: Shows featured products (featured: true in data/products.json) in a grid on the home page
// TO CUSTOMIZE: Mark products as "featured": true/false in data/products.json
// SEARCH TERM: "Tailwind grid responsive", "array filter map React"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/types"

export function FeaturedProducts({ products }: { products: Product[] }) {
  const featured = products.filter((p) => p.featured).slice(0, 6)

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          label="The Signature Edit"
          title="Featured Collection"
          subtitle="A curated selection of our most loved sherwanis, suits and partywear."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/collection"
            className="inline-block rounded-sm bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-maroon-light"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
