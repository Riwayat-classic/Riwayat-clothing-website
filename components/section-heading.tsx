// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: SectionHeading
// WHAT IT DOES: Centered section title with a small royal label above and a gold divider below
// TO CUSTOMIZE: Change the divider color (bg-gold) or text colors via the `light` prop (use on dark/maroon sections)
// SEARCH TERM: "React reusable component", "Tailwind text-center", "conditional className"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
}: {
  label?: string
  title: string
  subtitle?: string
  light?: boolean
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {label && (
        <p className={`label-royal mb-3 text-xs ${light ? "text-gold-light" : "text-gold-dark"}`}>
          {label}
        </p>
      )}
      <h2
        className={`font-heading text-3xl font-bold text-balance md:text-4xl ${
          light ? "text-cream" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-20 bg-gold" />
      {subtitle && (
        <p
          className={`mt-4 text-pretty leading-relaxed ${
            light ? "text-cream/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
