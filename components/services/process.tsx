import { getContent } from "@/lib/data"

export async function ProcessSection() {
  const content = await getContent()

  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Our Process
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold">
            From Consultation To Perfection
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            Every Riwayat garment follows a carefully crafted journey
            to ensure exceptional quality and a perfect fit.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-5">

          {content.process.map((step, index) => (
            <div
              key={step.step}
              className="text-center"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-maroon text-2xl font-bold text-white">

                {index + 1}

              </div>

              <h3 className="mt-6 font-heading text-2xl font-semibold">

                {step.step}

              </h3>

              <p className="mt-3 text-muted-foreground leading-7">

                {step.description}

              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}