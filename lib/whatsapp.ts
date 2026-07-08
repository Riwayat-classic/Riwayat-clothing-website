// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FILE: lib/whatsapp.ts
// WHAT IT DOES: Builds a wa.me link with a pre-filled message
// TO CUSTOMIZE: Change the default phone number in data/content.json (contact.whatsapp)
// SEARCH TERM: "WhatsApp click to chat link", "encodeURIComponent"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// PLACEHOLDER_WHATSAPP_NUMBER — fallback used if content.json has no number
export const PLACEHOLDER_WHATSAPP_NUMBER = "923222951804"

export function waLink(phone: string, text: string): string {
  const number = (phone || PLACEHOLDER_WHATSAPP_NUMBER).replace(/[^0-9]/g, "")
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}
