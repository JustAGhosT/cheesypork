"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Phone, MessageCircle, Minus, Plus, ShoppingCart, Truck, Calculator } from "lucide-react"

interface OrderItem {
  id: string
  name: string
  description: string
  pricePerKg: number
  availableStock: number
  minOrder: number
  maxOrder: number
  unit: string
  emoji: string
  category: string
  discount?: {
    threshold: number
    percentage: number
    description: string
  }
}

const orderItems: OrderItem[] = [
  {
    id: "cheese-grillers",
    name: "Cheese Grillers",
    description: "Premium pork sausages perfect for braai",
    pricePerKg: 140,
    availableStock: 74.0,
    minOrder: 1,
    maxOrder: 20,
    unit: "kg",
    emoji: "🌭",
    category: "Sausages",
    discount: {
      threshold: 10,
      percentage: 10,
      description: "10% off orders 10kg+",
    },
  },
  {
    id: "premium-bacon",
    name: "Premium Bacon",
    description: "Thick-cut, naturally cured bacon",
    pricePerKg: 165,
    availableStock: 7.3,
    minOrder: 0.5,
    maxOrder: 7,
    unit: "kg",
    emoji: "🥓",
    category: "Bacon",
    discount: {
      threshold: 3,
      percentage: 5,
      description: "5% off orders 3kg+",
    },
  },
  {
    id: "bacon-rashers",
    name: "Bacon Rashers",
    description: "Thin-sliced bacon for breakfast",
    pricePerKg: 130,
    availableStock: 6.3,
    minOrder: 0.5,
    maxOrder: 6,
    unit: "kg",
    emoji: "🍳",
    category: "Bacon",
  },
  {
    id: "pork-cuts",
    name: "Pork Steaks & Cuts",
    description: "Premium cuts and roasting joints",
    pricePerKg: 115,
    availableStock: 17.9,
    minOrder: 1,
    maxOrder: 15,
    unit: "kg",
    emoji: "🥩",
    category: "Fresh Cuts",
    discount: {
      threshold: 8,
      percentage: 15,
      description: "15% off orders 8kg+",
    },
  },
  {
    id: "soup-bones",
    name: "Soup Bones",
    description: "Perfect for stocks and dog treats",
    pricePerKg: 15,
    availableStock: 12.4,
    minOrder: 1,
    maxOrder: 10,
    unit: "kg",
    emoji: "🦴",
    category: "Bones",
  },
]

