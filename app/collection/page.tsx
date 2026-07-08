import { CollectionClient } from "@/components/collection/collection-client"

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
  className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:py-28"
>
        <h2 className="font-heading text-4xl font-bold tracking-tight text-[#3E2A1F] md:text-5xl">
  Explore Our Collection
</h2>

        <p className="mt-4 text-lg text-[#6B625C]">
  Discover our handcrafted collection of sherwanis, suits, waistcoats and accessories.
  <span className="ml-2 font-semibold text-[#8B5A2B]">
    ({products.length} Products)
  </span>
</p>
       <div className="mt-14">
  <CollectionClient products={products} />
</div>
      </section>
    </main>
  )
}