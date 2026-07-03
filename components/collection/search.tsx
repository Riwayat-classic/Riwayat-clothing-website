"use client"

import { Search } from "lucide-react"

interface CollectionSearchProps {
  value: string
  onChange: (value: string) => void
}

export function CollectionSearch({
  value,
  onChange,
}: CollectionSearchProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="h-12 w-full rounded-md border border-border bg-white pl-12 pr-4 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  )
}