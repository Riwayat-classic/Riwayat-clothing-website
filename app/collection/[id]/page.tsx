import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"

import { getProducts } from "@/lib/data"



interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params

  const products = await getProducts()

  const product = products.find((p) => p.id === id)

  if (!product) {
    return {
      title: "Product Not Found | Riwayat",
    }
  }

  return {
    title: `${product.name} | Riwayat`,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { id } = await params

  const products = await getProducts()

  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
  <main className="mx-auto max-w-7xl px-4 py-16 md:px-8">

    <div className="grid gap-12 lg:grid-cols-2">

      {/* LEFT SIDE */}

      <div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card">

          <Image
            src={`/images/${product.images[0]}`}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div>

        <h1 className="font-heading text-5xl font-bold">
          {product.name}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-8">

          <p className="text-3xl font-bold text-maroon">

            {product.price > 0
              ? `PKR ${product.price.toLocaleString()}`
              : "Price on Request"}

          </p>

        </div>

      </div>

    </div>

  </main>
)
  
}