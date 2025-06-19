import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Leaf, Handshake, Calculator, TrendingUp } from "lucide-react"
import Link from "next/link"

const platformFeatures = [
  {
    icon: Leaf,
    title: "Sustainability Impact",
    description: "See how we transform market waste into premium protein",
    href: "/platform/sustainability",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    badge: "Environmental",
  },
  {
    icon: Handshake,
    title: "Business Opportunities",
    description: "Explore franchise and partnership opportunities",
    href: "/platform/opportunities",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    badge: "Partnerships",
  },
  {
    icon: Calculator,
    title: "Farming Tools",
    description: "Access profit calculators and analysis tools",
    href: "/community",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    badge: "Tools",
  },
  {
    icon: TrendingUp,
    title: "Market Data",
    description: "Local pricing and productivity insights",
    href: "/platform/market-data",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    badge: "Coming Soon",
  },
]

export default function PlatformPreview() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-blue-50/50 to-green-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">🚀 The Cheesy Pig Platform</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Beyond Farm-to-Table</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our sustainability impact, explore business opportunities, and access tools that help farmers build
            profitable, eco-friendly operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {platformFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`${feature.color} hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs mb-2">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={feature.href}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-primary/10 rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-primary mb-4">🎯 Built by Farmers, for Farmers</h3>
          <p className="text-muted-foreground mb-6">
            Our pig farming operation achieved 150% ROI using data-driven decisions and sustainable practices. Now we're
            sharing those insights and creating opportunities for the entire farming community.
          </p>

          <div className="grid gap-4 md:grid-cols-3 mb-6 text-sm">
            <div>
              <strong>Real-World Tested:</strong>
              <p className="text-muted-foreground">Methods proven on our actual farm</p>
            </div>
            <div>
              <strong>Community Driven:</strong>
              <p className="text-muted-foreground">Built with input from local farmers</p>
            </div>
            <div>
              <strong>Sustainable Focus:</strong>
              <p className="text-muted-foreground">Environmental and economic benefits</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-secondary">
              <Link href="/platform/sustainability">
                <Leaf className="mr-2 h-4 w-4" />
                See Our Impact
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link href="/platform/opportunities">
                Explore Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
