"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Truck, MapPin, Calculator, Clock, CheckCircle } from "lucide-react"

interface DeliveryOption {
  id: string
  name: string
  description: string
  baseFee: number
  freeThreshold?: number
  estimatedTime: string
  icon: string
}

const deliveryOptions: DeliveryOption[] = [
  {
    id: "farm-pickup",
    name: "Farm Pickup",
    description: "Collect from our farm in Bela Bela",
    baseFee: 0,
    estimatedTime: "Immediate",
    icon: "🚜",
  },
  {
    id: "local-delivery",
    name: "Local Delivery",
    description: "Within 20km of Bela Bela",
    baseFee: 50,
    freeThreshold: 500,
    estimatedTime: "Same day",
    icon: "🚛",
  },
  {
    id: "regional-delivery",
    name: "Regional Delivery",
    description: "Limpopo Province (20-100km)",
    baseFee: 120,
    freeThreshold: 800,
    estimatedTime: "1-2 days",
    icon: "🚚",
  },
  {
    id: "national-delivery",
    name: "National Delivery",
    description: "Major cities nationwide",
    baseFee: 200,
    freeThreshold: 1200,
    estimatedTime: "2-3 days",
    icon: "📦",
  },
]

export function DeliveryFeeCalculator({ orderValue: initialOrderValue = 0 }: { orderValue?: number }) {
  const [orderValue, setOrderValue] = useState<number>(initialOrderValue)
  const [selectedDelivery, setSelectedDelivery] = useState<string>("")
  const [postalCode, setPostalCode] = useState<string>("")

  const calculateDeliveryFee = (option: DeliveryOption, orderValue: number): number => {
    if (option.freeThreshold && orderValue >= option.freeThreshold) {
      return 0
    }
    return option.baseFee
  }

  const selectedOption = deliveryOptions.find((opt) => opt.id === selectedDelivery)
  const deliveryFee = selectedOption ? calculateDeliveryFee(selectedOption, orderValue) : 0
  const totalAmount = orderValue + deliveryFee

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center text-primary">
          <Truck className="h-5 w-5 mr-2" />
          Delivery Options & Fees
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Order Value Input */}
        <div className="space-y-2">
          <Label htmlFor="order-value">Order Value (R)</Label>
          <Input
            id="order-value"
            type="number"
            placeholder="Enter your order total"
            value={orderValue || ""}
            onChange={(e) => setOrderValue(Number(e.target.value))}
            className="text-lg"
          />
        </div>

        {/* Postal Code Input */}
        <div className="space-y-2">
          <Label htmlFor="postal-code">Postal Code (Optional)</Label>
          <div className="flex space-x-2">
            <Input
              id="postal-code"
              placeholder="e.g., 0480"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <Button variant="outline" size="sm">
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="space-y-3">
          <Label>Choose Delivery Method</Label>
          {deliveryOptions.map((option) => {
            const fee = calculateDeliveryFee(option, orderValue)
            const isFree = fee === 0 && option.baseFee > 0
            const isSelected = selectedDelivery === option.id

            return (
              <div
                key={option.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  isSelected ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/50"
                }`}
                onClick={() => setSelectedDelivery(option.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{option.icon}</div>
                    <div>
                      <div className="font-semibold flex items-center space-x-2">
                        <span>{option.name}</span>
                        {isFree && <Badge className="bg-green-500 text-white text-xs">FREE</Badge>}
                      </div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {option.estimatedTime}
                        </div>
                        {option.freeThreshold && (
                          <div className="text-xs text-green-600">Free delivery over R{option.freeThreshold}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${fee === 0 ? "text-green-600" : "text-primary"}`}>
                      {fee === 0 ? "FREE" : `R${fee}`}
                    </div>
                    {option.baseFee > 0 && fee === 0 && orderValue >= (option.freeThreshold || 0) && (
                      <div className="text-xs text-green-600">Saved R{option.baseFee}</div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Order Summary */}
        {selectedOption && orderValue > 0 && (
          <Card className="bg-muted/50">
            <CardContent className="pt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Order Subtotal:</span>
                  <span>R{orderValue.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery ({selectedOption.name}):</span>
                  <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                    {deliveryFee === 0 ? "FREE" : `R${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span className="text-primary">R{totalAmount.toFixed(2)}</span>
                </div>
              </div>

              {selectedOption.freeThreshold && orderValue < selectedOption.freeThreshold && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center text-blue-800">
                    <Calculator className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      Add R{(selectedOption.freeThreshold - orderValue).toFixed(2)} more for free delivery!
                    </span>
                  </div>
                </div>
              )}

              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                <CheckCircle className="h-4 w-4 mr-2" />
                Confirm Order & Delivery
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Delivery Info */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-semibold text-amber-800 mb-2">Delivery Information</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• All deliveries include insulated packaging</li>
            <li>• Cold chain maintained for freshness</li>
            <li>• Delivery times are estimates</li>
            <li>• Contact us for special delivery requirements</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default DeliveryFeeCalculator
