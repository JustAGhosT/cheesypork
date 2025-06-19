import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Star, TrendingUp } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Analytics Pro",
    description: "Advanced analytics and reporting suite",
    price: "$99/month",
    category: "Analytics",
    rating: 4.8,
    status: "Active",
    sales: 1250,
  },
  {
    id: 2,
    name: "Automation Hub",
    description: "Workflow automation and AI tools",
    price: "$149/month",
    category: "Automation",
    rating: 4.9,
    status: "Active",
    sales: 890,
  },
  {
    id: 3,
    name: "Security Shield",
    description: "Enterprise-grade security solutions",
    price: "$199/month",
    category: "Security",
    rating: 4.7,
    status: "Active",
    sales: 650,
  },
  {
    id: 4,
    name: "Mobile Connect",
    description: "Mobile app development platform",
    price: "$79/month",
    category: "Development",
    rating: 4.6,
    status: "Beta",
    sales: 420,
  },
]

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Product Catalog</h1>
        <p className="text-muted-foreground">Manage and monitor your product portfolio</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Package className="h-8 w-8 text-primary" />
                <Badge variant={product.status === "Active" ? "default" : "secondary"}>{product.status}</Badge>
              </div>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {product.sales} sales this month
                </div>

                <Badge variant="outline">{product.category}</Badge>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
