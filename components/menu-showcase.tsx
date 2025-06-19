"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChefHat } from "lucide-react"

const productCategories = [
  {
    name: "Premium Pork Products",
    description: "Fresh cuts and processed meats from our heritage pigs",
    items: [
      {
        name: "Artisanal Bacon",
        description: "Thick-cut, hickory-smoked bacon from our pasture-raised pigs",
        price: "$18/lb",
        rating: 4.9,
        badges: ["Signature", "Smoked Daily"],
        emoji: "🥓",
      },
      {
        name: "Heritage Pork Chops",
        description: "Bone-in chops from our heritage breed pigs",
        price: "$22/lb",
        rating: 4.8,
        badges: ["Heritage Breed", "Grass-Fed"],
        emoji: "🥩",
      },
      {
        name: "Farm Sausages",
        description: "House-made sausages with herbs from our garden",
        price: "$16/lb",
        rating: 4.7,
        badges: ["House Made", "No Preservatives"],
        emoji: "🌭",
      },
    ],
  },
  {
    name: "Artisanal Cheeses",
    description: "Hand-crafted cheeses made from our grass-fed cow's milk",
    items: [
      {
        name: "The Cheesy Pig Special",
        description: "Our signature aged cheddar with herbs from our garden",
        price: "$24/lb",
        rating: 4.9,
        badges: ["Signature", "Award Winner"],
        emoji: "🧀",
      },
      {
        name: "Smoky Gouda",
        description: "House-smoked gouda with natural wood smoke",
        price: "$28/lb",
        rating: 4.8,
        badges: ["Smoked", "Limited Edition"],
        emoji: "🔥",
      },
      {
        name: "Fresh Mozzarella",
        description: "Made daily from our grass-fed cow's milk",
        price: "$20/lb",
        rating: 4.6,
        badges: ["Made Daily", "Organic"],
        emoji: "🐄",
      },
    ],
  },
]

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = React.useState(0)

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-orange-50/50 to-red-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Premium Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">Fresh from our farm to your family's table</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg">
            {productCategories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === index ? "default" : "ghost"}
                className={`rounded-full ${
                  activeCategory === index ? "bg-primary text-white" : "text-primary hover:bg-primary/10"
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">{productCategories[activeCategory].name}</h3>
            <p className="text-muted-foreground">{productCategories[activeCategory].description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories[activeCategory].items.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-primary/20 wood-grain"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <CardTitle className="text-xl text-primary group-hover:text-secondary transition-colors">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-white"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full group bg-primary hover:bg-secondary">
                    Add to Cart
                    <ChefHat className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
