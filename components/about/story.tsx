import { getContent } from "@/lib/data"

export async function Story() {
  const content = await getContent()

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8">

        <div>
          <p className="label-royal text-gold">
            Our Story
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold">
            A Tradition of Craftsmanship
          </h2>
        </div>

        <div className="space-y-6">
          <p className="leading-8 text-muted-foreground">
            {content.about.story}
          </p>

          <p className="leading-8 text-muted-foreground">
            {content.about.mission}
          </p>
        </div>

      </div>
    </section>
  )
}