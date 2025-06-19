"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Star, Phone, Calendar, ChefHat } from "lucide-react"
import { useState, useEffect } from "react"

const PreorderTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 14,
    minutes: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center space-x-4 bg-red-50 border border-red-200 rounded-lg p-4">
      <Clock className="h-5 w-5 text-red-600" />
      <div>
        <div className="font-semibold text-red-800">August Batch Preorder Closes:</div>
        <div className="text-lg font-bold text-red-600">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
        </div>
      </div>
    </div>
  )
}

export default function GoatCheeseSausageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,69,19,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(210,105,30,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-red-500 text-white animate-pulse">🔥 AUGUST PREORDER</Badge>
              <Badge className="bg-green-100 text-green-800">✨ NEW PRODUCT</Badge>
              <Badge className="bg-blue-100 text-blue-800">🧀 Same-Day Fresh</Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Goat Cheese
              </span>{" "}
              Stuffed{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Pork Sausages
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              **Premium pork sausages stuffed with same-day fresh goat cheese!** We make the cheese fresh in the
              morning, stuff into our heritage pork sausages in the afternoon. From goat milk to gourmet pork sausage in
              under 8 hours.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
              <h3 className="font-bold text-primary mb-4 flex items-center">
                <ChefHat className="h-5 w-5 mr-2" />
                Same-Day Fresh Promise
              </h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-2">🐐</div>
                  <div className="text-xs font-medium">Fresh Milk</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-2">🧀</div>
                  <div className="text-xs font-medium">Make Cheese</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-2">🌭</div>
                  <div className="text-xs font-medium">Stuff Sausages</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-2">📦</div>
                  <div className="text-xs font-medium">Ready to Ship</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-primary/20">
                <CardContent className="pt-4 text-center">
                  <div className="text-2xl font-bold text-primary">R180-250</div>
                  <div className="text-sm text-muted-foreground">per kg</div>
                  <div className="text-xs text-green-600 font-medium">Premium pricing</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-4 text-center">
                  <div className="text-2xl font-bold text-secondary">Same Day</div>
                  <div className="text-sm text-muted-foreground">Fresh made</div>
                  <div className="text-xs text-blue-600 font-medium">Quality guarantee</div>
                </CardContent>
              </Card>
            </div>

            <PreorderTimer />

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-red-600 hover:bg-red-700 text-white">
                <Phone className="mr-2 h-4 w-4" />
                Preorder August Batch - R200/kg
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Batch
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-500 fill-current" />
                <span>**Premium artisan product**</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span>**Made fresh to order**</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-4 w-4 mr-2 text-secondary" />
                <span>**Unique in market**</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Single clean product card */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 relative">
                <div className="w-full h-full bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center relative p-8">
                  {/* Top Left Badge */}
                  <div className="absolute top-4 left-4 bg-orange-100 text-orange-800 text-xs px-3 py-2 rounded-lg font-bold border border-orange-200">
                    <div className="font-bold">2-4hrs</div>
                    <div className="text-xs font-normal">Cheese Ready</div>
                  </div>

                  {/* Top Right Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-lg font-bold flex items-center gap-1">
                    🔥 PREORDER
                  </div>

                  {/* Product Icons - Centered */}
                  <div className="flex flex-col items-center justify-center space-y-6 mb-8">
                    <div className="text-5xl">🐷</div>
                    <div className="text-6xl">🌭</div>
                    <div className="text-5xl">🧀</div>
                  </div>

                  {/* Product Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-amber-800 mb-2">Goat Cheese Pork Sausages</h3>
                    <p className="text-sm text-amber-600">Fresh cheese in heritage pork</p>
                  </div>

                  {/* Bottom Left Badge */}
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-lg font-bold flex items-center gap-1">
                    🍐 SAME DAY
                  </div>

                  {/* Bottom Right Badge */}
                  <div className="absolute bottom-4 right-4 bg-blue-100 text-blue-800 text-xs px-3 py-2 rounded-lg font-bold border border-blue-200 text-center">
                    <div className="font-bold">R250/kg</div>
                    <div className="text-xs font-normal">Premium Price</div>
                  </div>

                  {/* Side Badge */}
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-purple-500 text-white text-xs px-3 py-2 rounded-lg font-bold shadow-lg z-10">
                    <div className="font-bold">UNIQUE</div>
                    <div className="text-xs font-normal">Market First</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick options showcase */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card className="border-primary/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl mb-3">🧀</div>
              <h3 className="font-bold text-primary mb-2">Fresh Chèvre Style</h3>
              <p className="text-sm text-muted-foreground mb-3">Crumbly texture, tangy flavor</p>
              <Badge className="bg-green-100 text-green-800">2-4 hours ready</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl mb-3">🥛</div>
              <h3 className="font-bold text-primary mb-2">Ricotta Style</h3>
              <p className="text-sm text-muted-foreground mb-3">Creamy texture, mild flavor</p>
              <Badge className="bg-blue-100 text-blue-800">1-2 hours ready</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-bold text-primary mb-2">Herb Infused</h3>
              <p className="text-sm text-muted-foreground mb-3">Thyme, rosemary, garlic</p>
              <Badge className="bg-purple-100 text-purple-800">Custom blend</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
