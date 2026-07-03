// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMPONENT NAME: ServiceIcon
// WHAT IT DOES: Maps an icon name string (from content.json services) to a Lucide icon component
// TO CUSTOMIZE: Add new entries to the ICONS map below to support more icon names in data/content.json
// SEARCH TERM: "lucide-react icons", "icon map lookup React", "dynamic component"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { Scissors, Shirt, Gem, Ruler, Sparkles, Package, type LucideIcon } from "lucide-react"

const ICONS: Record<string, LucideIcon> = {
  scissors: Scissors,
  shirt: Shirt,
  gem: Gem,
  ruler: Ruler,
  sparkles: Sparkles,
  package: Package,
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Sparkles
  return <Icon className={className} />
}
