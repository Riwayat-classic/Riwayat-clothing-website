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
              className="group rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-secondary">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl text-card-foreground">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
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
