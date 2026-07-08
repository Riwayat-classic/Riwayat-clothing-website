"use client"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: FloatingWhatsApp
// WHAT IT DOES: Fixed green WhatsApp button (bottom-right) with a pulse animation that opens a wa.me chat
// TO CUSTOMIZE: Change the phone number in the PHONE constant below. Change position via "bottom-6 right-6".
// SEARCH TERM: "fixed position button Tailwind", "CSS pulse animation", "WhatsApp link"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { MessageCircle } from "lucide-react"
import { waLink } from "@/lib/whatsapp"

// Change this number to your WhatsApp business number
const PHONE = "923222951804"

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(PHONE, "Hello Riwayat, I'd like to enquire about your collection.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  )
}
