"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Food Blogger",
    location: "Nashville, TN",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The Cheesy Pig is a hidden gem! Their artisanal cheeses are absolutely divine, and you can taste the love in every bite. The farm-to-table experience is authentic and unforgettable.",
    rating: 5,
    dish: "Signature Cheese Platter",
    emoji: "😍",
  },
  {
    name: "Marcus Rodriguez",
    role: "Local Resident",
    location: "Countryside, TN",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Been coming here for 3 years and it never disappoints. The heritage pork chop is incredible, and knowing the ingredients come from right here makes it even better. True farm-to-table excellence!",
    rating: 5,
    dish: "Heritage Pork Chop",
    emoji: "🤤",
  },
  {
    name: "Emily Chen",
    role: "Chef & Culinary Student",
    location: "Memphis, TN",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "As a culinary student, I'm impressed by their commitment to traditional techniques and sustainable practices. The smoky bacon gouda is a masterpiece - I've tried to recreate it at home!",
    rating: 5,
    dish: "Smoky Bacon Gouda",
    emoji: "👨‍🍳",
  },
  {
    name: "David & Lisa Thompson",
    role: "Anniversary Diners",
    location: "Franklin, TN",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Celebrated our 25th anniversary here and it was magical. The atmosphere, the service, and especially the food created memories we'll treasure forever. The cheese selection is world-class!",
    rating: 5,
    dish: "Romantic Dinner for Two",
    emoji: "💕",
  },
  {
    name: "Jake Williams",
    role: "Food Critic",
    location: "Atlanta, GA",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "In 20 years of food criticism, The Cheesy Pig stands out. Their commitment to local sourcing and traditional methods creates flavors you simply can't find elsewhere. A must-visit destination!",
    rating: 5,
    dish: "Tasting Menu",
    emoji: "📝",
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-red-50/50 to-amber-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">What Our Guests Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from real people who've experienced our farm-to-table magic
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="mx-auto max-w-4xl border-primary/20 shadow-xl wood-grain">
                  <CardContent className="pt-8">
                    <div className="text-center mb-6">
                      <Quote className="h-8 w-8 text-primary/30 mx-auto mb-4" />
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-lg leading-relaxed mb-8 text-center italic">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex items-center justify-center mb-6">
                      <Avatar className="h-16 w-16 mr-4 border-2 border-primary/20">
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary text-lg">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <div className="font-bold text-primary text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                      </div>
                      <div className="ml-4 text-3xl">{testimonial.emoji}</div>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2">
                        <span className="text-sm font-medium text-primary">Favorite Dish: {testimonial.dish}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-12 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Join over 10,000 satisfied customers who've made The Cheesy Pig their favorite dining destination
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">📍</span>
              <span className="font-semibold">2,847+ Reviews</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">🏆</span>
              <span className="font-semibold">Award Winner 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
