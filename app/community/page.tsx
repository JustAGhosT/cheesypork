"use client"

import { useAuth } from "@/lib/auth-context"
import CommunityDashboard from "@/components/community-dashboard"
import { AuthDialog } from "@/components/auth-dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Calculator, Handshake } from "lucide-react"
import { useState } from "react"

export default function CommunityPage() {
  const { user } = useAuth()
  const [authDialogOpen, setAuthDialogOpen] = useState(false)

  if (user) {
    return <CommunityDashboard />
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-blue-50/30">
        <div className="container py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm mb-6">
              <Shield className="mr-2 h-4 w-4 text-primary" />
              Members Only Community
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary mb-6">
              Join The Cheesy Pig Community
            </h1>
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
