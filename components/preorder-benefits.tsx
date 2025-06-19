"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Award, Clock, Users, DollarSign, Zap } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Premium Pricing",
    description: "R180-250/kg vs R130-150/kg regular sausages",
    highlight: "67% higher margins",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Award,
    title: "Market Differentiation",
    description: "First-to-market artisan goat cheese sausages",
    highlight: "Zero competition",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Same-Day Fresh",
    description: "Cheese made morning, sausages ready afternoon",
    highlight: "8-hour process",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Watch cheese being made, collect fresh sausages",
    highlight: "Farm experience",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

const productOptions = [
  {
    name: "Classic Goat Cheese Pork Boerewors",
    description: "Traditional pork boerewors with fresh chèvre-style goat cheese",
    price: "R200/kg",
    time: "4 hours",
    popular: true,
  },
  {
    name: "Herb-Infused Cheese Pork Sausages",
    description: "Heritage pork with thyme, rosemary & garlic goat cheese",
    price: "R220/kg",
    time: "4 hours",
    popular: false,
  },
  {
    name: "Mild Ricotta-Style Pork Sausages",
    description: "Premium pork with creamy, mild goat cheese",
    price: "R180/kg",
    time: "2 hours",
    popular: false,
  },
  {
    name: "Premium Aged-Style Pork Sausages",
    description: "Heritage pork with firmer pressed goat cheese",
    price: "R250/kg",
    time: "24 hours",
    popular: false,
  },
]

export default function PreorderBenefits() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-orange-50/50 to-red-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">🚀 Business Opportunity</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Why Goat Cheese Sausages Are Game-Changing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform your pork operation into a premium artisan business with same-day fresh goat cheese sausages
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className={`border-primary/20 ${benefit.bgColor} hover:shadow-lg transition-shadow`}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-lg text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                  <Badge
                    className={`${benefit.color.replace("text-", "bg-").replace("-600", "-100")} ${benefit.color}`}
                  >
                    {benefit.highlight}
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Product Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Preorder Product Options</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {productOptions.map((product, index) => (
              <Card key={index} className={`border-primary/20 ${product.popular ? "ring-2 ring-primary/50" : ""}`}>
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white">🔥 Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Ready in</div>
                      <div className="font-semibold text-secondary">{product.time}</div>
                    </div>
                  </div>
                  <Button className="w-full" variant={product.popular ? "default" : "outline"}>
                    Preorder This Option
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Case */}
        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-primary mb-6">🎯 The Business Case</h3>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="bg-white rounded-lg p-4">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">67%</div>
              <div className="text-sm text-muted-foreground">Higher profit margins</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">8hrs</div>
              <div className="text-sm text-muted-foreground">Milk to sausage</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">FIRST</div>
              <div className="text-sm text-muted-foreground">In the market</div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-left space-y-4 text-muted-foreground mb-6">
            <p>
              **Integration with existing pork operation:** Use your current heritage pork and Camo Meat processing
              relationship. Make cheese Monday morning, combine with your premium pork at Camo Monday afternoon for
              Tuesday sausage production.
            </p>
            <p>
              **Minimal investment:** Basic cheese-making equipment costs under R2,000. Goat milk readily available
              locally. No new facilities needed.
            </p>
            <p>
              **Scalable model:** Start with 2-5kg batches, scale to weekly production. Different cheese flavors create
              seasonal specialties and repeat customers.
            </p>
          </div>

          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Preorder March Batch - Call Now
          </Button>
        </div>
      </div>
    </section>
  )
}
