"use client"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: ProductCard
// WHAT IT DOES: Displays a single product with image, name, category badge, description, price, stock badge and order buttons
// TO CUSTOMIZE: Change image height in className="h-80", change accent in "bg-gold". Price shows only when price > 0 (else "Price on Request").
// SEARCH TERM: "React component props", "Tailwind CSS card layout", "Next.js Image component"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import type { Product } from "@/lib/types"
import { waLink } from "@/lib/whatsapp"
import { ShopifyBuyButton } from "./shopify-buy-button"

const CATEGORY_LABELS: Record<string, string> = {
  sherwani: "Sherwani",
  suits: "Suits",
  waistcoats: "Waistcoats",
  accessories: "Accessories",
  "ready-to-wear": "Ready to Wear",
}

const STOCK_LABELS: Record<string, string> = {
  available: "Available",
  "made-to-order": "Made to Order",
  "out-of-stock": "Out of Stock",
}

const STOCK_STYLES: Record<string, string> = {
  available: "bg-green-700/10 text-green-800 border-green-700/30",
  "made-to-order": "bg-gold/15 text-gold-dark border-gold/40",
  "out-of-stock": "bg-destructive/10 text-destructive border-destructive/30",
}

// WhatsApp number — keep in sync with data/content.json (contact.whatsapp)
const WHATSAPP = "920000000000"

export function ProductCard({ product }: { product: Product }) {
  const img = product.images?.[0]
  const src = img ? `/images/${img}` : "/images/placeholder-product.png"

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-80 w-full overflow-hidden bg-muted">
        <Image
          src={src || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="label-royal absolute left-3 top-3 rounded-sm bg-maroon-dark/90 px-2.5 py-1 text-[10px] text-gold">
          {CATEGORY_LABELS[product.category] ?? product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold text-foreground text-balance">
            {product.name}
          </h3>
        </div>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mb-4 mt-auto flex items-center justify-between">
          <span className="font-heading text-base font-bold text-maroon">
            {product.price > 0 ? `PKR ${product.price.toLocaleString()}` : "Price on Request"}
          </span>
          <span
            className={`rounded-sm border px-2 py-0.5 text-[11px] font-medium ${STOCK_STYLES[product.stock]}`}
          >
            {STOCK_LABELS[product.stock]}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={waLink(WHATSAPP, product.whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-4 py-2.5 text-sm font-semibold text-maroon-dark transition-colors hover:bg-gold-light"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
          <ShopifyBuyButton shopifyVariantId={product.shopifyVariantId} />
        </div>
      </div>
    </article>
  )
}
