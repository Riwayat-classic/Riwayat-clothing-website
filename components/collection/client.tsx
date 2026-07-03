"use client"

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

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase()

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      )
    })
  }, [products, search])

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <CollectionSearch
          value={search}
          onChange={setSearch}
        />

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