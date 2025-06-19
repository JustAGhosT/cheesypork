import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Zap, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions that drive real business value.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Your success is our success. We're committed to helping you achieve your business goals.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from product development to customer service.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're building solutions that make a positive impact on businesses worldwide.",
  },
]

const milestones = [
  { year: "2018", event: "Company founded with a vision to transform business operations" },
  { year: "2019", event: "Launched our first product and acquired 100+ customers" },
  { year: "2020", event: "Expanded globally and reached 1,000+ customers" },
  { year: "2021", event: "Raised Series A funding and launched enterprise features" },
  { year: "2022", event: "Achieved 10,000+ customers and opened international offices" },
  { year: "2023", event: "Launched AI-powered features and reached 50,000+ users" },
  { year: "2024", event: "Became industry leader with 100,000+ users worldwide" },
]

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About InnovatePro</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to empower businesses with intelligent solutions that drive growth, efficiency, and
          innovation in the digital age.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2018 by a team of experienced entrepreneurs and technologists, InnovatePro was born from the
              frustration of seeing businesses struggle with outdated, disconnected systems that hindered their growth.
            </p>
            <p>
              We believed there had to be a better way – a comprehensive platform that could adapt to any business need
              while remaining intuitive and powerful. Today, we're proud to serve over 100,000 users worldwide, helping
              them streamline operations and accelerate growth.
            </p>
            <p>
              Our commitment to innovation, customer success, and excellence has made us a trusted partner for
              businesses of all sizes, from startups to Fortune 500 companies.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-lg italic mb-4">
                "To democratize access to enterprise-grade business tools and empower every organization to reach its
                full potential through intelligent automation and data-driven insights."
              </blockquote>
              <div className="flex flex-wrap gap-2">
                <Badge>Innovation</Badge>
                <Badge>Growth</Badge>
                <Badge>Efficiency</Badge>
                <Badge>Scalability</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge variant="outline">{milestone.year}</Badge>
                </div>
                <div className="ml-6 flex-1">
                  <div className="relative">
                    <div className="absolute -left-3 top-2 h-2 w-2 rounded-full bg-primary"></div>
                    {index < milestones.length - 1 && (
                      <div className="absolute -left-2.5 top-4 h-12 w-0.5 bg-border"></div>
                    )}
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Ready to Join Our Journey?</CardTitle>
            <CardDescription>Be part of the next chapter in business transformation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/company/careers"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                View Careers
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contact Us
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
