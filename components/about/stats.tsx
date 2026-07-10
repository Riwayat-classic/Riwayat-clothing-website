import { getContent } from "@/lib/data"

export async function Stats() {
  const content = await getContent()

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {content.about.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="font-heading text-4xl font-bold text-maroon sm:text-5xl">
                {stat.value}
              </h3>

              <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}