"use client"

import * as React from "react"
import { ShoppingCart, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MiniCart({ className }: { className?: string }) {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()
  const [isOpen, setIsOpen] = React.useState(false)
  
  // Close the cart when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest('[data-cart]')) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className={cn("relative", className)} data-cart>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => setIsOpen(!isOpen)} 
        className="relative"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        <span>Cart</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-900 shadow-xl rounded-md z-50 overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Your Cart ({totalItems})</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-7 w-7 p-0"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {items.length === 0 ? (
            <div className="p-4 text-center">
              <p className="text-muted-foreground mb-3">Your cart is empty</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="max-h-80 overflow-y-auto p-2">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex justify-between p-2 border-b last:border-b-0"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-xl">{item.emoji}</div>
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <div className="flex items-center mt-1">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-6 w-6 p-0 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-2 text-sm">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-6 w-6 p-0 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="font-medium">R{item.price * item.quantity}</p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 p-0 text-red-500 hover:text-red-700 hover:bg-transparent"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-muted/50">
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span className="font-medium">R{totalPrice}</span>
                </div>
                
                <Button className="w-full" asChild>
                  <Link href="/checkout">
                    Checkout <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}