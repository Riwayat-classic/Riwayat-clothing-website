"use client"

const categories = [
  "all",
  "sherwani",
  "prince-coat",
  "suits",
  "waistcoats",
  "kurta-pajama",
]

const labels: Record<string, string> = {
  all: "All",
  sherwani: "Sherwani",
  "prince-coat": "Prince Coat",
  suits: "Suits",
  waistcoats: "Waistcoats",
  "kurta-pajama": "Kurta Pajama",
}

interface CollectionFilterProps {
  value: string
  onChange: (value: string) => void
}

export function CollectionFilter({
  value,
  onChange,
}: CollectionFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
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
          {labels[category]}
        </button>
      ))}
    </div>
  )
}