import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, Users, Leaf, ArrowRight, Bell } from "lucide-react"

const tools = [
  {
    icon: Calculator,
    title: "Pig Farming Profit Calculator",
    description: "Calculate your breakeven point, ROI, and profit margins instantly",
    status: "Coming Soon",
    emoji: "📊",
  },
  {
    icon: TrendingUp,
    title: "Batch Yield Tracker",
    description: "Track weights, products, and profits from every slaughter cycle",
    status: "Beta",
    emoji: "📈",
  },
  {
    icon: Leaf,
    title: "Feed Source Analyzer",
    description: "Compare traditional vs alternative feeding costs and sustainability",
    status: "Coming Soon",
    emoji: "🌱",
  },
  {
    icon: Users,
    title: "Community Market Data",
    description: "Local pricing benchmarks and productivity comparisons",
    status: "Planning",
    emoji: "🤝",
  },
]

export default function FarmingToolsPreview() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-blue-50/50 to-green-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">🚀 Coming Soon</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Sustainable Farming Analysis Platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're building tools to help local farmers analyze profitability and optimize their operations - just like
            we did with our pig farming business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Card key={index} className="border-primary/20 wood-grain">
                <CardHeader className="text-center">
                  <div className="text-3xl mb-2">{tool.emoji}</div>
                  <CardTitle className="text-lg text-primary">{tool.title}</CardTitle>
                  <Badge variant={tool.status === "Beta" ? "default" : "secondary"} className="text-xs">
                    {tool.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{tool.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-primary/10 rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-primary mb-4">🎯 Built by Farmers, for Farmers</h3>
          <p className="text-muted-foreground mb-6">
            Our pig farming operation achieved 150% ROI using data-driven decisions. Now we're sharing those tools with
            the farming community. Get early access to our profitability analysis platform.
          </p>

          <div className="grid gap-4 md:grid-cols-3 mb-6 text-sm">
            <div>
              <strong>Real-World Tested:</strong>
              <p className="text-muted-foreground">Tools based on our actual farming experience</p>
            </div>
            <div>
              <strong>Local Focus:</strong>
              <p className="text-muted-foreground">Designed for South African farming conditions</p>
            </div>
            <div>
              <strong>Community Driven:</strong>
              <p className="text-muted-foreground">Built with input from local farmers</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-secondary">
              <Bell className="mr-2 h-4 w-4" />
              Get Notified When We Launch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Learn More About Our Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            💡 Early subscribers get free access to our basic tools and priority support
          </p>
        </div>
      </div>
    </section>
  )
}
