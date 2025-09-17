import "@/styles/globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"
import { CartProvider } from "@/lib/cart-context"
import Navigation from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "The Cheesy Pig | Premium Pork Products & Artisanal Cheeses",
    template: "%s | The Cheesy Pig",
  },
  description: "Farm-to-table premium pork products and artisanal cheeses from our sustainable farm.",
  keywords: ["pork", "cheese", "sustainable farming", "artisanal", "south africa"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <CartProvider>
              <div className="relative min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1">{children}</main>
                <footer className="border-t bg-muted/50">
                  {/* Footer content */}
                </footer>
                <Toaster />
              </div>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}