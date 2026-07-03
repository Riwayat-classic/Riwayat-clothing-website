import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/types"

export function CollectionGrid({
  products,
}: {
  products: Product[]
}) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="font-heading text-2xl">
          No products found
        </h3>

        <p className="mt-3 text-muted-foreground">
          Try changing the search or filters.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}