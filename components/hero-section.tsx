import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, Star, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12 sm:py-20">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/farm-family.jpg"
                alt="Our family farm in Bela Bela, Limpopo"
                fill
                className="object-cover"
                priority
              />
              {/* Floating badges on image */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-500 text-white shadow-lg">🌱 Zero-Waste Fed</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-500 text-white shadow-lg">👨‍🌾 Family-Owned</Badge>
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-orange-500 text-white shadow-lg">🚚 Same-Day Fresh</Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-purple-500 text-white shadow-lg">💸 No Middlemen</Badge>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">
              <span className="mr-2">🏆</span>
              Premium Farm-to-Table Since 2024
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Farm-Fresh Pork,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Raised Right
              </span>{" "}
              in Bela Bela
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Premium pork, cheese grillers, bacon and more—direct from our family farm in Limpopo. Raised on fresh
              market produce for exceptional flavor, community impact, and zero waste.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Order Now: 069 238 1255
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-primary text-primary hover:bg-primary hover:text-white text-lg px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Order
              </Button>
            </div>

            {/* Farm Info */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Bela Bela, Limpopo Province</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span>Farm Store: Mon-Sat 8AM - 6PM</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-500 fill-current" />
                <span>4.9/5 Rating from Local Customers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">Our Bestsellers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Cheese Grillers", price: "R130/kg", img: "/images/cheese-griller.jpg", popular: true },
              { name: "Premium Bacon", price: "R150/kg", img: "/images/bacon.jpg", popular: false },
              { name: "Bacon Rashers", price: "R140/kg", img: "/images/bacon.jpg", popular: false },
              { name: "Pork Steaks", price: "R120/kg", img: "/images/pork-steak.jpg", popular: false },
            ].map((product, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow group"
              >
                {product.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-red-500 text-white">🔥 Popular</Badge>
                  </div>
                )}
                <div className="aspect-square relative rounded-lg overflow-hidden mb-3">
                  <Image
                    src={product.img || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-primary mb-1">{product.name}</h3>
                <p className="text-lg font-bold text-secondary mb-2">{product.price}</p>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Add to Order
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">Why Cheesy Pig?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "♻️",
                title: "Zero-Waste Fed",
                description: "Raised on surplus market produce for flavor and eco impact",
              },
              {
                icon: "👨‍🌾",
                title: "Family-Run",
                description: "Know exactly who raised your food—meet your farmers!",
              },
              {
                icon: "🚚",
                title: "Same-Day Fresh",
                description: "Processed and delivered rapidly for unmatched taste",
              },
              {
                icon: "💸",
                title: "No Middlemen",
                description: "Direct from farm to table—better prices, more impact",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(139,69,19,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,69,19,0.1)_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  )
}
