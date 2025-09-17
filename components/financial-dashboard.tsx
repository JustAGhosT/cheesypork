"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText } from "lucide-react"

// Import modularized components
import KeyMetrics from "./financial/key-metrics"
import ExpensesTab from "./financial/expenses-tab"
import LaborTab from "./financial/labor-tab"
import TrendsTab from "./financial/trends-tab"

export default function FinancialDashboard() {
  const [selectedMonth, setSelectedMonth] = React.useState("current")

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-amber-50/50 to-orange-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Financial Dashboard</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive expense tracking and financial analysis for The Cheesy Pig
          </p>
        </div>

        {/* Key Metrics Component */}
        <KeyMetrics />

        <Tabs defaultValue="expenses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="expenses">Expense Breakdown</TabsTrigger>
            <TabsTrigger value="labor">Labor Analysis</TabsTrigger>
            <TabsTrigger value="trends">Monthly Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="expenses" className="space-y-6">
            <ExpensesTab />
          </TabsContent>

          <TabsContent value="labor" className="space-y-6">
            <LaborTab />
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <TrendsTab />
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-secondary">
            <FileText className="mr-2 h-4 w-4" />
            Download Full Financial Report
          </Button>
        </div>
      </div>
    </section>
  )
}