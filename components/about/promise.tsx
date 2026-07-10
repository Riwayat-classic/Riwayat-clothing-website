import { getContent } from "@/lib/data"

export async function PromiseSection() {
  const content = await getContent()

  return (
    <section className="bg-maroon-dark py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Our Promise
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold text-cream sm:text-4xl">
            What We Promise Every Customer
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-cream/80">
            Every Riwayat garment reflects our commitment to
            quality, precision and timeless elegance.
          </p>
        </div>

       <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">

          {content.about.promise.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gold/20 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/40"
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