import { getContent } from "@/lib/data"
import {
  Scissors,
  Shirt,
  Gem,
  Ruler,
  Sparkles,
  Package,
} from "lucide-react"

const icons = {
  scissors: Scissors,
  shirt: Shirt,
  gem: Gem,
  ruler: Ruler,
  sparkles: Sparkles,
  package: Package,
}

export async function ServicesGrid() {
  const content = await getContent()

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            What We Offer
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
            Premium Tailoring Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            Every service is delivered with exceptional craftsmanship,
            luxurious fabrics and personalized attention to detail.
          </p>
        </div>

       <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {content.services.map((service) => {
            const Icon =
              icons[service.icon as keyof typeof icons]

            return (
              <div
                key={service.title}
               className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon/10 text-maroon transition-all duration-300 group-hover:scale-110">
                  {Icon && (
                    <Icon className="h-7 w-7" />
                  )}

                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold">

                  {service.title}

                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">

                  {service.description}

                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}