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
<div className="flex justify-center py-6">
  <a
    href="https://www.google.com/maps/place/Riwayat+Designers/@24.8710677,67.0576106,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33f7e075bd5f5:0xecc6c7b89f4bdefa!8m2!3d24.8710629!4d67.0601802!16s%2Fg%2F11hm6vhxrl"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-md bg-gold px-6 py-3 font-semibold text-maroon-dark transition-colors hover:bg-gold-light"
  >
    Open in Google Maps
  </a>
</div>

        </div>

      </div>
    </section>
  )
}