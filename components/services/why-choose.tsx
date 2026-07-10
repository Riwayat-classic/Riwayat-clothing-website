import {
  ShieldCheck,
  Scissors,
  Sparkles,
  Clock,
  Ruler,
  Gem,
} from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Only carefully selected fabrics and premium materials are used in every garment.",
  },
  {
    icon: Scissors,
    title: "Expert Tailoring",
    description:
      "Experienced craftsmen ensure every stitch reflects precision and elegance.",
  },
  {
    icon: Ruler,
    title: "Perfect Fit",
    description:
      "Made-to-measure garments designed around your exact measurements.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect your special occasions and deliver within the promised timeline.",
  },
  {
    icon: Sparkles,
    title: "Luxury Finishing",
    description:
      "Attention to embroidery, finishing and detailing creates timeless outfits.",
  },
  {
    icon: Gem,
    title: "Personalized Experience",
    description:
      "From consultation to final fitting, every customer receives individual attention.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Why Choose Riwayat
          </p>

         <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
            Crafted Around Your Personality
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            Every garment is tailored to combine heritage,
            luxury and a perfect fit for your most memorable occasions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
               <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-maroon" />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}