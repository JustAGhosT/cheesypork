"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Leaf, Award, Heart, Truck, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Organic & Sustainable",
    description: "All our ingredients are sourced from our certified organic farm and local sustainable partners.",
    benefits: ["Pesticide-free produce", "Grass-fed livestock", "Renewable energy powered"],
    emoji: "🌱",
  },
  {
    icon: Award,
    title: "Award-Winning Cuisine",
    description: "Our chefs have won multiple culinary awards for innovative farm-to-table creations.",
    benefits: ["James Beard recognition", "Michelin recommended", "Local food awards"],
    emoji: "🏆",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is crafted with passion using traditional techniques and family recipes.",
    benefits: ["Hand-made pasta", "Artisanal bread", "Small-batch production"],
    emoji: "❤️",
  },
  {
    icon: Truck,
    title: "Farm-Fresh Daily",
    description: "Ingredients travel less than 50 miles from farm to plate, ensuring maximum freshness.",
    benefits: ["Daily harvest delivery", "Seasonal menu changes", "Zero food miles"],
    emoji: "🚜",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We support local farmers, employ locally, and give back to our rural community.",
    benefits: ["Local farmer partnerships", "Community events", "Educational programs"],
    emoji: "🤝",
  },
  {
    icon: Clock,
    title: "Time-Honored Traditions",
    description: "Our recipes and techniques have been passed down through generations of farmers.",
    benefits: ["Traditional smoking methods", "Heritage breed animals", "Heirloom vegetables"],
    emoji: "⏰",
  },
]

export default function FeaturesSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)
  }

  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-amber-50/50 to-orange-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">What Makes Us Special</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the passion and principles behind every dish we serve
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="mx-auto max-w-4xl border-primary/20 shadow-lg wood-grain">
                    <CardHeader className="text-center pb-8">
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30">
                        <div className="text-3xl">{feature.emoji}</div>
                      </div>
                      <CardTitle className="text-2xl text-primary">{feature.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-sm bg-muted/50 rounded-lg p-3">
                            <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                            <span className="font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 flex justify-center space-x-3">
          {features.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
