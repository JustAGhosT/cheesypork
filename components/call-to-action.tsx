"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CallToActionProps {
  title?: string
  description?: string
  primaryButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
  className?: string
}

export function CallToAction({
  title = "Ready to Get Started?",
  description = "Join thousands of satisfied customers who trust our premium products.",
  primaryButton = { text: "Get Started", href: "#" },
  secondaryButton,
  className = "",
}: CallToActionProps) {
  return (
    <section className={`py-16 bg-gradient-to-r from-green-600 to-green-700 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-green-700 hover:bg-green-50" onClick={primaryButton.onClick}>
            {primaryButton.text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          {secondaryButton && (
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700"
              onClick={secondaryButton.onClick}
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
