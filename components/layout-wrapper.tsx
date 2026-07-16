"use client"

import { usePathname } from "next/navigation"
import { Navbar } from "@/components/navbar"
//import { Footer } from "@/components/footer"
//import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ScrollToTop } from "@/components/scroll-to-top"

export function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isDisplayPage = pathname === "/display"
 // alert(pathname)

  

  return (
    <>
      {!isDisplayPage && <Navbar />}

      <main className="min-h-screen">{children}</main>

      {//*{!isDisplayPage && <Footer />} 
      {//* {!isDisplayPage && <FloatingWhatsApp />} 

      <ScrollToTop />
    </>
  )
}