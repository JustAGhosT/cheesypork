import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Cheesy Pig - Sustainable Farm | Bela Bela, Limpopo, South Africa",
  description:
    "Premium farm-fresh pork products and artisanal cheeses from Bela Bela, Limpopo. Sustainable farming using market waste, zero commercial feed. Proudly South African.",
  keywords:
    "sustainable farming, pork products, Bela Bela, Limpopo, South Africa, market waste, zero waste farming, artisanal cheese",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <Navigation />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
