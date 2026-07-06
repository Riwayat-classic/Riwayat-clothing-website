"use client"

import { useEffect, useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"

export default function HomePageClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("riwayat-loaded")

    if (alreadyLoaded) {
      setLoaded(true)
      return
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("riwayat-loaded", "true")
      setLoaded(true)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  if (!loaded) {
    return <LoadingScreen />
  }

  return <>{children}</>
}