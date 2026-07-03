import type { Metadata } from "next"
import { getContent } from "@/lib/data"
import { ServicesOverview } from "@/components/home/services-overview"

export const metadata: Metadata = {
  title: "Services | Riwayat",
  description:
    "Discover Riwayat's bespoke tailoring, sherwanis, suits, partywear and groom styling services.",
}

export default async function ServicesPage() {
  const content = await getContent()

  return (
    <main className="bg-background pt-24">
      <section className="bg-maroon-dark py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="label-royal text-gold">
            Our Expertise
          </p>

          <h1 className="mt-4 font-heading text-5xl font-bold text-cream">
            Our Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-cream/80">
            Every garment is handcrafted with precision, premium fabrics,
            and decades of tailoring experience.
          </p>
        </div>
      </section>

      <ServicesOverview services={content.services} />
    </main>
  )
}