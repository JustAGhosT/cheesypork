"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Package, TrendingDown } from "lucide-react"
import InteractiveOrderSummary from "@/components/interactive-order-summary"

const currentStock = [
  {
    name: "Cheese Grillers",
    description: "Premium pork sausages perfect for braai and family meals",
    stock: 74.0,
    unit: "kg",
    price: "R130-150",
    pricePerKg: 140,
    features: ["No preservatives", "Market-waste fed", "Fresh or frozen"],
    emoji: "🌭",
    popular: true,
    status: "In Stock",
  },
  {
    name: "Premium Bacon",
    description: "Thick-cut, naturally cured bacon with incredible flavor",
    stock: 7.3,
    unit: "kg",
    price: "R150-180",
    pricePerKg: 165,
    features: ["Thick cut", "Natural curing", "Heritage breed"],
    emoji: "🥓",
    popular: false,
    status: "Limited Stock",
  },
  {
    name: "Bacon Rashers",
    description: "Thin-sliced bacon perfect for breakfast and cooking",
    stock: 6.3,
    unit: "kg",
    price: "R120-140",
    pricePerKg: 130,
    features: ["Thin sliced", "Quick cooking", "Versatile use"],
    emoji: "🍳",
    popular: false,
    status: "Limited Stock",
  },
  {
    name: "Pork Steaks & Cuts",
    description: "Premium cuts including chops, steaks, and roasting joints",
    stock: 17.9,
    unit: "kg",
    price: "R100-130",
    pricePerKg: 115,
    features: ["Various cuts", "Tender meat", "Perfect for roasting"],
    emoji: "🥩",
    popular: false,
    status: "In Stock",
  },
  {
    name: "Soup Bones",
    description: "Perfect for soups, stocks, and dog treats",
    stock: 12.4,
    unit: "kg",
    price: "R10-20",
    pricePerKg: 15,
    features: ["Rich marrow", "Soup bones", "Pet treats"],
    emoji: "🦴",
    popular: false,
    status: "In Stock",
  },
]

const upcomingProducts = [
  {
    name: "Goat Cheese Pork Sausages",
    description: "Premium pork sausages with same-day fresh goat cheese",
    availableDate: "August 2024",
    price: "R180-250",
    pricePerKg: 200,
    emoji: "🧀🌭",
    status: "Preorder",
  },
]

export default function CurrentStockInventory() {
  const totalStockValue = currentStock.reduce((total, item) => total + item.stock * item.pricePerKg, 0)
  const totalWeight = currentStock.reduce((total, item) => total + item.stock, 0)

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-blue-50/50 to-green-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">📦 Current Inventory</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Available Now - June 2024</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fresh from our latest batch - {totalWeight.toFixed(1)}kg of premium pork products ready for immediate pickup
            or delivery
          </p>
          <div className="mt-6 inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <span className="text-green-800 text-sm font-medium">
              ✅ Total inventory value: R{totalStockValue.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Current Stock Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {currentStock.map((product, index) => (
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
                <div className="flex justify-between items-start mb-3">
                  <div className="text-4xl">{product.emoji}</div>
                  <Badge
                    variant={
                      product.status === "In Stock"
                        ? "default"
                        : product.status === "Limited Stock"
                          ? "secondary"
                          : "destructive"
                    }
                    className="text-xs"
                  >
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">
                  {product.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm font-medium text-secondary">
                    {product.stock} {product.unit} available
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {product.stock < 10 && (
                      <span className="text-orange-600 flex items-center">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        Low stock
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary">{product.price}/kg</span>
                  <div className="text-xs text-muted-foreground">
                    Total value: R{(product.stock * product.pricePerKg).toLocaleString()}
                  </div>
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
                    Order Now
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

        {/* Upcoming Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Coming Soon - Preorder Now</h3>
          <div className="grid gap-6 md:grid-cols-1 max-w-2xl mx-auto">
            {upcomingProducts.map((product, index) => (
              <Card key={index} className="border-red-200 bg-red-50/50">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-3">{product.emoji}</div>
                  <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <Badge className="bg-red-500 text-white animate-pulse">Available {product.availableDate}</Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-2xl font-bold text-primary">{product.price}/kg</div>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Package className="mr-2 h-4 w-4" />
                    Preorder August Batch
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Order Summary */}
        <div className="mt-16">
          <InteractiveOrderSummary />
        </div>
      </div>
    </section>
  )
}
