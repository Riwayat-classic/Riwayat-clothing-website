import { getContent } from "@/lib/data"

export async function PromiseSection() {
  const content = await getContent()

  return (
    <section className="bg-maroon-dark py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Our Promise
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold text-cream">
            What We Promise Every Customer
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-cream/80">
            Every Riwayat garment reflects our commitment to
            quality, precision and timeless elegance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {content.about.promise.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-gold/20 bg-white/5 p-8 backdrop-blur-sm"
            >
              <h3 className="font-heading text-2xl font-semibold text-gold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-cream/80">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}