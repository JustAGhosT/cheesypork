import type { Metadata } from "next"

import { CallToAction } from "@/components/call-to-action"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Section } from "@/components/section"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Learn about our commitment to sustainability.",
}

const features = [
  {
    title: "Waste Transformation",
    description: "Turning waste into valuable resources for a circular economy.",
    icon: "waste",
  },
  {
    title: "Environmental Stewardship",
    description: "Protecting and preserving our natural environment for future generations.",
    icon: "environment",
  },
  {
    title: "Community Engagement",
    description: "Empowering local communities through sustainable practices and education.",
    icon: "community",
  },
]

export default function SustainabilityPage() {
  return (
    <>
      <Section className="bg-secondary">
        <Shell>
          <div className="container grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="font-heading text-3xl sm:text-5xl">Our Commitment to Sustainability</h1>
              <p className="text-muted-foreground">
                We are dedicated to creating a sustainable future through innovative waste management and environmental
                stewardship in the Limpopo Province.
              </p>
              <CallToAction className="mt-6">Learn More</CallToAction>
            </div>
            <div className="relative">
              <img
                src="/images/sustainability-hero.jpg"
                alt="Sustainable Landscape"
                className="rounded-md object-cover sm:h-[350px] w-full"
              />
            </div>
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="container grid gap-10 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icons.waste className="h-4 w-4" />
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>{/* Additional content for each feature can be added here */}</CardContent>
              </Card>
            ))}
          </div>
        </Shell>
      </Section>

      <Section className="bg-secondary">
        <Shell>
          <div className="container grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-4">
              <h2 className="font-heading text-3xl sm:text-4xl">Transforming Waste into Opportunity</h2>
              <p className="text-muted-foreground mb-6">
                Every day, markets across Bela Bela and the greater Limpopo region generate tons of fresh produce waste.
                We're turning this waste into valuable compost and biogas, reducing landfill waste and creating
                renewable energy.
              </p>
              <p className="text-muted-foreground">
                Our innovative processes not only minimize environmental impact but also create economic opportunities
                for local communities.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/waste-transformation.jpg"
                alt="Waste Transformation Process"
                className="rounded-md object-cover sm:h-[350px] w-full"
              />
            </div>
          </div>
        </Shell>
      </Section>

      <Section>
        <Shell>
          <div className="container grid gap-10 md:grid-cols-2">
            <div className="relative">
              <img
                src="/images/environmental-impact.jpg"
                alt="Environmental Impact"
                className="rounded-md object-cover sm:h-[350px] w-full"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h2 className="font-heading text-3xl sm:text-4xl">Reducing Our Environmental Impact</h2>
              <p className="text-muted-foreground mb-6">
                We are committed to minimizing our environmental footprint through sustainable practices and responsible
                resource management.
              </p>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Reducing landfill waste by 50% through composting initiatives in Limpopo.</li>
                <li>Generating renewable energy from biogas, powering local businesses and homes.</li>
                <li>Conserving water resources through efficient irrigation techniques.</li>
              </ul>
            </div>
          </div>
        </Shell>
      </Section>
    </>
  )
}
