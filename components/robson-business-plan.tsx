"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, TrendingUp, Users, Target, Award, Globe, Leaf, BarChart3 } from "lucide-react"

const partnershipData = {
  partners: [
    {
      name: "Hans Jurgens Smit",
      role: "Investor & Strategist",
      share: "33.33%",
      responsibilities: ["Financial investment", "Marketing strategy", "Business development"],
      icon: "💼",
    },
    {
      name: "Robson",
      role: "Farm Manager",
      share: "33.33%",
      responsibilities: ["Daily pig care", "Feed sourcing", "Health monitoring"],
      icon: "🐷",
    },
    {
      name: "Robson's Mom",
      role: "Operating Investor",
      share: "33.33%",
      responsibilities: ["Monthly expenses (R250)", "Utilities", "Emergency costs"],
      icon: "🏠",
    },
  ],
  firstHarvest: {
    pigs: 5,
    processedWeight: 117.9,
    processingCost: 7063.9,
    products: [
      { name: "Cheese Grillers", weight: 74.0, value: "R8,140-11,100" },
      { name: "Bacon", weight: 7.3, value: "R913-1,168" },
      { name: "Rashers", weight: 6.3, value: "R756-945" },
      { name: "Cutting/Steaks", weight: 17.9, value: "R1,790-2,506" },
      { name: "Bones", weight: 12.4, value: "R124-248" },
    ],
  },
  financials: {
    monthlyOperatingCost: 250,
    costPerPig: 1763,
    breakEvenPrice: 74.74,
    marketPrice: { min: 110, max: 150 },
    profitMargin: { min: 47, max: 101 },
  },
  projections: {
    conservative: { annual: 59657, perPartner: 6406, monthly: 534 },
    standard: { annual: 70506, perPartner: 10022, monthly: 835 },
    premium: { annual: 81354, perPartner: 13638, monthly: 1137 },
  },
}

