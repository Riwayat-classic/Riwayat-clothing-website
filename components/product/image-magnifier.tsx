"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageMagnifierProps {
  src: string
  alt: string
}

export function ImageMagnifier({
  src,
  alt,
}: ImageMagnifierProps) {
  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  })

  const [zoom, setZoom] = useState(false)
  
  const [isMobile, setIsMobile] = useState(false)

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect()

    const x =
      ((e.clientX - rect.left) / rect.width) * 100

    const y =
      ((e.clientY - rect.top) / rect.height) * 100

    setPosition({ x, y })
  }

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card select-none touch-none"onContextMenu={(e) => e.preventDefault()}
      onMouseMove={handleMove}
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
      onTouchStart={(e) => {
  setIsMobile(true)
  setZoom(true)

  const touch = e.touches[0]
  const rect = e.currentTarget.getBoundingClientRect()

  const x =
    ((touch.clientX - rect.left) / rect.width) *
    100

  const y =
    ((touch.clientY - rect.top) / rect.height) *
    100

  setPosition({ x, y })
}}

onTouchMove={(e) => {
  const touch = e.touches[0]
  const rect = e.currentTarget.getBoundingClientRect()

  const x =
    ((touch.clientX - rect.left) / rect.width) *
    100

  const y =
    ((touch.clientY - rect.top) / rect.height) *
    100

  setPosition({ x, y })
}}

onTouchEnd={() => {
  setZoom(false)
}}
    >
      <Image
  src={src}
  alt={alt}
  fill
  priority
  draggable={false}
  className="object-cover transition-transform duration-200 select-none"
  style={{
    transform: zoom
      ? "scale(2)"
      : "scale(1)",
    transformOrigin: `${position.x}% ${position.y}%`,
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    userSelect: "none",
  }}
/>
    </div>
  )
}