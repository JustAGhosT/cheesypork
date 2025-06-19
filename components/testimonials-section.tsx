"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Bela Bela",
    content:
      "The bacon is incredible! You can really taste the difference when pigs are fed properly. My family won't buy from anywhere else now.",
    rating: 5,
    product: "Premium Bacon",
    emoji: "😍",
  },
  {
    name: "Pieter K.",
    location: "Warmbaths",
    content:
      "Ordered 10kg of grillers for our family braai. Everyone asked where we got such amazing boerewors! Will definitely order again.",
    rating: 5,
    product: "Cheese Grillers",
    emoji: "🔥",
  },
  {
    name: "Maria L.",
    location: "Modimolle",
    content:
      "Love supporting local farmers who care about sustainability. The meat is fresh, the price is fair, and the story is inspiring.",
    rating: 5,
    product: "Mixed Order",
    emoji: "❤️",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-red-50/50 to-amber-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real feedback from real families who've tasted the difference
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-primary/20 shadow-lg wood-grain">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Quote className="h-6 w-6 text-primary/30 mx-auto mb-3" />
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-sm leading-relaxed mb-6 text-center italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center justify-center mb-4">
                  <Avatar className="h-12 w-12 mr-3 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="ml-3 text-2xl">{testimonial.emoji}</div>
                </div>

                <div className="text-center">
                  <Badge className="bg-primary/10 text-primary text-xs">Purchased: {testimonial.product}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Join our growing family of satisfied customers</p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold">5.0/5 Customer Rating</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">📍</span>
              <span className="font-semibold">Local Bela Bela Area</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">🏆</span>
              <span className="font-semibold">100% Satisfied Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
