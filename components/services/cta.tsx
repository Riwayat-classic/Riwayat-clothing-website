import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl rounded-xl bg-maroon-dark px-6 py-14 text-center shadow-xl md:px-12 md:py-16">

        <p className="label-royal text-gold">
          Ready To Experience Riwayat?
        </p>

       <h2 className="mt-4 font-heading text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
          Let's Tailor Something Extraordinary
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/80">
          Whether you're looking for a bespoke sherwani,
          a tailored suit or complete groom styling,
          we're here to create an outfit you'll remember forever.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/contact"
            className="rounded-md bg-gold px-8 py-3 font-semibold text-maroon-dark transition-all duration-300 hover:-translate-y-1 hover:bg-gold-light"
          >
            Book Appointment
          </Link>

          <Link
            href="/collection"
            className="rounded-md border border-gold px-8 py-3 font-semibold text-gold transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-maroon-dark"
          >
            View Collection
          </Link>

        </div>

      </div>
    </section>
  )
}