import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"

import { RelatedProducts } from "@/components/product/related-products"
import { ProductDetailClient } from "@/components/product/product-detail-client"

import { ProductBreadcrumb } from "@/components/product/Breadcrumb"

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
    <ProductBreadcrumb productName={product.name} />
    <ProductDetailClient product={product} />

<RelatedProducts
  currentProduct={product}
  products={products}
/>
  </main>
)
}