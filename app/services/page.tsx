import type { Metadata } from "next"

import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ProcessSection } from "@/components/services/process"
import { WhyChooseSection } from "@/components/services/why-choose"
import { ServicesFAQ } from "@/components/services/faq"
import { ServicesCTA } from "@/components/services/cta"

export const metadata: Metadata = {
  title: "Services | Riwayat",
  description:
    "Discover Riwayat's bespoke tailoring, premium sherwanis, tailored suits, groom styling and luxury menswear services.",
}

export default function ServicesPage() {
  return (
    <main className="bg-background pt-24">

      <ServicesHero />

      <ServicesGrid />

      <ProcessSection />

      <WhyChooseSection />

      <ServicesFAQ />

      <ServicesCTA />

    </main>
  )
}