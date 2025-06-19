"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle } from "lucide-react"

const products = [
  {
    name: "Cheese Grillers",
    description: "Premium pork sausages perfect for braai and family meals",
    weight: "74kg available",
    price: "R130-150/kg",
    features: ["No preservatives", "Market-waste fed", "Fresh or frozen"],
    emoji: "🌭",
    popular: true,
  },
  {
    name: "Premium Bacon",
    description: "Thick-cut, naturally cured bacon with incredible flavor",
    weight: "7.3kg available",
    price: "R150-180/kg",
    features: ["Thick cut", "Natural curing", "Heritage breed"],
    emoji: "🥓",
    popular: false,
  },
  {
    name: "Bacon Rashers",
    description: "Thin-sliced bacon perfect for breakfast and cooking",
    weight: "6.3kg available",
    price: "R120-140/kg",
    features: ["Thin sliced", "Quick cooking", "Versatile use"],
    emoji: "🍳",
    popular: false,
  },
  {
    name: "Pork Steaks & Cuts",
    description: "Premium cuts including chops, steaks, and roasting joints",
    weight: "17.9kg available",
    price: "R100-130/kg",
    features: ["Various cuts", "Tender meat", "Perfect for roasting"],
    emoji: "🥩",
    popular: false,
  },
  {
    name: "Bones (Bonus)",
    description: "Perfect for soups, stocks, and dog treats",
    weight: "12.4kg available",
    price: "R10-20/kg",
    features: ["Rich marrow", "Soup bones", "Pet treats"],
    emoji: "🦴",
    popular: false,
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-orange-50/50 to-red-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Premium Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fresh from our latest batch - 117.9kg of premium pork products ready for your family
          </p>
          <div className="mt-6 inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <span className="text-green-800 text-sm font-medium">✅ Current batch available - Order now!</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 border-primary/20 wood-grain ${
                product.popular ? "ring-2 ring-primary/50" : ""
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white">🔥 Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="text-4xl mb-3">{product.emoji}</div>
                <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
                <div className="text-sm text-muted-foreground">{product.weight}</div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                </div>

                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="grid gap-2">
                  <Button className="w-full group bg-primary hover:bg-secondary">
                    <Phone className="mr-2 h-4 w-4" />
                    Call to Order
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full group border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">🚚 Delivery & Pickup Options</h3>
            <div className="grid gap-4 md:grid-cols-3 text-sm">
              <div>
                <strong>Farm Pickup:</strong>
                <p className="text-muted-foreground">Free pickup from our Bela Bela farm</p>
              </div>
              <div>
                <strong>Local Delivery:</strong>
                <p className="text-muted-foreground">R50 delivery within 20km radius</p>
              </div>
              <div>
                <strong>Bulk Orders:</strong>
                <p className="text-muted-foreground">Special pricing for 20kg+ orders</p>
              </div>
            </div>
            <div className="mt-6">
              <Button size="lg" className="bg-primary hover:bg-secondary">
                <Phone className="mr-2 h-4 w-4" />
                Call (555) 123-PORK to Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
