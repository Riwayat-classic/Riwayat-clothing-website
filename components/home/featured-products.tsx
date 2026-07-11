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
          label="Riwayat Signature"

title="Crafted for Every Occasion"

subtitle="Explore our finest sherwanis, prince coats, waistcoats and tailored ensembles designed for weddings, celebrations and timeless elegance."
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/collection"
            className="inline-block rounded-sm border border-gold bg-maroon px-8 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-gold hover:text-maroon-dark"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