export default function InteractiveOrderSummary() {
  const [quantities, setQuantities] = React.useState<Record<string, number>>({})
  const [isAnimating, setIsAnimating] = React.useState<Record<string, boolean>>({})

  const updateQuantity = (itemId: string, newQuantity: number) => {
    setIsAnimating((prev) => ({ ...prev, [itemId]: true }))
    setQuantities((prev) => ({
      ...prev,
      [itemId]: newQuantity,
    }))

    // Reset animation after a short delay
    setTimeout(() => {
      setIsAnimating((prev) => ({ ...prev, [itemId]: false }))
    }, 300)
  }

  const incrementQuantity = (item: OrderItem) => {
    const currentQty = quantities[item.id] || 0
    const newQty = Math.min(currentQty + (item.unit === "kg" ? 0.5 : 1), item.maxOrder)
    updateQuantity(item.id, newQty)
  }

  const decrementQuantity = (item: OrderItem) => {
    const currentQty = quantities[item.id] || 0
    const newQty = Math.max(currentQty - (item.unit === "kg" ? 0.5 : 1), 0)
    updateQuantity(item.id, newQty)
  }

  const calculateItemTotal = (item: OrderItem): number => {
    const quantity = quantities[item.id] || 0
    let price = item.pricePerKg * quantity

    // Apply discount if applicable
    if (item.discount && quantity >= item.discount.threshold) {
      price = price * (1 - item.discount.percentage / 100)
    }

    return price
  }

  const calculateOrderTotals = () => {
    const subtotal = orderItems.reduce((total, item) => {
      const quantity = quantities[item.id] || 0
      return total + item.pricePerKg * quantity
    }, 0)

    const discountAmount = orderItems.reduce((total, item) => {
      const quantity = quantities[item.id] || 0
      if (item.discount && quantity >= item.discount.threshold) {
        const itemTotal = item.pricePerKg * quantity
        return total + (itemTotal * item.discount.percentage) / 100
      }
      return total
    }, 0)

    const finalTotal = subtotal - discountAmount
    const totalWeight = orderItems.reduce((total, item) => {
      return total + (quantities[item.id] || 0)
    }, 0)

    return { subtotal, discountAmount, finalTotal, totalWeight }
  }

  const { subtotal, discountAmount, finalTotal, totalWeight } = calculateOrderTotals()
  const hasItems = Object.values(quantities).some((qty) => qty > 0)

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-blue-50/50 to-green-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">🛒 Interactive Order Builder</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Build Your Custom Order</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Use the sliders to adjust quantities and see real-time pricing with automatic discounts
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Product Selection */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-primary mb-6">Select Your Products</h3>

            {orderItems.map((item) => {
              const quantity = quantities[item.id] || 0
              const itemTotal = calculateItemTotal(item)
              const hasDiscount = item.discount && quantity >= item.discount.threshold
              const isAnimatingItem = isAnimating[item.id]

              return (
                <Card
                  key={item.id}
                  className={`border-primary/20 transition-all duration-300 ${
                    quantity > 0 ? "ring-2 ring-primary/20 shadow-lg" : "hover:shadow-md"
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{item.emoji}</div>
                        <div>
                          <h4 className="font-semibold text-primary">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {item.availableStock}
                              {item.unit} available
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">
                          R{item.pricePerKg}/{item.unit}
                        </div>
                        {hasDiscount && (
                          <Badge className="bg-green-500 text-white text-xs">{item.discount!.percentage}% OFF</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Quantity Controls */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium">Quantity ({item.unit})</label>
                        <div
                          className={`text-lg font-bold transition-all duration-300 ${
                            isAnimatingItem ? "scale-110 text-primary" : "text-secondary"
                          }`}
                        >
                          {quantity.toFixed(item.unit === "kg" ? 1 : 0)}
                          {item.unit}
                        </div>
                      </div>

                      {/* Slider */}
                      <div className="px-2">
                        <Slider
                          value={[quantity]}
                          onValueChange={(value) => updateQuantity(item.id, value[0])}
                          max={item.maxOrder}
                          min={0}
                          step={item.unit === "kg" ? 0.5 : 1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>0{item.unit}</span>
                          <span>
                            {item.maxOrder}
                            {item.unit}
                          </span>
                        </div>
                      </div>

                      {/* Quick Adjust Buttons */}
                      <div className="flex items-center justify-center space-x-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => decrementQuantity(item)}
                          disabled={quantity <= 0}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>

                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.minOrder)}
                            className="text-xs"
                          >
                            Min
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, Math.min(5, item.maxOrder))}
                            className="text-xs"
                          >
                            5{item.unit}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.maxOrder)}
                            className="text-xs"
                          >
                            Max
                          </Button>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => incrementQuantity(item)}
                          disabled={quantity >= item.maxOrder}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Item Total and Discount Info */}
                    {quantity > 0 && (
                      <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Subtotal:</span>
                          <span className="font-medium">R{(item.pricePerKg * quantity).toFixed(2)}</span>
                        </div>

                        {hasDiscount && (
                          <div className="flex justify-between items-center text-green-600">
                            <span className="text-sm">Discount ({item.discount!.percentage}%):</span>
                            <span className="font-medium">
                              -R{((item.pricePerKg * quantity * item.discount!.percentage) / 100).toFixed(2)}
                            </span>
                          </div>
                        )}

                        <div className="flex justify-between items-center font-bold text-primary border-t pt-2">
                          <span>Item Total:</span>
                          <span className={`transition-all duration-300 ${isAnimatingItem ? "scale-110" : ""}`}>
                            R{itemTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Discount Threshold Info */}
                    {item.discount && quantity < item.discount.threshold && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-blue-800">
                          💡 Add {(item.discount.threshold - quantity).toFixed(1)}
                          {item.unit} more to get <strong>{item.discount.percentage}% off</strong> this item!
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card
              className={`border-primary/20 sticky top-8 transition-all duration-500 ${
                hasItems ? "shadow-xl ring-2 ring-primary/20" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2 text-primary" />
                  Order Summary
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {!hasItems ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">🛒</div>
                    <p className="text-muted-foreground">Use the sliders above to add items to your order</p>
                  </div>
                ) : (
                  <>
                    {/* Order Items */}
                    <div className="space-y-3">
                      {orderItems.map((item) => {
                        const quantity = quantities[item.id] || 0
                        if (quantity === 0) return null

                        const itemTotal = calculateItemTotal(item)
                        const hasDiscount = item.discount && quantity >= item.discount.threshold

                        return (
                          <div key={item.id} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                            <div>
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {quantity.toFixed(1)}
                                {item.unit} × R{item.pricePerKg}
                                {hasDiscount && (
                                  <span className="text-green-600 ml-1">(-{item.discount!.percentage}%)</span>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">R{itemTotal.toFixed(2)}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Order Totals */}
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>R{subtotal.toFixed(2)}</span>
                      </div>

                      {discountAmount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Total Discounts:</span>
                          <span>-R{discountAmount.toFixed(2)}</span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span>Total Weight:</span>
                        <span>{totalWeight.toFixed(1)}kg</span>
                      </div>

                      <div className="flex justify-between font-bold text-lg text-primary border-t pt-2">
                        <span>Total:</span>
                        <span>R{finalTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Delivery Options */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center mb-2">
                        <Truck className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="font-medium text-blue-800">Delivery Options</span>
                      </div>
                      <div className="text-sm text-blue-700 space-y-1">
                        <div>🚜 Farm Pickup: FREE</div>
                        <div>🚛 Local Delivery (20km): R50</div>
                        <div>📦 Bulk Orders (20kg+): Free delivery</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button className="w-full bg-primary hover:bg-secondary">
                        <Phone className="mr-2 h-4 w-4" />
                        Call to Order
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Order
                      </Button>
                    </div>

                    {/* Savings Indicator */}
                    {discountAmount > 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                        <div className="text-green-800 font-bold">🎉 You're saving R{discountAmount.toFixed(2)}!</div>
                        <div className="text-xs text-green-600 mt-1">Thanks for ordering in bulk!</div>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        {hasItems && (
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Calculator className="h-5 w-5 mr-2 text-primary" />
                  <span className="font-semibold text-primary">Order Summary</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{totalWeight.toFixed(1)}kg</div>
                    <div className="text-sm text-muted-foreground">Total Weight</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">R{discountAmount.toFixed(0)}</div>
                    <div className="text-sm text-muted-foreground">You Save</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">R{finalTotal.toFixed(0)}</div>
                    <div className="text-sm text-muted-foreground">Final Total</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
