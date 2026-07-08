// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: ServicesOverview
// WHAT IT DOES: Grid of brand services shown on the home page
// TO CUSTOMIZE: Edit the services array in data/content.json
// SEARCH TERM: "Tailwind grid responsive", "array map render React"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { ServiceIcon } from "@/components/service-icon"

type Service = { icon: string; title: string; description: string }

export function ServicesOverview({ services }: { services: Service[] }) {
  return (
    <section className="bg-cream-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          label="What We Offer"
          title="Crafted Services for Every Occasion"
          subtitle="From bespoke wedding sherwanis to ready-to-wear elegance, every service is delivered with master craftsmanship."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-[#E8DCC2] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F1E7] text-[#8B5A2B] transition-all duration-500 group-hover:bg-[#8B5A2B] group-hover:text-white">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-[#3E2A1F]">{service.title}</h3>
              <p className="mt-3 leading-7 text-[#6B625C]">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="label-royal inline-block border-b-2 border-gold pb-1 text-sm text-primary transition-colors hover:text-gold-dark"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
