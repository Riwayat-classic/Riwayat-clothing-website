import {
  getContent,
  getProducts,
  getTestimonials,
} from "@/lib/data"

import { HomeHero } from "@/components/home/home-hero"
import { FeatureBar } from "@/components/home/feature-bar"
import { FeaturedProducts } from "@/components/home/featured-products"
import { ServicesOverview } from "@/components/home/services-overview"
import { PromoBanners } from "@/components/home/promo-banners"
import { VideoSection } from "@/components/home/video-section"
import { Testimonials } from "@/components/home/testimonials"
import { CtaStrip } from "@/components/home/cta-strip"
import HomePageClient from "@/components/home/home-page-client"

export default async function Page() {
  const content = await getContent()
  const products = await getProducts()
  const testimonials = await getTestimonials()

  return (
    <HomePageClient>
      <main className="pt-28"></main>
      <HomeHero content={content} />

      <FeatureBar features={content.features} />

      <FeaturedProducts products={products} />

      <ServicesOverview services={content.services} />

      <PromoBanners promos={content.promos} />

      <VideoSection />

      <Testimonials testimonials={testimonials} />

      <CtaStrip whatsapp="923222951804" />
      
      </HomePageClient>
    
  )
}