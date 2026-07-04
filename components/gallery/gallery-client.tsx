"use client"
import { GalleryLightbox } from "./gallery-lightbox"
import { useMemo, useState } from "react"
import Image from "next/image"

import { GalleryFilter } from "./gallery-filter"

interface GalleryItem {
  image: string
  caption: string
  category: string
}

interface GalleryClientProps {
  items: GalleryItem[]
}

export function GalleryClient({
  items,
}: GalleryClientProps) {
  const [category, setCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = useMemo(() => {
    if (category === "All") return items

    return items.filter(
      (item) => item.category === category
    )
  }, [items, category])

  return (
    <>
      <GalleryFilter
        value={category}
        onChange={setCategory}
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <div
  key={item.image}
  onClick={() => {
    setCurrentIndex(filteredItems.indexOf(item))
    setLightboxOpen(true)
  }}
  className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={`/images/${item.image}`}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <p className="text-center text-sm font-medium">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
      {lightboxOpen && (
  <GalleryLightbox
    items={filteredItems}
    currentIndex={currentIndex}
    onClose={() => setLightboxOpen(false)}
    onPrev={() =>
      setCurrentIndex((prev) =>
        prev === 0
          ? filteredItems.length - 1
          : prev - 1
      )
    }
    onNext={() =>
      setCurrentIndex((prev) =>
        prev === filteredItems.length - 1
          ? 0
          : prev + 1
      )
    }
  />
)}
    </>
  )
}