// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: CtaStrip
// WHAT IT DOES: Full-width call-to-action band inviting users to book a consultation
// TO CUSTOMIZE: Edit heading/button text below. WhatsApp number comes from props.
// SEARCH TERM: "Tailwind CTA section", "WhatsApp deep link"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { waLink } from "@/lib/whatsapp"

export function CtaStrip({ whatsapp }: { whatsapp: string }) {
  return (
    <section className="relative overflow-hidden bg-maroon-dark py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <p className="label-royal text-xs text-gold">Begin Your Journey</p>
        <h2 className="mt-4 text-balance text-3xl text-cream md:text-5xl">
          Ready to Dress for Your Moment?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-cream/80">
          Book a personal consultation with our master tailors and let us craft a garment that
          tells your story.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={waLink(whatsapp, "I'd like to book a consultation with Riwayat")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-3 text-sm font-semibold text-maroon-dark transition-colors hover:bg-gold-light"
          >
            <MessageCircle className="h-4 w-4" />
            Book on WhatsApp
          </a>
          <Link
            href="/contact"
            className="label-royal inline-block border-b-2 border-gold/60 pb-1 text-sm text-cream transition-colors hover:border-gold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
