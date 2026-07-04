// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FILE: lib/types.ts
// WHAT IT DOES: Shared TypeScript types for products, content and orders used across the site
// TO CUSTOMIZE: Add new fields here when you extend the JSON data shapes
// SEARCH TERM: "TypeScript interface", "type definitions"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type ProductCategory =
  | "sherwani"
  | "suits"
  | "waistcoats"
  | "accessories"
  | "ready-to-wear"

export type StockStatus = "available" | "made-to-order" | "out-of-stock"

export interface Product {
  id: string
  name: string
  category: ProductCategory
  description: string
  price: number
  images: string[]
  featured: boolean
  stock: StockStatus
  shopifyVariantId: string
  whatsappText: string
  fabric: string
embroidery: string
customization: string
delivery: string
occasion: string
care: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  location: string
  rating: number
}

export interface Order {
  id: string
  name: string
  phone: string
  serviceType: string
  message: string
  createdAt: string
}

export interface SiteContent {
  hero: { preTitle: string; title: string; subtitle: string; tagline: string }
  features: string[]
  about: {
    story: string
    mission: string
    stats: { label: string; value: string }[]
    promise: { title: string; description: string }[]
  }
  services: { icon: string; title: string; description: string }[]
  faq: { question: string; answer: string }[]
  process: { step: string; description: string }[]
  promos: { image: string; title: string; subtitle: string }[]
 gallery: {
  image: string
  caption: string
  category: string
}[]
  contact: {
    whatsapp: string
    email: string
    address: string
    phone: string
    instagram: string
    facebook: string
    tiktok: string
  }
}
