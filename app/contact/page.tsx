import type { Metadata } from "next"

import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { BusinessHours } from "@/components/contact/business-hours"
import { ContactMap } from "@/components/contact/map"
import { ContactCTA } from "@/components/contact/cta"

export const metadata: Metadata = {
  title: "Contact | Riwayat",
  description:
    "Contact Riwayat for bespoke sherwanis, tailored suits and premium men's tailoring.",
}

export default function ContactPage() {
  return (
    <main className="bg-background pt-24">

      <ContactHero />

      <ContactInfo />

      <ContactForm />

        {/* Android TV App Download */}
      <section className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Riwayat Android TV App
        </h2>

        <p className="mb-6 text-muted-foreground">
          Download and install the Riwayat Android TV application on your Android TV or Google TV.
        </p>

        <a
          href="/downloads/app-debug.apk"
          download
          className="inline-flex items-center rounded-lg bg-black px-6 py-3 text-white transition hover:bg-neutral-800"
        >
          Download Android TV App
        </a>
      </section>

      <BusinessHours />

      <ContactMap />

      <ContactCTA />

    </main>
  )
}