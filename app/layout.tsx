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
  title: "The Cheesy Pig - Farm to Table Restaurant | Artisanal Cheeses & Local Cuisine",
  description:
    "Experience authentic farm-to-table dining at The Cheesy Pig. Featuring artisanal cheeses, locally-sourced ingredients, and traditional recipes in Tennessee countryside.",
  keywords: "farm to table, artisanal cheese, local restaurant, Tennessee dining, organic food, sustainable dining",
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
