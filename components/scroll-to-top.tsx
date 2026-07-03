"use client"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: ScrollToTop
// WHAT IT DOES: Shows a button after the user scrolls past 300px that smoothly scrolls back to the top
// TO CUSTOMIZE: Change the scroll threshold (window.scrollY > 300) or button position (bottom-24 right-6)
// SEARCH TERM: "scroll to top React", "window.scrollTo smooth", "scroll event listener"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-maroon-dark text-gold shadow-lg transition-colors hover:bg-maroon"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
