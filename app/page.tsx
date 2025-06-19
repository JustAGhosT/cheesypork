import GoatCheeseSausageHero from "@/components/goat-cheese-sausage-hero"
import CurrentStockInventory from "@/components/current-stock-inventory"
import PreorderBenefits from "@/components/preorder-benefits"
import OurStorySection from "@/components/our-story-section"
import TestimonialsSection from "@/components/testimonials-section"
import PlatformPreview from "@/components/platform-preview"
import FinancialGuides from "@/components/financial-guides"
import ContactCTA from "@/components/contact-cta"
import FinancialDashboard from "@/components/financial-dashboard"
import RobsonBusinessPlan from "@/components/robson-business-plan"
import InteractiveOrderSummary from "@/components/interactive-order-summary"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <GoatCheeseSausageHero />
      <CurrentStockInventory />
      <PreorderBenefits />
      <OurStorySection />
      <TestimonialsSection />
      <PlatformPreview />
      <FinancialGuides />
      <FinancialDashboard />
      <RobsonBusinessPlan />
      <InteractiveOrderSummary />
      <ContactCTA />
    </main>
  )
}
