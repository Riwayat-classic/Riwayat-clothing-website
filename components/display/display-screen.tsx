"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function DisplayScreen({
  products,
  content,
}: any) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [products.length])

  const product = products[current]

  return (
    <main className="relative h-screen overflow-hidden bg-black">

      <Image
        src={`/images/${product.images[0]}`}
        alt={product.name}
        fill
        priority
        className="object-cover"
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

        <div className="mt-10 flex gap-8 text-lg text-[#D4AF37]">

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