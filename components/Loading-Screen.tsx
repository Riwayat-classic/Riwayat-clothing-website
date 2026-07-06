"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  if (hide) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-maroon-dark">
      <div className="animate-pulse">
        <Image
          src="/images/riwayat-logo.png"
          alt="Riwayat"
          width={420}
          height={220}
          priority
          className="h-auto w-[320px] md:w-[420px]"
        />
      </div>
    </div>
  )
}