"use client"
import { CollectionFilter } from "./filter"

import { useMemo, useState } from "react"

import type { Product } from "@/lib/types"

import { CollectionSearch } from "./search"
import { CollectionGrid } from "./grid"


interface CollectionClientProps {
  products: Product[]
}

export function CollectionClient({
  products,
}: CollectionClientProps) {
  const [search, setSearch] = useState("")
const [category, setCategory] = useState("all")
  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase()

   return products.filter((product) => {
  const matchesSearch =
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term)

  const matchesCategory =
    category === "all" ||
    product.category === category

  return matchesSearch && matchesCategory
})
  }, [products, search, category])

  return (
    <>
     <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
  <div className="flex flex-col gap-4 md:flex-row">
    <CollectionSearch
      value={search}
      onChange={setSearch}
    />

    <CollectionFilter
      value={category}
      onChange={setCategory}
    />
  </div>

  <p className="text-sm text-muted-foreground">
    Showing {filteredProducts.length} of {products.length} products
  </p>
</div>

      <CollectionGrid
        products={filteredProducts}
      />
    </>
  )
}