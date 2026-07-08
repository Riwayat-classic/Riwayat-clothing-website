"use client"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: ShopifyBuyButton
// WHAT IT DOES: Placeholder "Buy Now" button. When a Shopify variant ID is set on a product, wire it to the Shopify Buy Button SDK here.
// TO CUSTOMIZE: Replace the alert() in handleClick with your Shopify Buy Button SDK call. Pass shopifyVariantId via props.
// SEARCH TERM: "Shopify Buy Button SDK", "Shopify buy button JavaScript", "React onClick handler"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { ShoppingBag } from "lucide-react"

export function ShopifyBuyButton
({ shopifyVariantId }: { shopifyVariantId: string }) {
  const configured = Boolean(shopifyVariantId)

  function handleClick() {
    if (!configured) {
      // PLACEHOLDER: No Shopify variant connected yet.
      alert("Online checkout coming soon. Please order via WhatsApp for now.")
      return
    }
    // integrate Shopify Buy Button SDK with shopifyVariantId
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-maroon px-4 py-2.5 text-sm font-semibold text-maroon transition-colors hover:bg-maroon hover:text-cream"
    >
      <ShoppingBag className="h-4 w-4" />
      {configured ? "Buy Now" : "Buy Now (Soon)"}
    </button>
  )
}
