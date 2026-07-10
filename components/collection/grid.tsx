import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/types"

export function CollectionGrid({
  products,
}: {
  products: Product[]
}) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border py-20 text-center">
        <h3 className="font-heading text-2xl">
          No products found
        </h3>

        <p className="mt-3 text-muted-foreground">
          Try another category or search keyword.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}