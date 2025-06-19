"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Recycle, TrendingDown, Leaf, DollarSign } from "lucide-react"
import { useEffect, useState } from "react"

const WasteVisualization = () => {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const wasteItems = [
    { emoji: "🍞", name: "Bread", color: "from-yellow-200 to-orange-200" },
    { emoji: "🥕", name: "Vegetables", color: "from-orange-200 to-red-200" },
    { emoji: "🍎", name: "Fruits", color: "from-red-200 to-pink-200" },
    { emoji: "🥬", name: "Leafy Greens", color: "from-green-200 to-emerald-200" },
  ]

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
      {/* Market waste pile */}
      <div className="absolute left-8 top-8 bottom-8 w-32">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-gray-200 rounded-lg opacity-50"></div>

          {/* Animated waste items */}
          {wasteItems.map((item, index) => (
            <div
              key={index}
              className={`absolute text-3xl transition-all duration-1000 ${
                animationStep >= index ? "opacity-100 transform translate-x-0" : "opacity-70"
              }`}
              style={{
                left: `${20 + (index % 2) * 40}%`,
                top: `${20 + index * 15}%`,
                transform: animationStep >= index ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
              }}
            >
              {item.emoji}
            </div>
          ))}

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-600">
            Market Waste
          </div>
        </div>
      </div>

      {/* Transformation process */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-spin-slow">
            <Recycle className="h-6 w-6 text-white" />
          </div>
          <div className="mt-2 text-xs font-semibold text-primary">Processing</div>
        </div>
      </div>

      {/* Premium pork result */}
      <div className="absolute right-8 top-8 bottom-8 w-32">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-secondary/20 rounded-lg border-2 border-primary/30"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">🐷</div>
            <div className="flex space-x-1 mb-2">
              <span className="text-lg">🥓</span>
              <span className="text-lg">🌭</span>
              <span className="text-lg">🥩</span>
            </div>
            <div className="text-xs font-semibold text-primary text-center">Premium Pork</div>
          </div>
        </div>
      </div>

      {/* Flowing particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-ping"
            style={{
              left: `${30 + i * 8}%`,
              top: `${40 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

const impactStats = [
  {
    icon: TrendingDown,
    title: "Zero Feed Costs",
    value: "R0",
    description: "Monthly feed expenses eliminated through market waste utilization",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Recycle,
    title: "Waste Diverted",
    value: "500kg+",
    description: "Fresh produce rescued from landfills monthly",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Leaf,
    title: "Carbon Footprint",
    value: "-80%",
    description: "Reduction compared to commercial feed operations",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: DollarSign,
    title: "Profit Margin",
    value: "150%",
    description: "ROI achieved through sustainable practices",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export default function WasteImpactSection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-green-50/50 to-blue-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">♻️ Environmental Impact</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Transforming Waste Into Value</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how we turn daily market waste into premium protein while creating positive environmental and economic
            impact
          </p>
        </div>

        <div className="mb-16">
          <WasteVisualization />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className={`border-primary/20 ${stat.bgColor} hover:shadow-lg transition-shadow`}>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <CardTitle className="text-lg text-primary">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-primary/20">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">The Circular Economy in Action</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every morning, local markets generate tons of fresh produce waste - perfectly good food that's simply
                  past its prime for human consumption but ideal for livestock nutrition.
                </p>
                <p>
                  Our pigs thrive on this diverse diet of fruits, vegetables, and bread, creating meat with superior
                  flavor and nutritional profile while eliminating waste disposal costs for local vendors.
                </p>
                <p>
                  This isn't just farming - it's a complete circular economy system that benefits everyone: markets
                  reduce waste costs, we eliminate feed expenses, and customers get premium, sustainably-raised pork.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-3xl mb-2">🏪</div>
                <div className="text-sm font-semibold text-primary">Local Markets</div>
                <div className="text-xs text-muted-foreground">Waste reduction</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <div className="text-3xl mb-2">🐷</div>
                <div className="text-sm font-semibold text-secondary">Our Farm</div>
                <div className="text-xs text-muted-foreground">Zero feed costs</div>
              </div>
              <div className="text-center p-4 bg-green-100 rounded-lg">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-sm font-semibold text-green-700">Environment</div>
                <div className="text-xs text-muted-foreground">Reduced landfill</div>
              </div>
              <div className="text-center p-4 bg-blue-100 rounded-lg">
                <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <div className="text-sm font-semibold text-blue-700">Customers</div>
                <div className="text-xs text-muted-foreground">Premium quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
