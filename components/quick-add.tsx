"use client"

import * as React from "react"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

interface QuickAddProps {
  product: {
    id: string
    name: string
    price: number
    emoji: string
    unit: string
    stock?: number
  }
  className?: string
  variant?: "default" | "compact"
}

export function QuickAdd({ product, className, variant = "default" }: QuickAddProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [quantity, setQuantity] = React.useState(1)
  const maxStock = product.stock || 999

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          emoji: product.emoji,
          unit: product.unit
        },
        quantity
      )
      
      toast({
        title: "Added to cart!",
        description: `${quantity} × ${product.name} has been added to your cart.`,
      })
    }
  }

  if (variant === "compact") {
    return (
      <Button 
        className={cn("bg-primary hover:bg-primary/90 text-white", className)}
        onClick={handleAddToCart}
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Add to Cart
      </Button>
    )
  }

  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <div className="flex items-center">
        <div className="mr-2 text-sm font-medium">Quantity ({product.unit})</div>
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 rounded-none"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <div className="w-12 text-center text-sm">
            {quantity}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 rounded-none"
            onClick={() => setQuantity(Math.min(maxStock, quantity + 1))}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      <Button 
        className="w-full bg-primary hover:bg-primary/90"
        onClick={handleAddToCart}
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Add to Cart - R{(product.price * quantity).toFixed(2)}
      </Button>
    </div>
  )
}