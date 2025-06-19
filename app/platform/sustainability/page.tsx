import WasteImpactSection from "@/components/waste-impact-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Leaf, Recycle, TrendingDown, Globe, Handshake } from "lucide-react"
import Link from "next/link"

const sustainabilityMetrics = [
  {
    metric: "Carbon Footprint Reduction",
    value: "80%",
    description: "Compared to conventional feed operations",
    icon: Leaf,
    color: "text-green-600",
  },
  {
    metric: "Waste Diverted Monthly",
    value: "500kg+",
    description: "Fresh produce rescued from landfills",
    icon: Recycle,
    color: "text-blue-600",
  },
  {
    metric: "Feed Cost Savings",
    value: "100%",
    description: "Zero monthly feed expenses",
    icon: TrendingDown,
    color: "text-purple-600",
  },
  {
    metric: "Local Impact",
    value: "12+",
    description: "Markets participating in waste program",
    icon: Globe,
    color: "text-orange-600",
  },
]

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-green-50 to-white">
        <div className="container">
          <div className="flex items-center mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="max-w-3xl">
            <Badge className="mb-4 bg-green-100 text-green-800">♻️ Sustainability Platform</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary mb-6">
              Environmental Impact & Sustainability
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how The Cheesy Pig transforms market waste into premium protein while creating positive
              environmental and economic impact for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12 text-primary">Our Sustainability Impact</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sustainabilityMetrics.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="text-center border-primary/20">
                  <CardHeader>
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${item.color}`} />
                    <CardTitle className="text-3xl font-bold text-primary">{item.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">{item.metric}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Impact Section */}
      <WasteImpactSection />

      {/* Detailed Methodology */}
      <section className="py-20 bg-gradient-to-b from-green-50/50 to-blue-50/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Sustainable Methodology</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Recycle className="h-5 w-5 mr-2 text-green-600" />
                    Waste Collection Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-600">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Daily Market Rounds</h4>
                        <p className="text-sm text-muted-foreground">Visit 12+ local markets every morning</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-600">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Quality Assessment</h4>
                        <p className="text-sm text-muted-foreground">
                          Select fresh produce unsuitable for human consumption
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-600">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Transport & Processing</h4>
                        <p className="text-sm text-muted-foreground">Clean, sort, and prepare feed on-farm</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-blue-600" />
                    Environmental Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Landfill Diversion</h4>
                        <p className="text-sm text-muted-foreground">500kg+ organic waste diverted monthly</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Reduced Emissions</h4>
                        <p className="text-sm text-muted-foreground">Lower methane from decomposing waste</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Circular Economy</h4>
                        <p className="text-sm text-muted-foreground">Complete nutrient cycle from waste to protein</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Join the Sustainable Farming Movement</h2>
            <p className="text-muted-foreground mb-8">
              Learn how to implement similar sustainable practices on your farm or explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-secondary">
                <Link href="/platform/opportunities">
                  <Handshake className="mr-2 h-4 w-4" />
                  Explore Partnerships
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/community">
                  Join Community
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
