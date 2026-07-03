import type { Metadata } from "next"
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react"
import { getContent } from "@/lib/data"
import { waLink } from "@/lib/whatsapp"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Contact | Riwayat",
  description:
    "Contact Riwayat for bespoke tailoring, appointments and luxury menswear enquiries.",
}

export default async function ContactPage() {
  const content = await getContent()
  const c = content.contact

  return (
    <main className="bg-background pt-24">
      {/* Hero */}
      <section className="bg-maroon-dark py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <p className="label-royal text-gold">
            Get In Touch
          </p>

          <h1 className="mt-4 font-heading text-5xl font-bold text-cream">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-cream/80">
            We'd love to help you create your perfect look. Reach out for appointments,
            bespoke tailoring or any enquiries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 md:px-8">

          {/* Contact Info */}
          <div>
            <SectionHeading
              label="Riwayat"
              title="Let's Talk"
              subtitle="Visit our showroom or contact us through your preferred channel."
            />

            <div className="space-y-6">

              <div className="flex items-start gap-4 rounded-lg border bg-card p-5">
                <MapPin className="mt-1 h-6 w-6 text-gold" />
                <div>
                  <h3 className="font-heading text-lg">Address</h3>
                  <p>{c.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border bg-card p-5">
                <Phone className="mt-1 h-6 w-6 text-gold" />
                <div>
                  <h3 className="font-heading text-lg">Phone</h3>
                  <p>{c.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border bg-card p-5">
                <Mail className="mt-1 h-6 w-6 text-gold" />
                <div>
                  <h3 className="font-heading text-lg">Email</h3>
                  <p>{c.email}</p>
                </div>
              </div>

            </div>

            <a
              href={waLink(
                c.whatsapp,
                "Hello Riwayat, I'd like to book an appointment."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-sm bg-gold px-6 py-3 font-semibold text-maroon-dark hover:bg-gold-light"
            >
              <MessageCircle className="h-5 w-5" />
              Book Appointment on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <SectionHeading
              label="Enquiry"
              title="Send a Message"
            />

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-md border px-4 py-3"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-md border px-4 py-3"
              />

              <button
                type="submit"
                className="w-full rounded-md bg-maroon-dark px-6 py-3 text-cream transition hover:bg-maroon"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </main>
  )
}