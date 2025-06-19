import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/30 wood-grain">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl">🐷</span>
              </div>
              <div>
                <span className="text-xl font-bold text-primary">The Cheesy Pig</span>
                <p className="text-xs text-muted-foreground">Farm to Table Excellence</p>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-md mb-4">
              Premium farm-fresh pork products and artisanal cheeses made using sustainable farming practices and
              traditional methods in the heart of Tennessee countryside.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary hover:text-secondary cursor-pointer" />
              <Instagram className="h-5 w-5 text-primary hover:text-secondary cursor-pointer" />
              <Twitter className="h-5 w-5 text-primary hover:text-secondary cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Our Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products/pork" className="hover:text-primary">
                  Pork Products
                </Link>
              </li>
              <li>
                <Link href="/products/cheese" className="hover:text-primary">
                  Artisanal Cheeses
                </Link>
              </li>
              <li>
                <Link href="/bulk-orders" className="hover:text-primary">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary">
                  Online Shop
                </Link>
              </li>
              <li>
                <Link href="/gift-packages" className="hover:text-primary">
                  Gift Packages
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">About Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/farm" className="hover:text-primary">
                  The Farm
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-primary">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Visit Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <div>
                  <p>123 Farm Road</p>
                  <p>Countryside, TN 37000</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>(555) 123-PORK</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>hello@cheesypig.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                <div>
                  <p>Mon-Thu: 11AM-9PM</p>
                  <p>Fri-Sat: 11AM-10PM</p>
                  <p>Sunday: 11AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 The Cheesy Pig. All rights reserved. Made with ❤️ in Tennessee.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-primary">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
