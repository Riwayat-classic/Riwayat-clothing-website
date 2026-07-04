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

      <BusinessHours />

      <ContactMap />

      <ContactCTA />

    </main>
  )
}