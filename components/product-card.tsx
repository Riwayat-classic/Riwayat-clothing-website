"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageCircle, ZoomIn } from "lucide-react"

import type { Product } from "@/lib/types"
import { waLink } from "@/lib/whatsapp"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

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

const WHATSAPP = "923222951804"

 

export function ProductCard({
  product,
}: {
  product: Product
}) {
  const img =
    product.images?.[0] ??
    "placeholder-product.png"
    const [isZoomOpen, setIsZoomOpen] = useState(false)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#E8DCC2] bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

      <Link href={`/collection/${product.id}`}>

        <div className="relative h-[430px] overflow-hidden bg-[#F8F1E7]">

          <Image
            src={`/images/${img}`}
            alt={product.name}
            fill
            sizes="(max-width:768px)100vw,33vw"
            className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
          />
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-3 top-3 rounded-sm bg-maroon-dark/90 px-2.5 py-1 text-[10px] text-gold">
            {CATEGORY_LABELS[product.category]}
          </span>
          <button
  type="button"
  onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsZoomOpen(true)
  }}
  className="absolute bottom-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#4A0D18]/90 text-[#D4AF37] shadow-[0_8px_25px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 active:scale-95 md:hidden"
>
  <ZoomIn className="h-5 w-5" strokeWidth={2.25} />
</button>

        </div>

      </Link>

      <div className="flex flex-1 flex-col p-5">

        <Link href={`/collection/${product.id}`}>

         <h3 className="font-heading text-xl font-semibold transition-colors duration-300 group-hover:text-[#A67C52]">
            {product.name}

          </h3>

        </Link>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">

          {product.description}

        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="font-heading text-base font-bold text-maroon">

            {product.price > 0
              ? `PKR ${product.price.toLocaleString()}`
              : "Price on Request"}

          </span>

          <span
            className={`rounded-sm border px-2 py-1 text-[11px] ${STOCK_STYLES[product.stock]}`}
          >
            {STOCK_LABELS[product.stock]}
          </span>

        </div>

        <div className="mt-auto pt-6 flex flex-col gap-2">

          <a
            href={waLink(
              WHATSAPP,
              product.whatsappText
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold bg-gold px-4 py-2.5 text-sm font-semibold text-maroon-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-gold-light"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>

          {/*<ShopifyBuyButton
            shopifyVariantId={product.shopifyVariantId}
          />*/}

        </div>

      </div>
{isZoomOpen && (
  <div
  className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F8F1E7] md:hidden"
  onClick={() => setIsZoomOpen(false)}
>
  >
    <Zoom>
      <img
        src={`/images/${img}`}
        alt={product.name}
        className="max-h-screen max-w-screen object-contain"
      />
    </Zoom>

    <button
      type="button"
      onClick={() => setIsZoomOpen(false)}
      className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-2 text-white"
    >
      ✕
    </button>
  </div>
)}
    </article>
  )
}