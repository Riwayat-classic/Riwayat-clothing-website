"use client"

import Image from "next/image"
import { useEffect, useState, } from "react"

export function DisplayScreen({
  products,
}: any) {
  const [current, setCurrent] = useState(-2)
  const [currentImage, setCurrentImage] = useState(0)

  const [isPaused, setIsPaused] = useState(false)



  useEffect(() => {
    if (isPaused) return
    if (current < 0) {
      const timer = setTimeout(() => {
        setCurrent((prev) => {
          if (prev === -2) return -1
          if (prev === -1) return 0

          return prev
        })
      }, current === -2 ? 5000 : 8000)

      return () => clearTimeout(timer)
    }

    const product = products[current]
 
    const displayImages =
      product.displayImages?.length > 0
        ? product.displayImages
        : product.images

    const timer = setTimeout(() => {
      if (currentImage < displayImages.length - 1) {
        setCurrentImage((prev) => prev + 1)
      } else {
        setCurrentImage(0)

        setCurrent((prev) => {
          if (prev >= products.length - 1) {
            return -2
          }

          return prev + 1
        })
      }
    }, 7000)

    return () => clearTimeout(timer)
  }, [current, currentImage, products, isPaused])
  useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsPaused((prev) => !prev)
    }

    if (event.key === "ArrowRight") {
      setCurrentImage(0)

      setCurrent((prev) => {
        if (prev >= products.length - 1) {
          return 0
        }

        return prev + 1
      })
    }

    if (event.key === "ArrowLeft") {
      setCurrentImage(0)

      setCurrent((prev) => {
        if (prev <= 0) {
          return products.length - 1
        }

        return prev - 1
      })
    }
  }

  window.addEventListener("keydown", handleKeyDown)

  return () => {
    window.removeEventListener("keydown", handleKeyDown)
  }
}, [products.length])

  // Logo screen
  if (current === -2) {
    return (
      <main className="flex h-screen items-center justify-center bg-[#F8F1E7]">
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
      <main className="relative h-screen overflow-hidden bg-[#F8F1E7]">
        <Image
          src="/images/hero-banner.png"
          alt="Riwayat Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#3D0707]/25" />

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

  const product = products[current]

  const displayImages =
    product.displayImages?.length > 0
      ? product.displayImages
      : product.images

  return (
    <main className="relative h-screen overflow-hidden bg-[#F8F1E7]">
      <Image
        key={displayImages[currentImage]}
        src={`/images/${displayImages[currentImage]}`}
        alt={product.name}
        fill
        priority
        unoptimized
        className="animate-displayZoom object-contain"
      />

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

        <h1 className="mt-8 font-heading text-6xl font-bold text-[#5A0A0A]">
          {product.name}
        </h1>

        <p className="mt-6 text-2xl text-[#6B4E3D]">
          {product.description}
        </p>

        <div className="mt-10 flex gap-8 text-lg text-[#D4AF37]">
          <div>
            <div className="text-4xl font-bold text-[#5A0A0A]">
              35+
            </div>

            <div>Years of Craft</div>
          </div>

          <div>
            <div className="text-4xl font-bold text-[#5A0A0A]">
              5000+
            </div>

            <div>Happy Clients</div>
          </div>
        </div>
      </div>
    </main>
  )
}