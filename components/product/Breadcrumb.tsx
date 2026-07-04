import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ProductBreadcrumbProps {
  productName: string
}

export function ProductBreadcrumb({
  productName,
}: ProductBreadcrumbProps) {
  return (
    <nav
      className="mb-10 flex items-center gap-2 text-sm text-muted-foreground"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="transition-colors hover:text-maroon"
      >
        Home
      </Link>

      <ChevronRight className="h-4 w-4" />

      <Link
        href="/collection"
        className="transition-colors hover:text-maroon"
      >
        Collection
      </Link>

      <ChevronRight className="h-4 w-4" />

      <span className="font-medium text-maroon">
        {productName}
      </span>
    </nav>
  )
}