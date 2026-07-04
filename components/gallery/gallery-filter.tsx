"use client"

const categories = [
  "All",
  "Sherwani",
  "Suits",
  "Waistcoats",
  "Accessories",
]

interface GalleryFilterProps {
  value: string
  onChange: (value: string) => void
}

export function GalleryFilter({
  value,
  onChange,
}: GalleryFilterProps) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            value === category
              ? "bg-maroon text-white"
              : "border border-border bg-white hover:border-gold hover:text-maroon"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}