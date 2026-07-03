import type { Metadata } from "next"
import Image from "next/image"
import { getContent } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Gallery | Riwayat",
  description:
    "Browse Riwayat's gallery of premium sherwanis, suits, waistcoats and groom styling.",
}

export default async function GalleryPage() {
  const content = await getContent()

  return (
    <main className="bg-background pt-24">
      {/* Hero */}
      <section className="bg-maroon-dark py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <p className="label-royal text-gold">
            Our Portfolio
          </p>

          <h1 className="mt-4 font-heading text-5xl font-bold text-cream">
            Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-cream/80">
            Explore our finest craftsmanship, timeless elegance and signature
            designs created for modern gentlemen.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">

          <SectionHeading
            label="Luxury Collection"
            title="Our Signature Designs"
            subtitle="Every garment reflects heritage, precision and elegance."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {content.gallery.map((item) => (
              <div
                key={item.image}
                className="group overflow-hidden rounded-lg border bg-card shadow-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.caption}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <p className="text-center text-sm font-medium">
                    {item.caption}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </main>
  )
}