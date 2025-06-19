"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "99.9%", label: "Uptime Guarantee", description: "Reliable service you can count on" },
  { value: "10M+", label: "Transactions Processed", description: "Trusted by businesses worldwide" },
  { value: "150+", label: "Countries Supported", description: "Global reach and compliance" },
  { value: "24/7", label: "Expert Support", description: "Always here when you need us" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of companies that rely on our platform for their success
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div
                  className={`text-4xl font-bold text-primary transition-all duration-1000 ${
                    isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-lg font-semibold">{stat.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
