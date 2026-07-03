import { CollectionGrid } from "@/components/collection/grid"
import type { Metadata } from "next"
import { getProducts } from "@/lib/data"
import { CollectionHero } from "@/components/collection/collection-hero"

export const metadata: Metadata = {
  title: "Collection | Riwayat",
  description:
    "Explore Riwayat's premium collection of sherwanis, suits, waistcoats and accessories.",
}

export default async function CollectionPage() {
  
  const products = await getProducts()

  return (
    <main className="bg-background">
      <CollectionHero />

      <section
  id="products"
  className="mx-auto max-w-7xl px-4 py-20 md:px-8"
>
        <h2 className="font-heading text-3xl font-bold">
          Collection
        </h2>

        <p className="mt-2 text-muted-foreground">
          Total Products: {products.length}
        </p>
        <div className="mt-12">
  <CollectionGrid products={products} />
</div>
      </section>
    </main>
  )
}