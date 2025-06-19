"use client"

import * as React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, Phone, Mail, CheckCircle } from "lucide-react"

export default function ReservationSystem() {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const timeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Handle final submission
      setStep(4)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold text-primary">Choose Pickup Date & Products</h3>
              <p className="text-muted-foreground">Select when you'd like to dine with us</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="guests">Number of Guests</Label>
              <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="How many guests?" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                  <SelectItem value="9+">9+ Guests (Call for large parties)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold text-primary">Your Information</h3>
              <p className="text-muted-foreground">Help us prepare for your visit</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="requests">Special Requests (Optional)</Label>
              <textarea
                id="requests"
                className="w-full p-3 border rounded-md resize-none"
                rows={3}
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                placeholder="Dietary restrictions, celebrations, seating preferences..."
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold text-primary">Confirm Your Order</h3>
              <p className="text-muted-foreground">Please review your details</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Date:</span>
                <span>{new Date(formData.date).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Time:</span>
                <span>{formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Guests:</span>
                <span>{formData.guests}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span>{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>{formData.email}</span>
              </div>
              {formData.specialRequests && (
                <div>
                  <span className="font-medium">Special Requests:</span>
                  <p className="text-sm mt-1">{formData.specialRequests}</p>
                </div>
              )}
            </div>

            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-sm text-primary">
                <strong>Please note:</strong> Reservations are held for 15 minutes past the reserved time. For parties
                of 6 or more, a 20% gratuity will be added to your bill.
              </p>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">🎉</div>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-primary">Order Confirmed!</h3>
            <p className="text-muted-foreground">
              Thank you {formData.name}! Your order for pickup on {new Date(formData.date).toLocaleDateString()} at{" "}
              {formData.time} is confirmed.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                📧 Order confirmation sent to {formData.email}
                <br />📱 Pickup reminder sent to {formData.phone}
              </p>
            </div>
            <Button onClick={() => setStep(1)} variant="outline">
              Make Another Reservation
            </Button>
          </div>
        )
    }
  }

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-amber-50/50 to-orange-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Place Your Order</h2>
          <p className="mt-4 text-lg text-muted-foreground">Order fresh farm products for pickup or delivery</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20 shadow-xl wood-grain">
            <CardHeader>
              <div className="flex justify-center mb-4">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step >= stepNum ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {stepNum}
                    </div>
                    {stepNum < 3 && <div className={`w-12 h-0.5 ${step > stepNum ? "bg-primary" : "bg-muted"}`} />}
                  </div>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {renderStep()}

                {step < 4 && (
                  <div className="flex justify-between mt-8">
                    {step > 1 && (
                      <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                        Back
                      </Button>
                    )}
                    <Button
                      type="submit"
                      className={`${step === 1 ? "w-full" : "ml-auto"} bg-primary hover:bg-secondary`}
                      disabled={
                        (step === 1 && (!formData.date || !formData.time || !formData.guests)) ||
                        (step === 2 && (!formData.name || !formData.email || !formData.phone))
                      }
                    >
                      {step === 3 ? "Confirm Order" : "Continue"}
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">Need help with your order?</p>
            <div className="flex justify-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm font-medium">(555) 123-PORK</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm font-medium">reservations@cheesypig.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
