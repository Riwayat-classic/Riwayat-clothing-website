"use client"
import { ImageMagnifier } from "./image-magnifier"
import Image from "next/image"
import { useState } from "react"
import { MessageCircle, Calendar } from "lucide-react"

import type { Product } from "@/lib/types"
import { waLink } from "@/lib/whatsapp"

interface Props {
  product: Product
}

const CATEGORY_LABELS: Record<string, string> = {
  sherwani: "Sherwani",
  suits: "Suits",
  waistcoats: "Waistcoats",
  accessories: "Accessories",
  "ready-to-wear": "Ready To Wear",
}

const STOCK_LABELS: Record<string, string> = {
  available: "Available",
  "made-to-order": "Made To Order",
  "out-of-stock": "Out Of Stock",
}

const STOCK_STYLES: Record<string, string> = {
  available:
    "bg-green-700/10 text-green-700 border-green-700/30",

  "made-to-order":
    "bg-gold/15 text-gold-dark border-gold/30",

  "out-of-stock":
    "bg-red-600/10 text-red-600 border-red-600/30",
}

const WHATSAPP = "923222951804"

export function ProductDetailClient({
  product,
}: Props) {
  const [selectedImage, setSelectedImage] =
    useState(product.images[0])

  return (
    <div className="grid gap-12 lg:grid-cols-2">

      {/* LEFT */}

      <div>

        <ImageMagnifier
  src={`/images/${selectedImage}`}
  alt={product.name}
/>

        {product.images.length > 1 && (

          <div className="mt-5 flex flex-wrap gap-4">

           {product.images.map((image) => (

  <button
    key={image}
    onClick={() => setSelectedImage(image)}
    className={`group relative h-24 w-20 overflow-hidden rounded border transition-all duration-300 hover:scale-105 ${
      selectedImage === image
        ? "border-maroon"
        : "border-border"
    }`}
  >

    <Image
      src={`/images/${image}`}
      alt=""
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-110"
    />

  </button>

))}

            ))

          </div>

        )}

      </div>

      {/* RIGHT */}

      <div className="lg:pt-6">

        <span className="inline-block rounded-full bg-gold/15 px-4 py-1 text-sm font-medium text-maroon">

          {CATEGORY_LABELS[product.category]}

        </span>

        <h1 className="mt-5 font-heading text-4xl font-bold sm:text-5xl">

          {product.name}

        </h1>

        <div className="mt-5">

          <span
            className={`rounded-full border px-4 py-2 text-sm ${STOCK_STYLES[product.stock]}`}
          >
            {STOCK_LABELS[product.stock]}
          </span>

        </div>

        <p className="mt-8 text-lg leading-8 text-muted-foreground">

          {product.description}

        </p>

        <div className="mt-8">

          <p className="text-4xl font-bold text-maroon">

            {product.price > 0
              ? `PKR ${product.price.toLocaleString()}`
              : "Price on Request"}

          </p>

        </div>
        <section className="mt-10 rounded-xl border border-border bg-card p-6 shadow-sm">

  <h2 className="font-heading text-2xl font-semibold text-maroon">
    Product Specifications
  </h2>

  <div className="mt-6 grid gap-4 sm:grid-cols-2">

    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        Fabric
      </p>
      <p className="mt-1 font-medium">
        {product.fabric}
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        Embroidery
      </p>
      <p className="mt-1 font-medium">
        {product.embroidery}
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        Customization
      </p>
      <p className="mt-1 font-medium">
        {product.customization}
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        Delivery
      </p>
      <p className="mt-1 font-medium">
        {product.delivery}
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        Occasion
      </p>
      <p className="mt-1 font-medium">
        {product.occasion}
      </p>
    </div>

    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        Care
      </p>
      <p className="mt-1 font-medium">
        {product.care}
      </p>
    </div>

  </div>

</section>

        <div className="mt-10 flex flex-col gap-4">

          <a
            href={waLink(
              WHATSAPP,
              product.whatsappText
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-sm bg-gold px-6 py-4 font-semibold text-maroon-dark transition hover:bg-gold-light"
          >
            <MessageCircle className="h-5 w-5" />

            Order on WhatsApp

          </a>

          <a
  href={waLink(
    WHATSAPP,
    `Hello Riwayat, I would like to book an appointment for ${product.name}.`
  )}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 rounded-sm border border-maroon px-6 py-4 font-semibold text-maroon transition hover:bg-maroon hover:text-white"
>
  <Calendar className="h-5 w-5" />

  Book Appointment
</a>
        </div>

      </div>

    </div>
  )
}