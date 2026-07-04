import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-6xl rounded-xl bg-maroon-dark px-6 py-16 text-center shadow-xl md:px-12">

        <p className="label-royal text-gold">
          Ready To Meet Us?
        </p>

        <h2 className="mt-4 font-heading text-4xl font-bold text-cream">
          Book Your Personal Consultation
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/80">
          Schedule your visit and let our expert team help you
          create the perfect look for your special occasion.
        </p>

        <div className="mt-10">

          <Link
            href="/collection"
            className="rounded-sm bg-gold px-8 py-3 font-semibold text-maroon-dark transition hover:bg-gold-light"
          >
            Explore Collection
          </Link>

        </div>

      </div>
    </section>
  )
}