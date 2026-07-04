import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl rounded-lg bg-maroon-dark px-6 py-16 text-center md:px-12">

        <p className="label-royal text-gold">
          Ready To Wear Riwayat?
        </p>

        <h2 className="mt-4 font-heading text-4xl font-bold text-cream">
          Let's Create Your Perfect Look
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/80">
          Whether you're preparing for your wedding, engagement
          or a special celebration, our craftsmen are ready to
          tailor a garment that reflects your personality.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/collection"
            className="rounded-sm bg-gold px-8 py-3 font-semibold text-maroon-dark transition hover:bg-gold-light"
          >
            Explore Collection
          </Link>

          <Link
            href="/contact"
            className="rounded-sm border border-gold px-8 py-3 font-semibold text-gold transition hover:bg-gold hover:text-maroon-dark"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  )
}