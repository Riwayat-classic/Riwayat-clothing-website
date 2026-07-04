"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryItem {
  image: string
  caption: string
  category: string
}

interface GalleryLightboxProps {
  items: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const item = items[currentIndex]

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white transition hover:bg-black"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={`/images/${item.image}`}
          alt={item.caption}
          className="max-h-[90vh] max-w-full rounded object-contain"
        />

        <p className="mt-4 text-center text-lg text-white">
          {item.caption}
        </p>

        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}