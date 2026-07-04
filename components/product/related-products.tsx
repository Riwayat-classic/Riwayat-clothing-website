import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/types"

interface RelatedProductsProps {
  currentProduct: Product
  products: Product[]
}

export function RelatedProducts({
  currentProduct,
  products,
}: RelatedProductsProps) {
  const related = products
    .filter(
      (product) =>
        product.id !== currentProduct.id &&
        product.category === currentProduct.category
    )
    .slice(0, 4)

  const fallback =
    related.length < 4
      ? products
          .filter(
            (product) =>
              product.id !== currentProduct.id &&
              !related.some((p) => p.id === product.id)
          )
          .slice(0, 4 - related.length)
      : []

  const finalProducts = [...related, ...fallback]

  if (finalProducts.length === 0) {
    return null
  }

  return (
    <section className="mt-24">
      <div className="mb-10">
        <h2 className="font-heading text-4xl font-bold text-maroon">
          You May Also Like
        </h2>

        <p className="mt-3 text-muted-foreground">
          Discover more handcrafted pieces from Riwayat.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {finalProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  )
}