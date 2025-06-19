import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Opportunities",
  description: "Explore business opportunities with our platform.",
}

const OpportunitiesPage = () => {
  return (
    <div className="container relative py-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Business Opportunities</h2>
          <p className="text-muted-foreground">Explore various opportunities to partner with us.</p>
        </div>
      </div>
      <div className="grid gap-6 mt-8">
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold">Franchise Opportunity</h3>
          <p className="text-muted-foreground mb-6">
            Join our proven sustainable farming model and bring The Cheesy Pig concept to communities across South
            Africa.
          </p>
          <Link href="/contact" className={cn(buttonVariants())}>
            Learn More
          </Link>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold">Supplier Partnership</h3>
          <p className="text-muted-foreground mb-4">
            Partner with us to supply fresh market waste from your area in Limpopo or neighboring provinces.
          </p>
          <Link href="/contact" className={cn(buttonVariants())}>
            Become a Supplier
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OpportunitiesPage
