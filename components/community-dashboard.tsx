"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth-context"
import {
  Calculator,
  TrendingUp,
  Users,
  Handshake,
  BookOpen,
  MessageSquare,
  Calendar,
  Award,
  Target,
  BarChart3,
  PiggyBank,
  Leaf,
  Globe,
  Star,
  ArrowRight,
  Plus,
  Settings,
  Bell,
  Download,
  Share2,
} from "lucide-react"

const communityTools = [
  {
    id: "profit-calculator",
    title: "Pig Farming Profit Calculator",
    description: "Calculate ROI, breakeven points, and profit margins for your pig farming operation",
    icon: Calculator,
    category: "Financial Tools",
    status: "Available",
    users: 1247,
    rating: 4.8,
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
  },
  {
    id: "feed-analyzer",
    title: "Alternative Feed Cost Analyzer",
    description: "Compare traditional vs market waste feeding costs and environmental impact",
    icon: Leaf,
    category: "Sustainability",
    status: "Beta",
    users: 892,
    rating: 4.6,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    id: "batch-tracker",
    title: "Batch Yield Tracker",
    description: "Track weights, products, and profits from every slaughter cycle",
    icon: BarChart3,
    category: "Operations",
    status: "Available",
    users: 634,
    rating: 4.7,
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    id: "market-data",
    title: "Local Market Price Tracker",
    description: "Real-time pricing data and trends for pork products in your area",
    icon: TrendingUp,
    category: "Market Intelligence",
    status: "Coming Soon",
    users: 0,
    rating: 0,
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
  },
  {
    id: "partnership-matcher",
    title: "Farm Partnership Matcher",
    description: "Connect with potential business partners and investors in your region",
    icon: Handshake,
    category: "Networking",
    status: "Available",
    users: 423,
    rating: 4.5,
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-600",
  },
  {
    id: "waste-sourcing",
    title: "Market Waste Sourcing Network",
    description: "Find local markets and vendors willing to provide free produce waste",
    icon: Globe,
    category: "Sourcing",
    status: "Beta",
    users: 789,
    rating: 4.4,
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600",
  },
]

const businessOpportunities = [
  {
    id: "cheese-sausage-franchise",
    title: "Goat Cheese Sausage Franchise",
    description: "License our proven goat cheese sausage production method for your region",
    investment: "R15,000 - R50,000",
    roi: "150-300%",
    timeframe: "3-6 months",
    status: "Open",
    applicants: 23,
    icon: "🧀🌭",
  },
  {
    id: "waste-collection-partnership",
    title: "Market Waste Collection Partnership",
    description: "Partner with us to establish waste collection routes in new areas",
    investment: "R5,000 - R20,000",
    roi: "200-400%",
    timeframe: "1-3 months",
    status: "Open",
    applicants: 45,
    icon: "♻️🚛",
  },
  {
    id: "processing-facility",
    title: "Regional Processing Facility",
    description: "Establish a processing facility to serve multiple small-scale farmers",
    investment: "R100,000 - R500,000",
    roi: "100-200%",
    timeframe: "6-12 months",
    status: "Planning",
    applicants: 8,
    icon: "🏭🥩",
  },
  {
    id: "feed-supply-chain",
    title: "Alternative Feed Supply Chain",
    description: "Create a network to supply market waste to pig farmers across provinces",
    investment: "R25,000 - R100,000",
    roi: "120-250%",
    timeframe: "4-8 months",
    status: "Open",
    applicants: 34,
    icon: "🌾🚚",
  },
]

const communityStats = [
  { label: "Active Members", value: "2,847", icon: Users, color: "text-blue-600" },
  { label: "Tools Used", value: "15,234", icon: Calculator, color: "text-green-600" },
  { label: "Partnerships Formed", value: "156", icon: Handshake, color: "text-purple-600" },
  { label: "Total Savings", value: "R2.3M", icon: PiggyBank, color: "text-orange-600" },
]

