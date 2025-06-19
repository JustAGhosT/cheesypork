import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center text-white mb-12">
          <div className="text-6xl mb-6">🐷📞</div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            Ready to Order Premium Pork?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to place your order or learn more about our sustainable farming practices. Fresh batches
            available every 4-6 months.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <CardTitle>Call Us Direct</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">(555) 123-PORK</p>
              <Button variant="secondary" className="w-full">
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-3" />
              <CardTitle>WhatsApp Order</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Quick & Easy Ordering</p>
              <Button variant="secondary" className="w-full">
                WhatsApp Us
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <CardTitle>Email Inquiry</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">info@belabelapork.co.za</p>
              <Button variant="secondary" className="w-full">
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">📍 Farm Location & Hours</h3>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 mt-0.5" />
              <div>
                <strong>Farm Address:</strong>
                <p>Bela Bela Area, Limpopo Province</p>
                <p className="text-xs opacity-75">Exact location shared upon order</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-4 w-4 mr-2 mt-0.5" />
              <div>
                <strong>Availability:</strong>
                <p>Orders: 24/7 via WhatsApp</p>
                <p>Pickup: By appointment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm opacity-75">
          🌟 Current batch: 117.9kg available • Next batch: March 2024 • 🏆 100% Customer Satisfaction
        </div>
      </div>
    </section>
  )
}
