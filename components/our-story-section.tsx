import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, TrendingUp, Heart } from "lucide-react"

const storyHighlights = [
  {
    icon: Leaf,
    title: "Zero-Waste Feeding",
    description: "Our pigs are fed exclusively on fresh market produce that would otherwise go to waste",
    stat: "100% Market Waste",
    emoji: "🌱",
  },
  {
    icon: Users,
    title: "Family Partnership",
    description: "Hans, Robson, and Robson's Mom - three partners committed to sustainable farming",
    stat: "3-Way Partnership",
    emoji: "🤝",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Our first commercial slaughter yielded 117.9kg of premium products from 5 pigs",
    stat: "23.6kg per pig",
    emoji: "📈",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Supporting local markets while providing premium, affordable protein to families",
    stat: "Local First",
    emoji: "❤️",
  },
]

export default function OurStorySection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-green-50/50 to-amber-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Sustainable Story</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From market waste to premium meat - how we're revolutionizing sustainable farming in Bela Bela
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">From Waste to Premium Protein</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our journey started with a simple observation: tons of fresh produce go to waste at local markets every
                day, while commercial pig feed costs continue to rise. We saw an opportunity to solve both problems.
              </p>
              <p>
                Today, our heritage pigs thrive on fresh fruits, vegetables, and market surplus - creating premium meat
                while reducing environmental waste. This isn't just farming; it's a sustainable food system in action.
              </p>
              <p>
                Every kilogram of our pork represents rescued produce, reduced waste, and a commitment to ethical,
                sustainable agriculture that benefits our community and your family.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-green-100 text-green-800">🌱 Zero Commercial Feed</Badge>
              <Badge className="bg-blue-100 text-blue-800">♻️ Waste Reduction</Badge>
              <Badge className="bg-purple-100 text-purple-800">🏆 Premium Quality</Badge>
              <Badge className="bg-orange-100 text-orange-800">👨‍👩‍👧‍👦 Family Operation</Badge>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {storyHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card key={index} className="border-primary/20 wood-grain">
                  <CardHeader className="text-center pb-4">
                    <div className="text-3xl mb-2">{highlight.emoji}</div>
                    <CardTitle className="text-lg text-primary">{highlight.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {highlight.stat}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="bg-primary/10 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-primary mb-4">The Numbers Don't Lie</h3>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <div className="text-2xl font-bold text-primary">R0</div>
              <div className="text-sm text-muted-foreground">Feed Costs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">117.9kg</div>
              <div className="text-sm text-muted-foreground">First Batch Yield</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">R130-150</div>
              <div className="text-sm text-muted-foreground">Price per kg</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">150%</div>
              <div className="text-sm text-muted-foreground">ROI Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
