import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#ffffff" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center text-white">
          <div className="text-6xl mb-6">🐷🧀</div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            Ready for Farm-Fresh Quality?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families who've discovered the difference that sustainable farming and traditional methods
            make in every bite.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-12 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="h-8 w-8 mb-3" />
              <h3 className="font-bold mb-2">Visit Our Farm Store</h3>
              <p className="text-sm opacity-90">123 Farm Road, Countryside, TN</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Clock className="h-8 w-8 mb-3" />
              <h3 className="font-bold mb-2">Store Hours</h3>
              <p className="text-sm opacity-90">Mon-Sat: 8:00 AM - 6:00 PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="h-8 w-8 mb-3" />
              <h3 className="font-bold mb-2">Order by Phone</h3>
              <p className="text-sm opacity-90">(555) 123-PORK</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group bg-white text-primary hover:bg-white/90">
              Shop Our Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Visit Farm Store
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            🌟 Rated #1 Farm Store in Tennessee • 🏆 2024 Sustainable Farming Award Winner
          </div>
        </div>
      </div>
    </section>
  )
}
