import {
  Scissors,
  Shirt,
  Sparkles,
  Ruler,
} from "lucide-react"

const features = [
  {
    icon: Scissors,
    title: "Expert Tailoring",
    description:
      "Every garment is tailored with precision for a flawless fit.",
  },
  {
    icon: Shirt,
    title: "Premium Fabrics",
    description:
      "We use carefully selected luxury fabrics for lasting elegance.",
  },
  {
    icon: Sparkles,
    title: "Handcrafted Details",
    description:
      "Fine embroidery and handcrafted finishing create timeless pieces.",
  },
  {
    icon: Ruler,
    title: "Perfect Fitting",
    description:
      "Made-to-measure craftsmanship designed around every client.",
  },
]

export function Craftsmanship() {
  return (
    <section className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Craftsmanship
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
            Designed With Precision
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Every Riwayat garment is created with attention to
            detail, premium materials and expert craftsmanship.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                  <Icon className="h-7 w-7 text-maroon" />
                </div>

                <h3 className="mt-6 font-heading text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
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