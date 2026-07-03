// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: FeatureBar
// WHAT IT DOES: Horizontal bar of brand selling points sitting just below the hero
// TO CUSTOMIZE: Edit the items in data/content.json (features array). Change the divider color via border-gold.
// SEARCH TERM: "Tailwind flex wrap", "array map render React"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function FeatureBar({ features }: { features: string[] }) {
  return (
    <div className="bg-maroon-dark">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 md:px-8">
        {features.map((feature, i) => (
          <div key={feature} className="flex items-center gap-8">
            <span className="label-royal text-xs text-cream/90">{feature}</span>
            {i < features.length - 1 && (
              <span className="hidden h-1 w-1 rounded-full bg-gold md:inline-block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
