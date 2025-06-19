"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Star, Phone } from "lucide-react"
import { useEffect, useState } from "react"

const FloatingWasteItem = ({
  emoji,
  delay,
  duration = 6000,
  startX = 0,
  startY = 0,
  endX = 100,
  endY = -20,
}: {
  emoji: string
  delay: number
  duration?: number
  startX?: number
  startY?: number
  endX?: number
  endY?: number
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`absolute text-4xl transition-all duration-${duration} ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        transform: isVisible
          ? `translate(${endX}px, ${endY}px) rotate(${Math.random() * 20 - 10}deg)`
          : "translate(0, 0)",
        filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))",
      }}
    >
      {emoji}
    </div>
  )
}

const WasteToValueVisualization = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Market Waste Side */}
      <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">Market Waste</h3>
          <div className="w-16 h-1 bg-red-300 mx-auto rounded"></div>
        </div>

        {/* 3D Waste Pile */}
        <div className="relative w-48 h-48 perspective-1000">
          <div className="relative w-full h-full transform-style-preserve-3d">
            {/* Base pile */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-200 to-green-200 rounded-full opacity-30 transform rotate-x-45"></div>

            {/* Scattered waste items */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-8 text-3xl transform rotate-12">🍞</div>
              <div className="absolute top-8 right-6 text-3xl transform -rotate-6">🥕</div>
              <div className="absolute bottom-12 left-12 text-3xl transform rotate-45">🍎</div>
              <div className="absolute bottom-8 right-8 text-3xl transform -rotate-12">🥬</div>
              <div className="absolute top-16 left-16 text-2xl transform rotate-30">🍌</div>
              <div className="absolute bottom-16 right-4 text-2xl transform -rotate-45">🥖</div>
              <div className="absolute top-12 right-12 text-2xl transform rotate-15">🥔</div>
              <div className="absolute bottom-6 left-6 text-2xl transform -rotate-30">🍊</div>
            </div>

            {/* Floating particles */}
            <FloatingWasteItem emoji="🍞" delay={1000} startX={20} startY={80} endX={-10} endY={-30} />
            <FloatingWasteItem emoji="🥕" delay={1500} startX={70} startY={75} endX={15} endY={-25} />
            <FloatingWasteItem emoji="🍎" delay={2000} startX={40} startY={85} endX={5} endY={-35} />
            <FloatingWasteItem emoji="🥬" delay={2500} startX={60} startY={70} endX={-5} endY={-20} />
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-4 text-center max-w-32">Fresh produce discarded daily</p>
      </div>

      {/* Transformation Arrow */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <ArrowRight className="h-8 w-8 text-white" />
          </div>
          <div className="mt-2 text-xs font-semibold text-primary">Transform</div>
        </div>
      </div>

      {/* Premium Pork Side */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-primary mb-2">Premium Pork</h3>
          <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* 3D Pork Products */}
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full"></div>

          {/* Product showcase */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">🐷</div>
              <div className="flex justify-center space-x-2 mb-2">
                <span className="text-2xl">🥓</span>
                <span className="text-2xl">🌭</span>
                <span className="text-2xl">🥩</span>
              </div>
              <div className="text-sm font-semibold text-primary">117.9kg Yield</div>
            </div>
          </div>

          {/* Quality indicators */}
          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Premium</div>
          <div className="absolute -bottom-2 -left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
            R130-150/kg
          </div>
        </div>

        <p className="text-sm text-primary font-medium mt-4 text-center max-w-32">Sustainable, profitable protein</p>
      </div>
    </div>
  )
}

export default function MarketWasteHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 sm:py-32">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,69,19,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(210,105,30,0.1)_0%,transparent_50%)] animate-pulse"></div>
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm">
              <span className="mr-2">♻️</span>
              From Waste to Premium Protein
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Turning{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Market Waste
              </span>{" "}
              Into{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Premium Pork
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Every day, tons of fresh bread, fruits, and vegetables are discarded at local markets. We transform this
              waste into premium, sustainable pork - creating value while reducing environmental impact.
            </p>

            <div className="grid grid-cols-3 gap-4 p-4 bg-white/50 rounded-lg border border-primary/20">
              <div className="text-center">
                <div className="text-2xl mb-1">🍞🥕🍎</div>
                <div className="text-sm font-semibold">Market Waste</div>
                <div className="text-xs text-muted-foreground">Free Feed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">➡️</div>
                <div className="text-sm font-semibold">Zero Cost</div>
                <div className="text-xs text-muted-foreground">Feeding</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🥓🌭🥩</div>
                <div className="text-sm font-semibold">Premium Pork</div>
                <div className="text-xs text-muted-foreground">R130-150/kg</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-4 w-4" />
                Order Fresh Pork
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-primary text-primary hover:bg-primary hover:text-white"
              >
                See Our Process
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Bela Bela, Limpopo</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span>117.9kg Current Batch</span>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 mr-2 text-yellow-500 fill-current" />
                <span>150% ROI Proven Model</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-8 border border-primary/20">
              <WasteToValueVisualization />
            </div>

            {/* Floating impact stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border border-green-200">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">0kg</div>
                <div className="text-xs text-green-700">Commercial Feed</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border border-primary/20">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">R0</div>
                <div className="text-xs text-primary">Feed Costs</div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-6 bg-white rounded-lg p-3 shadow-lg border border-blue-200">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">100%</div>
                <div className="text-xs text-blue-700">Sustainable</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle waste pattern overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent"></div>

      {/* Floating waste items for ambiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-2xl opacity-20 animate-bounce" style={{ animationDelay: "0s" }}>
          🍞
        </div>
        <div className="absolute top-40 right-20 text-2xl opacity-20 animate-bounce" style={{ animationDelay: "1s" }}>
          🥕
        </div>
        <div className="absolute bottom-40 left-20 text-2xl opacity-20 animate-bounce" style={{ animationDelay: "2s" }}>
          🍎
        </div>
        <div
          className="absolute bottom-20 right-10 text-2xl opacity-20 animate-bounce"
          style={{ animationDelay: "3s" }}
        >
          🥬
        </div>
      </div>
    </section>
  )
}
