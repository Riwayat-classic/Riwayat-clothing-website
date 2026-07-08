import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react"
import { waLink } from "@/lib/whatsapp"

const WHATSAPP = "923222951804"

export function CollectionHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero-banner.png"
        alt="Riwayat Collection"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/95 via-maroon-dark/80 to-maroon-dark/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-4 py-24 md:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gold">
          <Link href="/" className="hover:text-gold-light">
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="text-cream">
            Collection
          </span>
        </div>

        <div className="max-w-3xl">

          <p className="label-royal text-gold">
            Premium Groom & Partywear
          </p>

          <h1 className="mt-4 font-heading text-5xl font-bold leading-tight text-cream md:text-6xl">
            The Signature Collection
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            Explore handcrafted sherwanis, tailored suits,
            waistcoats and luxury accessories created for
            the modern gentleman.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3 text-sm font-semibold text-maroon-dark hover:bg-gold-light"
            >
              Browse Collection
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={waLink(
                WHATSAPP,
                "Hello Riwayat, I'd like to book an appointment."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-gold px-7 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-maroon-dark"
            >
              <MessageCircle className="h-4 w-4" />
              Book Appointment
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}