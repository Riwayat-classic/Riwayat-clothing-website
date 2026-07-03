import type { Metadata } from "next"
import { getContent, getProducts } from "@/lib/data"

export const metadata: Metadata = {
  title: "Collection | Riwayat",
  description:
    "Explore Riwayat's premium collection of sherwanis, suits, waistcoats and accessories.",
}

export default async function CollectionPage() {
  const content = await getContent()
  const products = await getProducts()

  return (
    <main className="bg-background">
      <section className="border-b border-border bg-maroon-dark py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="label-royal text-gold">
            {content.hero.preTitle}
          </p>

          <h1 className="mt-4 font-heading text-5xl font-bold text-cream">
            The Signature Collection
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80">
            Discover handcrafted sherwanis, tailored suits,
            waistcoats and premium accessories designed
            for the modern gentleman.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <h2 className="font-heading text-3xl font-bold">
          Collection
        </h2>

        <p className="mt-2 text-muted-foreground">
          Total Products: {products.length}
        </p>
      </section>
    </main>
  )
}