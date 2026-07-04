import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"
import { getContent } from "@/lib/data"

export async function ContactInfo() {
  const content = await getContent()

  const contact = content.contact

  const cards = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      value: contact.address,
    },
    {
      icon: Phone,
      title: "Call Us",
      value: contact.phone,
    },
    {
      icon: Mail,
      title: "Email",
      value: contact.email,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: contact.whatsapp,
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Contact Information
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold">
            Reach Out Anytime
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            We are always happy to answer your questions,
            discuss your requirements and help you choose
            the perfect outfit.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {cards.map((card) => {
            const Icon = card.icon

            return (
              <div
                key={card.title}
                className="rounded-lg border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
                  <Icon className="h-8 w-8 text-maroon" />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-4 break-words leading-7 text-muted-foreground">
                  {card.value}
                </p>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}