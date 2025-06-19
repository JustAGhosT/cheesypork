"use client"

import { useAuth } from "@/lib/auth-context"
import { AuthDialog } from "@/components/auth-dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Users,
  Calculator,
  Handshake,
  TrendingUp,
  BookOpen,
  MessageCircle,
  Award,
  Target,
  DollarSign,
  BarChart3,
  PieChart,
  Network,
  UserPlus,
  GraduationCap,
  FileText,
} from "lucide-react"
import { useState } from "react"

export default function CommunityPage() {
  const { user } = useAuth()
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("tools")

  if (!user) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-blue-50/30">
          <div className="container py-16">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm mb-6">
                <Shield className="mr-2 h-4 w-4 text-primary" />
                Members Only Community
              </div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-4xl">🐷</span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
                  Join The Cheesy Pig Community
                </h1>
                <span className="text-4xl">🧀</span>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Access exclusive farming tools, business opportunities, and connect with fellow sustainable farmers. Get
                the insights and resources you need to build a profitable, eco-friendly farming operation.
              </p>
              <Button
                size="lg"
                onClick={() => setAuthDialogOpen(true)}
                className="bg-primary hover:bg-secondary text-white"
              >
                <Shield className="mr-2 h-4 w-4" />
                Sign Up for Free Access
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
              <Card className="border-primary/20 text-center">
                <CardHeader>
                  <Calculator className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Exclusive Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access profit calculators, feed analyzers, and batch tracking tools
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 text-center">
                <CardHeader>
                  <Handshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Business Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Discover franchise opportunities and partnership programs
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Community Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Connect with 2,800+ farmers and share experiences</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Learning Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Access guides, courses, and expert knowledge</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="max-w-2xl mx-auto border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary">Ready to Transform Your Farm?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Join our community of successful farmers who've increased their profits by an average of 150% using
                    our sustainable farming methods and business tools.
                  </p>
                  <Button size="lg" onClick={() => setAuthDialogOpen(true)} className="bg-primary hover:bg-secondary">
                    Create Free Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
      </>
    )
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🐷</span>
          <h1 className="text-3xl font-bold text-primary">Community Dashboard</h1>
          <Badge className="bg-green-500 text-white">Member</Badge>
        </div>
        <p className="text-muted-foreground">
          Welcome back, {user.name}! Access your exclusive farming tools and connect with the community.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            Tools
          </TabsTrigger>
          <TabsTrigger value="network" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Network
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Profit Calculator</CardTitle>
                <CardDescription>Calculate your farm's true profitability</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">Launch Calculator</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Feed Analyzer</CardTitle>
                <CardDescription>Optimize your feed costs and nutrition</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Analyze Feed</Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <PieChart className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Batch Tracker</CardTitle>
                <CardDescription>Track your pig batches and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Track Batches</Button>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <Target className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Goal Planner</CardTitle>
                <CardDescription>Set and track your farming goals</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Plan Goals</Button>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>Market Insights</CardTitle>
                <CardDescription>Get pricing and market intelligence</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">View Insights</Button>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <Award className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Quality Tracker</CardTitle>
                <CardDescription>Monitor product quality metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-red-600 hover:bg-red-700">Track Quality</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="network" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-blue-600" />
                  <CardTitle>Community Stats</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Members</span>
                  <Badge className="bg-blue-100 text-blue-800">2,847</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Active This Week</span>
                  <Badge className="bg-green-100 text-green-800">1,234</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Success Stories</span>
                  <Badge className="bg-purple-100 text-purple-800">456</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Your Connections</span>
                  <Badge className="bg-amber-100 text-amber-800">23</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <CardTitle>Recent Discussions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">Market waste feeding tips</p>
                  <p className="text-xs text-muted-foreground">Started by John K. • 2 hours ago</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">Cheese making troubleshooting</p>
                  <p className="text-xs text-muted-foreground">Started by Sarah M. • 5 hours ago</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">Sustainable farming practices</p>
                  <p className="text-xs text-muted-foreground">Started by Mike R. • 1 day ago</p>
                </div>
                <Button className="w-full" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Discussions
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-purple-600" />
                <CardTitle>Connect with Farmers</CardTitle>
              </div>
              <CardDescription>Find and connect with farmers in your area or with similar interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-4">
                <Input placeholder="Search by location or interest..." className="flex-1" />
                <Button>Search</Button>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="p-3 border rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">JK</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">John Kruger</p>
                    <p className="text-sm text-muted-foreground">Pig farmer • Limpopo</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Connect
                  </Button>
                </div>
                <div className="p-3 border rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">SM</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Sarah Mthembu</p>
                    <p className="text-sm text-muted-foreground">Cheese maker • KZN</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <CardTitle>Learning Courses</CardTitle>
                </div>
                <CardDescription>Comprehensive courses to improve your farming skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">Sustainable Pig Farming 101</p>
                    <Badge className="bg-green-100 text-green-800">Free</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Learn the basics of sustainable pig farming</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">75% complete</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">Artisan Cheese Making</p>
                    <Badge className="bg-blue-100 text-blue-800">Premium</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Master the art of cheese making</p>
                  <Button size="sm" className="w-full">
                    Start Course
                  </Button>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">Farm Business Management</p>
                    <Badge className="bg-purple-100 text-purple-800">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Build a profitable farming business</p>
                  <Button size="sm" className="w-full" variant="outline">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  <CardTitle>Resource Library</CardTitle>
                </div>
                <CardDescription>Guides, templates, and tools for your farm</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">Feed Cost Calculator Template</p>
                  <p className="text-sm text-muted-foreground">Excel template for tracking feed costs</p>
                  <Button size="sm" className="mt-2" variant="outline">
                    Download
                  </Button>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">Pig Health Monitoring Guide</p>
                  <p className="text-sm text-muted-foreground">Complete guide to pig health management</p>
                  <Button size="sm" className="mt-2" variant="outline">
                    View PDF
                  </Button>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">Market Waste Sourcing Contacts</p>
                  <p className="text-sm text-muted-foreground">Directory of waste suppliers by region</p>
                  <Button size="sm" className="mt-2" variant="outline">
                    Access List
                  </Button>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">Cheese Aging Chart</p>
                  <p className="text-sm text-muted-foreground">Reference chart for cheese aging times</p>
                  <Button size="sm" className="mt-2" variant="outline">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-600" />
                <CardTitle className="text-amber-800">🐷 Success Stories</CardTitle>
              </div>
              <CardDescription>Learn from fellow farmers who've transformed their operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-white rounded-lg border">
                  <p className="font-medium mb-2">"Increased profits by 180% in 8 months"</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Using the community tools and market waste feeding, I transformed my small operation into a thriving
                    business.
                  </p>
                  <p className="text-xs text-amber-600">- Thabo M., Gauteng</p>
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <p className="font-medium mb-2">"From hobby to full-time cheese business"</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    The cheese making course and community support helped me launch my artisan cheese brand.
                  </p>
                  <p className="text-xs text-amber-600">- Lisa K., Western Cape</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
