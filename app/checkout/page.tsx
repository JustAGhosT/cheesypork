"use client"

import { useCart } from "@/lib/cart-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, Truck, CalendarCheck } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, totalPrice, totalItems } = useCart()

  if (items.length === 0) {
    return (
      <div className="container py-16">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Button asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse Products
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="mr-2 h-5 w-5" /> Delivery Information
              </CardTitle>
              <CardDescription>Enter your delivery details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="First name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" placeholder="Phone number" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Delivery address</Label>
                <Textarea id="address" placeholder="Enter your full address" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5" /> Payment Method
              </CardTitle>
              <CardDescription>Choose your preferred payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                      id="payment-eft" 
                    name="payment" 
                      value="eft" 
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      defaultChecked 
                      aria-labelledby="label-payment-eft"
                      title="EFT (Bank Transfer)"
                  />
                    <Label id="label-payment-eft" htmlFor="payment-eft">EFT (Bank Transfer)</Label>
                </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="payment-cash" 
                      name="payment" 
                      value="cash" 
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      aria-labelledby="label-payment-cash"
                      title="Cash on Delivery"
                    />
                    <Label id="label-payment-cash" htmlFor="payment-cash">Cash on Delivery</Label>
                  </div>
                  </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="payment-card" 
                      name="payment" 
                      value="card" 
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      aria-labelledby="label-payment-card"
                      title="Card Payment (on delivery)"
                    />
                    <Label id="label-payment-card" htmlFor="payment-card">Card Payment (on delivery)</Label>
                  </div>
              </div>
              </div>
            </CardContent>
          </Card>
          </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarCheck className="mr-2 h-5 w-5" /> Order Summary
              </CardTitle>
              <CardDescription>{totalItems} items in your cart</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between border-b pb-3">
                    <div className="flex items-center">
                      <div className="mr-3 text-2xl">{item.emoji}</div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} {item.unit} × R{item.price}/kg
                        </p>
      </div>
    </div>
                    <div className="font-medium">
                      R{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
                
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>R50.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>R{(totalPrice + 50).toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                  Place Order
                </Button>
                
                <p className="text-center text-sm text-muted-foreground pt-2">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}