export default function RobsonBusinessPlan() {
  const [selectedScenario, setSelectedScenario] = React.useState("standard")

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-green-50/50 to-amber-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="text-4xl mb-4">🐷🤝📊</div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Robson Pig Farming Partnership</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real-world case study: Sustainable pig farming using market waste feed
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              🌱 Sustainable Model
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              💰 Proven Profitable
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              🤝 Equal Partnership
            </Badge>
          </div>
        </div>

        {/* Partnership Overview */}
        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          {partnershipData.partners.map((partner, index) => (
            <Card key={index} className="border-primary/20 shadow-lg wood-grain">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">{partner.icon}</div>
                <CardTitle className="text-lg text-primary">{partner.name}</CardTitle>
                <CardDescription>{partner.role}</CardDescription>
                <Badge className="bg-primary text-white">{partner.share} Share</Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {partner.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Business Overview</TabsTrigger>
            <TabsTrigger value="harvest">First Harvest</TabsTrigger>
            <TabsTrigger value="financials">Financial Analysis</TabsTrigger>
            <TabsTrigger value="projections">Growth Projections</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-green-600" />
                    Unique Value Proposition
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🌱 Waste-to-Protein Model</h4>
                    <p className="text-sm text-green-700">
                      Uses discarded market produce as free feed, creating ultra-low operating costs while reducing
                      environmental waste.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Feed Cost:</span>
                      <span className="font-bold text-green-600">R0 (FREE)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Monthly Operating Cost:</span>
                      <span className="font-bold">R250 total</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cost per Partner:</span>
                      <span className="font-bold">R83/month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Competitive Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">💰</span>
                      <div>
                        <strong>Ultra-low costs</strong>
                        <p className="text-sm text-muted-foreground">40-60% below industry standard</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🌍</span>
                      <div>
                        <strong>Environmental impact</strong>
                        <p className="text-sm text-muted-foreground">Reduces market waste significantly</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🏆</span>
                      <div>
                        <strong>Quality genetics</strong>
                        <p className="text-sm text-muted-foreground">Established breeding stock</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">📍</span>
                      <div>
                        <strong>Local operation</strong>
                        <p className="text-sm text-muted-foreground">Fresh, traceable products</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="harvest" className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  First Slaughter Results (5 Pigs)
                </CardTitle>
                <CardDescription>Successful proof of concept with excellent yields</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-3">Production Metrics</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Pigs Processed:</span>
                          <span className="font-bold">5 pigs</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Processed Weight:</span>
                          <span className="font-bold">117.9kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average per Pig:</span>
                          <span className="font-bold">23.6kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Processing Yield:</span>
                          <span className="font-bold text-green-600">23.6%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-3">Cost Breakdown</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Processing Costs:</span>
                          <span className="font-bold">R7,063.90</span>
                        </div>
                        <div className="flex justify-between">
                          <span>7-Month Operating:</span>
                          <span className="font-bold">R1,750</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Total Costs:</span>
                          <span className="font-bold">R8,813.90</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cost per Kg:</span>
                          <span className="font-bold">R74.74</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Product Breakdown</h4>
                    {partnershipData.firstHarvest.products.map((product, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.weight}kg</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">{product.value}</p>
                        </div>
                      </div>
                    ))}
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <div className="flex justify-between font-bold">
                        <span>Total Market Value:</span>
                        <span className="text-green-700">R11,723-15,967</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financials" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Break-Even Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">R74.74/kg</div>
                  <p className="text-xs text-muted-foreground">Ultra-competitive</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Market Price Range</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">R110-150/kg</div>
                  <p className="text-xs text-muted-foreground">Premium positioning</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Safety Margin</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">47-101%</div>
                  <p className="text-xs text-muted-foreground">Above break-even</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Monthly Cost/Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">R83</div>
                  <p className="text-xs text-muted-foreground">Extremely low</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Profit Analysis (First Batch)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Conservative (R110/kg)</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Revenue:</span>
                        <span>R12,969</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Costs:</span>
                        <span>R8,814</span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-1">
                        <span>Per Partner:</span>
                        <span className="text-green-600">R1,385</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Standard (R130/kg)</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Revenue:</span>
                        <span>R15,327</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Costs:</span>
                        <span>R8,814</span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-1">
                        <span>Per Partner:</span>
                        <span className="text-green-600">R2,171</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Premium (R150/kg)</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Revenue:</span>
                        <span>R17,685</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Costs:</span>
                        <span>R8,814</span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-1">
                        <span>Per Partner:</span>
                        <span className="text-green-600">R2,957</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projections" className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg">
                {Object.keys(partnershipData.projections).map((scenario) => (
                  <Button
                    key={scenario}
                    variant={selectedScenario === scenario ? "default" : "ghost"}
                    className={`rounded-full capitalize ${
                      selectedScenario === scenario ? "bg-primary text-white" : "text-primary hover:bg-primary/10"
                    }`}
                    onClick={() => setSelectedScenario(scenario)}
                  >
                    {scenario} Scenario
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                    Annual Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    R{partnershipData.projections[selectedScenario].annual.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">Total partnership revenue</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Per Partner (Annual)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    R{partnershipData.projections[selectedScenario].perPartner.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">33.33% share each</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                    Monthly Income
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    R{partnershipData.projections[selectedScenario].monthly}
                  </div>
                  <p className="text-sm text-muted-foreground">Per partner per month</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-primary" />
                  5-Year Growth Projection
                </CardTitle>
                <CardDescription>Conservative vs Aggressive growth scenarios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Year</th>
                        <th className="text-left p-2">Pigs Sold</th>
                        <th className="text-left p-2">Revenue</th>
                        <th className="text-left p-2">Per Partner</th>
                        <th className="text-left p-2">Monthly Income</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { year: 1, pigs: 23, revenue: 81354, partner: 13638 },
                        { year: 2, pigs: 40, revenue: 141600, partner: 23680 },
                        { year: 3, pigs: 60, revenue: 212400, partner: 35520 },
                        { year: 4, pigs: 80, revenue: 283200, partner: 47360 },
                        { year: 5, pigs: 100, revenue: 354000, partner: 59200 },
                      ].map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2 font-medium">{row.year}</td>
                          <td className="p-2">{row.pigs}</td>
                          <td className="p-2">R{row.revenue.toLocaleString()}</td>
                          <td className="p-2 font-medium text-primary">R{row.partner.toLocaleString()}</td>
                          <td className="p-2">R{Math.round(row.partner / 12).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>ROI Analysis:</strong> 200-800% annual return on investment with payback period of just 1-2
                    months per batch.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <div className="bg-primary/10 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">🏆 Business Viability: EXCELLENT</h3>
            <p className="text-muted-foreground mb-4">
              This partnership represents an exceptionally profitable and sustainable business opportunity with proven
              results, ultra-low costs, and strong growth potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-500 text-white">✅ Proven Model</Badge>
              <Badge className="bg-blue-500 text-white">💰 50%+ Margins</Badge>
              <Badge className="bg-purple-500 text-white">🌱 Sustainable</Badge>
              <Badge className="bg-orange-500 text-white">📈 Scalable</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
