import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Star, Phone } from "lucide-react"

export default function MeatSalesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 sm:py-32 rustic-texture">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">
              <span className="mr-2">🌱</span>
              Sustainable Farm-to-Table Since 2024
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Premium{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Farm-Fresh Pork
              </span>{" "}
              Direct from Bela Bela
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Sustainably raised pigs fed on fresh market produce. No commercial feed, no waste - just premium quality
              meat from our family farm to your family table. Available fresh or frozen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp to Order
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Our Products
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Bela Bela Area, Limpopo</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span>Fresh batches every 4-6 months</span>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 mr-2 text-yellow-500 fill-current" />
                <span>R130-150/kg Premium Quality</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <div className="w-full h-full bg-white rounded-xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🐷</div>
                  <div className="text-4xl mb-4">🥓🥩</div>
                  <p className="text-lg font-semibold text-primary">Market-Waste Fed</p>
                  <p className="text-sm text-muted-foreground">Zero Commercial Feed</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <span className="text-2xl">🌽</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
              <span className="text-2xl">🥕</span>
            </div>
            <div className="absolute top-1/2 -left-6 bg-white rounded-full p-3 shadow-lg">
              <span className="text-2xl">🍎</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(139,69,19,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,69,19,0.1)_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  )
}
