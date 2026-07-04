"use client"

import { useMemo, useState } from "react"

import type { Product } from "@/lib/types"

import { CollectionSearch } from "./search"
import { CollectionFilter } from "./filter"
import { CollectionGrid } from "./grid"

interface CollectionClientProps {
  products: Product[]
}

export function CollectionClient({
  products,
}: CollectionClientProps) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("featured")

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase()

    const result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)

      const matchesCategory =
        category === "all" ||
        product.category === category

      return matchesSearch && matchesCategory
    })

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break

      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break

      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break

      default:
        break
    }

    return result
  }, [products, search, category, sort])

  return (
    <>
      <div className="mb-10 flex flex-col gap-6">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <CollectionSearch
            value={search}
            onChange={setSearch}
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-11 rounded-md border border-border bg-white px-4 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
          </select>

        </div>

        <CollectionFilter
          value={category}
          onChange={setCategory}
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