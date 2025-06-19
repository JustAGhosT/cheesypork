"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    basePrice: 29,
    pricePerUser: 5,
    features: [
      "Up to 10 team members",
      "Basic analytics dashboard",
      "Email support",
      "5GB storage",
      "Standard integrations",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    basePrice: 79,
    pricePerUser: 12,
    features: [
      "Up to 50 team members",
      "Advanced analytics & reporting",
      "Priority support",
      "50GB storage",
      "Premium integrations",
      "Custom workflows",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    basePrice: 199,
    pricePerUser: 25,
    features: [
      "Unlimited team members",
      "Enterprise analytics suite",
      "24/7 dedicated support",
      "Unlimited storage",
      "All integrations",
      "Advanced automation",
      "Full API access",
      "Custom onboarding",
      "SLA guarantee",
    ],
    popular: false,
  },
]

export function PricingSlider() {
  const [teamSize, setTeamSize] = React.useState([10])

  const calculatePrice = (plan: (typeof plans)[0]) => {
    const users = teamSize[0]
    return plan.basePrice + users * plan.pricePerUser
  }

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose the perfect plan for your team size and needs</p>
        </div>

        <div className="mx-auto max-w-md mb-12">
          <div className="text-center mb-4">
            <label className="text-sm font-medium">Team Size: {teamSize[0]} members</label>
          </div>
          <Slider value={teamSize} onValueChange={setTeamSize} max={100} min={1} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>1</span>
            <span>50</span>
            <span>100+</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
              {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${calculatePrice(plan)}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
