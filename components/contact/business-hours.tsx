import { Clock } from "lucide-react"

const hours = [
  { day: "Monday - Saturday", time: "11:00 AM - 9:00 PM" },
  { day: "Sunday", time: "By Appointment Only" },
]

export function BusinessHours() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Business Hours
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold">
            Visit Our Store
          </h2>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-8 shadow-sm">

          {hours.map((item) => (
            <div
              key={item.day}
              className="flex items-center justify-between border-b border-border py-4 last:border-0"
            >
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-maroon" />
                <span>{item.day}</span>
              </div>

              <span className="font-semibold">
                {item.time}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}