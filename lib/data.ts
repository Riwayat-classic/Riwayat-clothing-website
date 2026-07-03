// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FILE: lib/data.ts
// WHAT IT DOES: Server-side helpers to read and write the JSON data files in /data
// TO CUSTOMIZE: Change file names/paths below if you rename the JSON files
// SEARCH TERM: "Node.js fs/promises", "read write JSON file Next.js", "process.cwd"
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { promises as fs } from "fs"
import path from "path"
import type { Product, SiteContent, Testimonial, Order } from "./types"

const dataDir = path.join(process.cwd(), "data")

async function readJson<T>(file: string): Promise<T> {
  const raw = await fs.readFile(path.join(dataDir, file), "utf-8")
  return JSON.parse(raw) as T
}

async function writeJson(file: string, data: unknown): Promise<void> {
  await fs.writeFile(path.join(dataDir, file), JSON.stringify(data, null, 2), "utf-8")
}

export const getProducts = () => readJson<Product[]>("products.json")
export const saveProducts = (data: Product[]) => writeJson("products.json", data)

export const getContent = () => readJson<SiteContent>("content.json")
export const saveContent = (data: SiteContent) => writeJson("content.json", data)

export const getTestimonials = () => readJson<Testimonial[]>("testimonials.json")

export const getOrders = () => readJson<Order[]>("orders.json")
export const saveOrders = (data: Order[]) => writeJson("orders.json", data)
