import type { Metadata } from "next"
import Image from "next/image"
import { getContent } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "About | Riwayat",
  description:
    "Learn about Riwayat's craftsmanship, heritage and commitment to luxury menswear.",
}

export default async function AboutPage() {
  const content = await getContent()
  const about = content.about

  return (
    <main className="bg-background pt-24">
      {/* Hero */}
      <section className="bg-maroon-dark py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <p className="label-royal text-gold">
            Our Story
          </p>

          <h1 className="mt-4 font-heading text-5xl font-bold text-cream">
            About Riwayat
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-cream/80">
            Preserving tradition through timeless tailoring and exceptional craftsmanship.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:px-8">

          <div>
            <SectionHeading
              label="Who We Are"
              title="Crafting Elegance Since Day One"
            />

            <p className="leading-8 text-muted-foreground">
              {about.story}
            </p>

            <div className="mt-8 rounded-lg border bg-card p-6">
              <h3 className="font-heading text-2xl">
                Our Mission
              </h3>

              <p className="mt-4 text-muted-foreground">
                {about.mission}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/images/about-story.png"
              alt="Riwayat Craftsmanship"
              width={700}
              height={850}
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream-light py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 text-center sm:grid-cols-2 lg:grid-cols-4">

          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border bg-card p-8 shadow-sm"
            >
              <h2 className="font-heading text-5xl text-maroon">
                {stat.value}
              </h2>

              <p className="mt-3 text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Promise */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">

          <SectionHeading
            label="Why Choose Us"
            title="The Riwayat Promise"
            subtitle="Luxury isn't just what we make — it's how we make it."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {about.promise.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border bg-card p-8 shadow-sm"
              >
                <h3 className="font-heading text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </main>
  )
}