export function ContactMap() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Find Us
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold">
  Visit Riwayat Designers
</h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border shadow-sm">

         <iframe
  src="https://www.google.com/maps?q=Riwayat+Designers,+Tariq+Road,+Karachi&output=embed"
  className="h-[500px] w-full"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Riwayat Designers Location"
/>

        </div>

      </div>
    </section>
  )
}