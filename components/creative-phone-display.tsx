"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Copy, Check } from "lucide-react"

export function CreativePhoneDisplay() {
  const [showMessage, setShowMessage] = useState(false)
  const [copied, setCopied] = useState(false)

  // Phone number: 069 238 1255
  // Creative message: "MEAT BELL" (6328 2355)
  const phoneNumber = "069 238 1255"
  const creativeMessage = "069 MEAT-BELL"
  const explanation = "Call us for premium MEAT - we'll ring your BELL with quality!"

  useEffect(() => {
    const timer = setInterval(() => {
      setShowMessage((prev) => !prev)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 overflow-hidden">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Phone className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-lg font-semibold text-primary">Call The Cheesy Pig</span>
          </div>

          <div className="relative h-16 flex items-center justify-center">
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                showMessage ? "opacity-0 transform -translate-y-2" : "opacity-100 transform translate-y-0"
              }`}
            >
              <div className="text-3xl font-bold text-primary tracking-wider">{phoneNumber}</div>
            </div>

            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                showMessage ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-2"
              }`}
            >
              <div className="text-2xl font-bold text-secondary tracking-wider mb-1">{creativeMessage}</div>
              <div className="text-sm text-muted-foreground italic">{explanation}</div>
            </div>
          </div>

          <div className="flex space-x-3 justify-center">
            <Button
              onClick={() => window.open(`tel:${phoneNumber}`)}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>

            <Button
              onClick={() => window.open(`https://wa.me/27${phoneNumber.replace(/\s/g, "").substring(1)}`)}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>

            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>

          <div className="text-xs text-muted-foreground">Available: Mon-Fri 8AM-6PM, Sat 8AM-2PM</div>
        </div>
      </CardContent>
    </Card>
  )
}

// Default export for compatibility
export default CreativePhoneDisplay
