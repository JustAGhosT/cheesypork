"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Star, Package, Gift, Users, Phone, ChefHat, Beef, Award } from "lucide-react"

const porkProducts = [
  {
    id: 1,
    name: "Premium Bacon",
    description: "Thick-cut, hickory-smoked bacon from pasture-raised pigs",
    price: "R89/kg",
    image: "/images/bacon.jpg",
    stock: 15,
    rating: 4.9,
    category: "pork",
  },
  {
    id: 2,
    name: "Pork Chops",
    description: "Tender, juicy chops perfect for grilling",
    price: "R75/kg",
    image: "/images/pork-steak.jpg",
    stock: 8,
    rating: 4.8,
    category: "pork",
  },
  {
    id: 3,
    name: "Goat Cheese Sausages",
    description: "Artisan pork sausages stuffed with fresh goat cheese",
    price: "R120/kg",
    image: "/placeholder.svg?height=200&width=300",
    stock: 12,
    rating: 5.0,
    category: "pork",
    special: true,
  },
]

const cheeseProducts = [
  {
    id: 4,
    name: "Fresh Chèvre",
    description: "Creamy goat cheese made daily on our farm",
    price: "R45/200g",
    image: "/images/cheese-griller.jpg",
    stock: 20,
    rating: 4.7,
    category: "cheese",
  },
  {
    id: 5,
    name: "Herb-Infused Cheese",
    description: "Goat cheese with fresh herbs from our garden",
    price: "R55/200g",
    image: "/placeholder.svg?height=200&width=300",
    stock: 10,
    rating: 4.9,
    category: "cheese",
  },
  {
    id: 6,
    name: "Aged Farmhouse Cheese",
    description: "Rich, complex flavors from 6-month aging",
    price: "R85/200g",
    image: "/placeholder.svg?height=200&width=300",
    stock: 5,
    rating: 5.0,
    category: "cheese",
    special: true,
  },
]

const allProducts = [...porkProducts, ...cheeseProducts]

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [bulkOrderForm, setBulkOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    quantity: "",
    message: "",
  })

  const filteredProducts =
    activeTab === "all" ? allProducts : allProducts.filter((product) => product.category === activeTab)

  const handleBulkOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("🐷 Thank you! We'll contact you within 24 hours about your bulk order.")
  }

  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-4xl">🐷</span>
          <h1 className="text-4xl font-bold text-primary">Farm Fresh Products</h1>
          <span className="text-4xl">🧀</span>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Premium pork and artisan cheeses, raised and crafted with love on our sustainable farm
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            All Products
          </TabsTrigger>
          <TabsTrigger value="pork" className="flex items-center gap-2">
            <Beef className="h-4 w-4" />
            Pork
          </TabsTrigger>
          <TabsTrigger value="cheese" className="flex items-center gap-2">
            <ChefHat className="h-4 w-4" />
            Cheese
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.special && (
                    <Badge className="absolute top-2 right-2 bg-amber-500 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Special
                    </Badge>
                  )}
                  <Badge
                    className={`absolute top-2 left-2 ${
                      product.stock > 10 ? "bg-green-500" : product.stock > 5 ? "bg-amber-500" : "bg-red-500"
                    } text-white`}
                  >
                    {product.stock} in stock
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-primary hover:bg-secondary">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Bulk Orders Section */}
      <div id="bulk-orders" className="mt-16">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-6 w-6 text-amber-600" />
              <CardTitle className="text-2xl text-amber-800">🐷 Bulk & Custom Orders</CardTitle>
              <Gift className="h-6 w-6 text-amber-600" />
            </div>
            <CardDescription className="text-lg">
              Perfect for restaurants, events, or gift packages. Get wholesale pricing and custom solutions!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-800">🧀 What We Offer:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Wholesale pricing (20%+ discount on 10kg+ orders)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Custom gift packages and hampers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Restaurant and catering supply
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Special event packages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Corporate gifts and hampers
                  </li>
                </ul>
              </div>

              <form onSubmit={handleBulkOrderSubmit} className="space-y-4">
                <h3 className="text-xl font-semibold text-amber-800">Request Quote:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={bulkOrderForm.name}
                      onChange={(e) => setBulkOrderForm({ ...bulkOrderForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={bulkOrderForm.email}
                      onChange={(e) => setBulkOrderForm({ ...bulkOrderForm, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={bulkOrderForm.phone}
                      onChange={(e) => setBulkOrderForm({ ...bulkOrderForm, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="orderType">Order Type</Label>
                    <Select
                      value={bulkOrderForm.orderType}
                      onValueChange={(value) => setBulkOrderForm({ ...bulkOrderForm, orderType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wholesale">Wholesale/Restaurant</SelectItem>
                        <SelectItem value="gift">Gift Packages</SelectItem>
                        <SelectItem value="event">Event Catering</SelectItem>
                        <SelectItem value="corporate">Corporate Gifts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input
                    id="quantity"
                    placeholder="e.g., 20kg pork, 50 gift packages"
                    value={bulkOrderForm.quantity}
                    onChange={(e) => setBulkOrderForm({ ...bulkOrderForm, quantity: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your specific needs..."
                    value={bulkOrderForm.message}
                    onChange={(e) => setBulkOrderForm({ ...bulkOrderForm, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Request Quote
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
