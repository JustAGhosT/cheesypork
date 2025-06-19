import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Clock, CheckCircle, ArrowRight } from "lucide-react"

const consultingServices = [
  {
    title: "Digital Transformation",
    description: "Complete digital transformation strategy and implementation",
    duration: "3-6 months",
    teamSize: "5-8 experts",
    price: "Starting at $50,000",
    features: [
      "Current state assessment",
      "Technology roadmap",
      "Implementation planning",
      "Change management",
      "Training and support",
    ],
  },
  {
    title: "Process Optimization",
    description: "Streamline operations and improve efficiency",
    duration: "2-4 months",
    teamSize: "3-5 experts",
    price: "Starting at $25,000",
    features: [
      "Process mapping",
      "Bottleneck identification",
      "Automation opportunities",
      "Performance metrics",
      "Continuous improvement",
    ],
  },
  {
    title: "Data Strategy",
    description: "Develop comprehensive data and analytics strategy",
    duration: "1-3 months",
    teamSize: "2-4 experts",
    price: "Starting at $15,000",
    features: [
      "Data audit",
      "Analytics framework",
      "Governance policies",
      "Tool recommendations",
      "Implementation support",
    ],
  },
]

export default function ConsultingPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Consulting Services</h1>
        <p className="text-muted-foreground">Expert guidance to transform your business operations</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {consultingServices.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    {service.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                    {service.teamSize}
                  </div>
                </div>

                <div className="text-2xl font-bold text-primary">{service.price}</div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">What's included:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Need a Custom Solution?</CardTitle>
            <CardDescription>
              Our consulting team can create a tailored approach for your specific needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg">Schedule a Consultation</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
