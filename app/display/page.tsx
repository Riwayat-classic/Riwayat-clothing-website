import { getProducts, getContent } from "@/lib/data"
import { DisplayScreen } from "@/components/display/display-screen"

export default async function DisplayPage() {
  const products = await getProducts()
  const content = await getContent()

  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 6)

  return (
    <DisplayScreen
      products={featuredProducts}
      content={content}
    />
  )
}