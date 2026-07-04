import type { Metadata } from "next"

import { AboutHero } from "@/components/about/about-hero"
import { Story } from "@/components/about/story"
import { Craftsmanship } from "@/components/about/craftsmanship"
import { Stats } from "@/components/about/stats"
import { PromiseSection } from "@/components/about/promise"
import { AboutCTA } from "@/components/about/cta"

export const metadata: Metadata = {
  title: "About | Riwayat",
  description:
    "Learn about Riwayat, our heritage, craftsmanship and commitment to premium men's tailoring.",
}

export default function AboutPage() {
  return (
    <main className="bg-background pt-24">

      <AboutHero />

      <Story />

      <Craftsmanship />

      <Stats />

      <PromiseSection />

      <AboutCTA />

    </main>
  )
}