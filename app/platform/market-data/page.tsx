import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, BarChart3, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function MarketDataPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
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
            <Badge className="mb-4 bg-orange-100 text-orange-800">📊 Coming Soon</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary mb-6">Market Data & Analytics</h1>
            <p className="text-xl text-muted-foreground">
              Real-time pricing data, market trends, and productivity insights for sustainable farmers. Get the data you
              need to make informed business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-gradient-to-b from-orange-50/50 to-yellow-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">What's Coming</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building comprehensive market intelligence tools to help farmers optimize their operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-primary/20 bg-white/80">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Real-Time Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Live pricing data for pork products, feed alternatives, and market waste across South Africa.
                </p>
                <Badge variant="outline">Q2 2024</Badge>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-white/80">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Productivity Benchmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Compare your farm's performance against regional and national averages.
                </p>
                <Badge variant="outline">Q3 2024</Badge>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-white/80">
              <CardHeader>
                <MapPin className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Regional Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Location-specific data on market opportunities, waste sources, and demand patterns.
                </p>
                <Badge variant="outline">Q3 2024</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Access */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Get Early Access</h2>
            <p className="text-muted-foreground mb-8">
              Be among the first to access our market data platform when it launches. Early subscribers get free access
              to basic features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-secondary">
                <Clock className="mr-2 h-4 w-4" />
                Join Waitlist
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/community">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
