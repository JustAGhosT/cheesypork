"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChefHat, Droplets, Flame, Filter, Package, CheckCircle, Users, BookOpen, Award } from "lucide-react"
import { useState } from "react"

const ProcessCard = ({
  icon: Icon,
  title,
  description,
  keyPoints,
  color,
}: {
  icon: any
  title: string
  description: string
  keyPoints: string[]
  color: string
}) => (
  <Card className={`border-2 hover:shadow-lg transition-all duration-300 ${color}`}>
    <CardHeader className="text-center">
      <div className="mx-auto mb-4 p-3 rounded-full bg-white shadow-md w-fit">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        {keyPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{point}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

const QualityStandard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: any
}) => (
  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-primary/20">
    <div className="p-2 bg-primary/10 rounded-lg">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h4 className="font-semibold text-primary mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
)

export default function CheseMakingProcessPage() {
  const [activeTab, setActiveTab] = useState("process")

  const processSteps = [
    {
      icon: Droplets,
      title: "Fresh Milk Collection",
      description: "Quality starts with premium goat milk sourced from our healthy, grass-fed goats.",
      keyPoints: [
        "Milk collected within hours of milking",
        "Filtered to remove impurities",
        "Temperature and quality tested",
        "Only the freshest milk makes the cut",
      ],
      color: "border-blue-200 bg-blue-50/50",
    },
    {
      icon: Flame,
      title: "Gentle Heating Process",
      description: "Carefully controlled heating preserves the milk's natural flavors and nutrients.",
      keyPoints: [
        "Gradual heating prevents scorching",
        "Constant stirring ensures even temperature",
        "Precise temperature monitoring",
        "Maintains milk's natural properties",
      ],
      color: "border-orange-200 bg-orange-50/50",
    },
    {
      icon: ChefHat,
      title: "Natural Coagulation",
      description: "Fresh lemon juice creates the perfect environment for natural curd formation.",
      keyPoints: [
        "Only natural acids used",
        "Immediate curd formation",
        "Gentle process preserves texture",
        "No artificial additives",
      ],
      color: "border-yellow-200 bg-yellow-50/50",
    },
    {
      icon: Filter,
      title: "Expert Straining",
      description: "Traditional techniques separate curds from whey for optimal texture.",
      keyPoints: [
        "Fine cheesecloth straining",
        "Gravity-assisted draining",
        "Texture monitoring throughout",
        "Whey saved for other uses",
      ],
      color: "border-green-200 bg-green-50/50",
    },
    {
      icon: Package,
      title: "Fresh Cheese Ready",
      description: "Premium goat cheese ready for immediate use in our artisan sausages.",
      keyPoints: [
        "Perfect creamy consistency",
        "Optimal flavor profile",
        "Ready for sausage stuffing",
        "Same-day freshness guaranteed",
      ],
      color: "border-purple-200 bg-purple-50/50",
    },
  ]

  const qualityStandards = [
    {
      title: "Artisan Craftsmanship",
      description: "Every batch is hand-crafted using traditional methods passed down through generations.",
      icon: Award,
    },
    {
      title: "Quality Control",
      description: "Multiple quality checkpoints ensure consistent texture, flavor, and safety standards.",
      icon: CheckCircle,
    },
    {
      title: "Fresh Ingredients",
      description: "Only the freshest goat milk and natural ingredients are used in our cheese-making process.",
      icon: Droplets,
    },
    {
      title: "Same-Day Production",
      description: "From milk to finished cheese in the same day, ensuring maximum freshness and flavor.",
      icon: Package,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-orange-50/30">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm mb-8">
            <ChefHat className="mr-2 h-5 w-5 text-primary" />
            Artisan Cheese Making Excellence
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-primary mb-6">
            Our Cheese Making
            <br />
            <span className="text-secondary">Artisan Process</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover the traditional craftsmanship behind our premium goat cheese. From farm-fresh milk to creamy
            perfection, every step is carefully executed to create the exceptional cheese that makes our pork sausages
            truly special.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="process">The Process</TabsTrigger>
            <TabsTrigger value="quality">Quality Standards</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="process" className="space-y-12">
            {/* Process Overview */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Five Steps to Perfection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our time-tested process transforms fresh goat milk into premium cheese using traditional artisan
                methods.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -top-4 -left-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10">
                    {index + 1}
                  </div>
                  <ProcessCard {...step} />
                </div>
              ))}
            </div>

            {/* Process Flow */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">From Milk to Cheese</CardTitle>
                <CardDescription className="text-lg">
                  Our streamlined process ensures consistent quality and exceptional flavor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🐐</div>
                    <div className="font-semibold text-primary">Fresh Milk</div>
                    <div className="text-sm text-muted-foreground">Premium Quality</div>
                  </div>
                  <div className="text-2xl text-primary">→</div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔥</div>
                    <div className="font-semibold text-primary">Gentle Heat</div>
                    <div className="text-sm text-muted-foreground">Controlled Process</div>
                  </div>
                  <div className="text-2xl text-primary">→</div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🧀</div>
                    <div className="font-semibold text-primary">Fresh Cheese</div>
                    <div className="text-sm text-muted-foreground">Same Day Ready</div>
                  </div>
                  <div className="text-2xl text-primary">→</div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌭</div>
                    <div className="font-semibold text-primary">Stuffed Sausages</div>
                    <div className="text-sm text-muted-foreground">Premium Product</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quality" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Quality Promise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every batch meets our rigorous standards for taste, texture, and safety.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {qualityStandards.map((standard, index) => (
                <QualityStandard key={index} {...standard} />
              ))}
            </div>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Quality Certifications & Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-green-700">Natural Ingredients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Same Day</div>
                    <div className="text-sm text-green-700">Fresh Production</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">Artisan</div>
                    <div className="text-sm text-green-700">Hand-Crafted</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Join Our Artisan Community</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with fellow cheese makers, share techniques, and learn from our master craftsmen.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center border-primary/20">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Master Classes</CardTitle>
                  <CardDescription>Learn hands-on cheese making from our expert craftsmen</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Join Classes</Button>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Recipe Library</CardTitle>
                  <CardDescription>Access our collection of traditional and innovative recipes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Browse Recipes
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Certification</CardTitle>
                  <CardDescription>Earn your artisan cheese making certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Get Certified
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Ready to Start Your Cheese Making Journey?</CardTitle>
                <CardDescription className="text-lg">
                  Join our community of passionate artisan cheese makers today
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Join Community
                  </Button>
                  <p className="text-sm text-muted-foreground">Free membership • Expert guidance • Exclusive recipes</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
