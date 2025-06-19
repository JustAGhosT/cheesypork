import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Handshake, TrendingUp, MapPin, Clock, Users, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

const businessOpportunities = [
  {
    id: "cheese-sausage-franchise",
    title: "Goat Cheese Sausage Franchise",
    description:
      "License our proven goat cheese sausage production method for your region. Complete training, recipes, and ongoing support included.",
    investment: "R15,000 - R50,000",
    roi: "150-300%",
    timeframe: "3-6 months",
    status: "Open",
    applicants: 23,
    icon: "🧀🌭",
    requirements: ["Food handling certification", "Basic meat processing equipment", "Local market access"],
    support: ["Complete recipe training", "Marketing materials", "Ongoing consultation"],
  },
  {
    id: "waste-collection-partnership",
    title: "Market Waste Collection Partnership",
    description:
      "Partner with us to establish waste collection routes in new areas. Help expand our sustainable feeding network.",
    investment: "R5,000 - R20,000",
    roi: "200-400%",
    timeframe: "1-3 months",
    status: "Open",
    applicants: 45,
    icon: "♻️🚛",
    requirements: ["Reliable transport", "Local market relationships", "Basic business registration"],
    support: ["Route planning assistance", "Market introduction", "Collection training"],
  },
  {
    id: "processing-facility",
    title: "Regional Processing Facility",
    description:
      "Establish a processing facility to serve multiple small-scale farmers in your region. High-impact opportunity.",
    investment: "R100,000 - R500,000",
    roi: "100-200%",
    timeframe: "6-12 months",
    status: "Planning",
    applicants: 8,
    icon: "🏭🥩",
    requirements: ["Significant capital investment", "Food safety compliance", "Regional market analysis"],
    support: ["Facility design consultation", "Equipment sourcing", "Regulatory guidance"],
  },
  {
    id: "feed-supply-chain",
    title: "Alternative Feed Supply Chain",
    description:
      "Create a network to supply market waste to pig farmers across provinces. Scale our impact nationwide.",
    investment: "R25,000 - R100,000",
    roi: "120-250%",
    timeframe: "4-8 months",
    status: "Open",
    applicants: 34,
    icon: "🌾🚚",
    requirements: ["Logistics experience", "Multi-region network", "Cold storage access"],
    support: ["Network development", "Quality standards training", "Technology platform"],
  },
]

const partnershipBenefits = [
  {
    icon: TrendingUp,
    title: "Proven Business Model",
    description: "150% ROI achieved through our sustainable farming methods",
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Complete training, marketing support, and business consultation",
  },
  {
    icon: MapPin,
    title: "Territory Protection",
    description: "Exclusive regional rights for franchise and partnership opportunities",
  },
  {
    icon: Handshake,
    title: "Community Network",
    description: "Access to our growing network of sustainable farmers and partners",
  },
]

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
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
            <Badge className="mb-4 bg-blue-100 text-blue-800">🤝 Partnership Platform</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary mb-6">
              Business Opportunities & Partnerships
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our mission to revolutionize sustainable farming. Explore franchise opportunities, partnerships, and
              business ventures that create positive impact while generating strong returns.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-12 text-primary">Why Partner With Us?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center border-primary/20">
                  <CardHeader>
                    <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Opportunities */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-green-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Available Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from various partnership models designed to fit different investment levels and business goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {businessOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{opportunity.icon}</div>
                    <Badge variant={opportunity.status === "Open" ? "default" : "secondary"}>
                      {opportunity.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <DollarSign className="h-4 w-4 mx-auto mb-1 text-green-600" />
                      <strong>Investment:</strong>
                      <p className="text-muted-foreground">{opportunity.investment}</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-4 w-4 mx-auto mb-1 text-blue-600" />
                      <strong>ROI:</strong>
                      <p className="text-green-600 font-medium">{opportunity.roi}</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Clock className="h-4 w-4 mx-auto mb-1 text-purple-600" />
                      <strong>Timeline:</strong>
                      <p className="text-muted-foreground">{opportunity.timeframe}</p>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {opportunity.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support Provided */}
                  <div>
                    <h4 className="font-semibold mb-2">Support Provided:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {opportunity.support.map((support, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                          {support}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-muted-foreground">
                      <Users className="h-4 w-4 inline mr-1" />
                      {opportunity.applicants} applicants
                    </span>
                    <Button size="sm">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 text-primary">Application Process</h2>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-muted-foreground">
                  Complete our detailed application form with your business plan
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Initial Review</h3>
                <p className="text-sm text-muted-foreground">
                  Our team reviews your application and conducts initial screening
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Interview & Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Meet with our partnership team to discuss details and fit
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Partnership Launch</h3>
                <p className="text-sm text-muted-foreground">Sign agreements and begin training and setup process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Partnership Journey?</h2>
            <p className="text-muted-foreground mb-8">
              Join our network of successful partners who are building profitable, sustainable farming businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-secondary">
                <Handshake className="mr-2 h-4 w-4" />
                Apply for Partnership
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/community">
                  Join Community First
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