const recentActivity = [
  {
    user: "Pieter K.",
    action: "used Profit Calculator",
    result: "Projected 180% ROI",
    time: "2 hours ago",
    avatar: "PK",
  },
  {
    user: "Maria L.",
    action: "joined Waste Sourcing Network",
    result: "Found 3 local suppliers",
    time: "4 hours ago",
    avatar: "ML",
  },
  {
    user: "Johan S.",
    action: "applied for Cheese Sausage Franchise",
    result: "Application under review",
    time: "6 hours ago",
    avatar: "JS",
  },
  {
    user: "Sarah M.",
    action: "completed Batch Tracking",
    result: "23.6kg average yield",
    time: "8 hours ago",
    avatar: "SM",
  },
]

export default function CommunityDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = React.useState("tools")

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-blue-50/30">
      <div className="container py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16 border-2 border-primary/20">
                <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-lg">
                  {user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-primary">Welcome back, {user?.name?.split(" ")[0]}!</h1>
                <p className="text-muted-foreground">
                  {user?.farmType} • {user?.location} • Member since{" "}
                  {new Date(user?.memberSince || "").toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>

          {/* Community Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            {communityStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-primary/20">
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      </div>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tools">Farming Tools</TabsTrigger>
            <TabsTrigger value="opportunities">Business Opportunities</TabsTrigger>
            <TabsTrigger value="network">Community Network</TabsTrigger>
            <TabsTrigger value="resources">Learning Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-primary">Exclusive Farming Tools</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Request New Tool
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communityTools.map((tool) => {
                const Icon = tool.icon
                return (
                  <Card key={tool.id} className={`${tool.color} hover:shadow-lg transition-shadow`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Icon className={`h-8 w-8 ${tool.iconColor}`} />
                        <Badge
                          variant={
                            tool.status === "Available" ? "default" : tool.status === "Beta" ? "secondary" : "outline"
                          }
                        >
                          {tool.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {tool.users}
                          </span>
                          {tool.rating > 0 && (
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                              {tool.rating}
                            </span>
                          )}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                      <Button
                        className="w-full"
                        disabled={tool.status === "Coming Soon"}
                        variant={tool.status === "Available" ? "default" : "outline"}
                      >
                        {tool.status === "Coming Soon" ? "Coming Soon" : "Launch Tool"}
                        {tool.status !== "Coming Soon" && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-primary">Business Opportunities</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Submit Opportunity
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {businessOpportunities.map((opportunity) => (
                <Card key={opportunity.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl">{opportunity.icon}</div>
                      <Badge variant={opportunity.status === "Open" ? "default" : "secondary"}>
                        {opportunity.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    <CardDescription>{opportunity.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong>Investment:</strong>
                        <p className="text-muted-foreground">{opportunity.investment}</p>
                      </div>
                      <div>
                        <strong>ROI:</strong>
                        <p className="text-green-600 font-medium">{opportunity.roi}</p>
                      </div>
                      <div>
                        <strong>Timeline:</strong>
                        <p className="text-muted-foreground">{opportunity.timeframe}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{opportunity.applicants} applicants</span>
                      <Button size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="network" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                      Recent Community Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary/10 text-primary text-sm">
                            {activity.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <strong>{activity.user}</strong> {activity.action}
                          </p>
                          <p className="text-xs text-green-600">{activity.result}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Start Discussion
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Find Partners
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Success Story
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Community Spotlight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏆</div>
                      <h4 className="font-semibold">Farmer of the Month</h4>
                      <p className="text-sm text-muted-foreground">Robson M.</p>
                      <p className="text-xs mt-2">Achieved 150% ROI using community tools</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Learning Resources</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-primary/20">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Sustainable Farming Guide</CardTitle>
                  <CardDescription>Complete guide to market waste utilization</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <Award className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Financial Planning Course</CardTitle>
                  <CardDescription>Master farm business financial management</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Start Course
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <Target className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Partnership Strategies</CardTitle>
                  <CardDescription>Build successful farming partnerships</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
