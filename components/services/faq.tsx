import { getContent } from "@/lib/data"

export async function ServicesFAQ() {
  const content = await getContent()

  return (
    <section className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">

        <div className="text-center">
          <p className="label-royal text-gold">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
            Common Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Answers to the questions our clients ask most often.
          </p>
        </div>

        <div className="mt-14 space-y-6">

          {content.faq.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="font-heading text-xl font-semibold">
                {item.question}
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}