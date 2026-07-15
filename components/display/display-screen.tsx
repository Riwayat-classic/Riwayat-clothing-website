"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function DisplayScreen({
  products,
}: any) {
  const [current, setCurrent] = useState(-2)

  useEffect(() => {
   const timer = setTimeout(() => {
  setCurrent((prev) => {
    if (prev === -2) return -1

    if (prev === -1) return 0

    if (prev >= products.length - 1) {
      return -2
    }

    return prev + 1
  })
}, current === -2 ? 5000 : current === -1 ? 8000 : 10000)

    return () => clearTimeout(timer)
  }, [current, products.length])

  // Logo screen
  if (current === -2) {
    return (
      <main className="flex h-screen items-center justify-center bg-black">
        <Image
          src="/images/navbar-logo.png"
          alt="Riwayat"
          width={500}
          height={220}
          priority
          className="animate-pulse"
        />
      </main>
    )
  }

  // Hero screen
  if (current === -1) {
    return (
      <main className="relative h-screen overflow-hidden bg-black">
        <Image
          src="/images/hero-banner.png"
          alt="Riwayat Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

       <div className="absolute left-12 top-1/2 -translate-y-1/2">
  <Image
    src="/images/navbar-logo.png"
    alt="Riwayat"
    width={420}
    height={180}
    className="animate-pulse"
  />
</div>
      </main>
    )
  }

  const product = products[current - 0]

  return (
    <main className="relative h-screen overflow-hidden bg-black">

     <Image
  key={product.images[0]}
  src={`/images/${product.images[0]}`}
  alt={product.name}
  fill
  priority
  className="animate-displayZoom object-cover"
/>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="absolute left-12 top-1/2 max-w-xl -translate-y-1/2">

        <Image
          src="/images/navbar-logo.png"
          alt="Riwayat"
          width={320}
          height={140}
          className="h-auto w-60"
        />

        <p className="mt-4 text-xl text-[#D4AF37]">
          Classic Groom & Partywear
        </p>

        <h1 className="mt-8 font-heading text-6xl font-bold text-white">
          {product.name}
        </h1>

        <p className="mt-6 text-2xl text-white/80">
          {product.description}
        </p>

        <div className="mt-10 flex gap-8 text-lg text-[#D4AF37]}">

          <div>
            <div className="text-4xl font-bold">
              35+
            </div>

            <div>Years of Craft</div>
          </div>

          <div>
            <div className="text-4xl font-bold">
              5000+
            </div>

            <div>Happy Clients</div>
          </div>

        </div>

      </div>

    </main>
  )
}