import { DisplayScreen } from "@/components/display/display-screen"
import { getProducts, getContent } from "@/lib/data"

export default async function DisplayPage() {
  const products = await getProducts()
  const content = await getContent()

  return (
    <main className="h-screen overflow-hidden">
      <DisplayScreen
        products={products}
        content={content}
      />
    </main>
  )
}