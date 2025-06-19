"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  PiggyBank,
  Calculator,
  FileText,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

// Monthly expense data with 1 1/3rd laborer cost calculation
const monthlyExpenses = {
  laborCosts: {
    fullTimeWorkers: 3,
    partTimeWorkers: 1,
    fullTimeSalary: 3200, // per worker per month
    partTimeSalary: 1200, // per worker per month
    get totalLaborCost() {
      // 1 1/3rd laborer cost calculation: 3 full-time + 1/3 of part-time
      const fullTimeCost = this.fullTimeWorkers * this.fullTimeSalary
      const partTimeCost = (this.partTimeWorkers * this.partTimeSalary) / 3
      return fullTimeCost + partTimeCost
    },
  },
  operatingExpenses: [
    { category: "Feed & Supplies", amount: 2800, icon: "🌾", trend: "up", change: 5.2 },
    { category: "Utilities", amount: 850, icon: "⚡", trend: "down", change: -2.1 },
    { category: "Veterinary Care", amount: 650, icon: "🏥", trend: "stable", change: 0.5 },
    { category: "Equipment Maintenance", amount: 420, icon: "🔧", trend: "up", change: 8.3 },
    { category: "Insurance", amount: 380, icon: "🛡️", trend: "stable", change: 0 },
    { category: "Transportation", amount: 320, icon: "🚛", trend: "up", change: 3.7 },
    { category: "Marketing", amount: 280, icon: "📢", trend: "down", change: -1.5 },
    { category: "Licenses & Permits", amount: 150, icon: "📋", trend: "stable", change: 0 },
  ],
  revenue: {
    restaurant: 18500,
    farmTours: 2200,
    retailSales: 3800,
    catering: 4100,
    total: 28600,
  },
}

const expenseBreakdown = [
  {
    category: "Labor Costs",
    amount: monthlyExpenses.laborCosts.totalLaborCost,
    percentage: 35.2,
    description: "3 full-time + 1/3 part-time workers",
    color: "bg-red-500",
    icon: Users,
  },
  {
    category: "Feed & Supplies",
    amount: 2800,
    percentage: 24.1,
    description: "Organic feed, bedding, supplements",
    color: "bg-orange-500",
    icon: PiggyBank,
  },
  {
    category: "Utilities & Operations",
    amount: 2770,
    percentage: 23.8,
    description: "Power, water, maintenance, transport",
    color: "bg-yellow-500",
    icon: Calculator,
  },
  {
    category: "Professional Services",
    amount: 1180,
    percentage: 10.1,
    description: "Veterinary, insurance, permits",
    color: "bg-green-500",
    icon: FileText,
  },
  {
    category: "Marketing & Misc",
    amount: 780,
    percentage: 6.8,
    description: "Advertising, licenses, other costs",
    color: "bg-blue-500",
    icon: TrendingUp,
  },
]

export default function FinancialDashboard() {
  const [selectedMonth, setSelectedMonth] = React.useState("current")

  const totalExpenses =
    monthlyExpenses.laborCosts.totalLaborCost +
    monthlyExpenses.operatingExpenses.reduce((sum, expense) => sum + expense.amount, 0)

  const netProfit = monthlyExpenses.revenue.total - totalExpenses
  const profitMargin = ((netProfit / monthlyExpenses.revenue.total) * 100).toFixed(1)

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-amber-50/50 to-orange-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Financial Dashboard</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive expense tracking and financial analysis for The Cheesy Pig
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${monthlyExpenses.revenue.total.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+3.2% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">${netProfit.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Margin: {profitMargin}%</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Labor Cost</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">
                ${monthlyExpenses.laborCosts.totalLaborCost.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">1⅓ laborer calculation</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="expenses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="expenses">Expense Breakdown</TabsTrigger>
            <TabsTrigger value="labor">Labor Analysis</TabsTrigger>
            <TabsTrigger value="trends">Monthly Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="expenses" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Expense Categories */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-primary" />
                    Expense Categories
                  </CardTitle>
                  <CardDescription>Monthly breakdown by category</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {expenseBreakdown.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                          <Icon className="h-4 w-4 text-primary" />
                          <div>
                            <p className="font-medium">{category.category}</p>
                            <p className="text-xs text-muted-foreground">{category.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${category.amount.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">{category.percentage}%</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Operating Expenses Detail */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Operating Expenses
                  </CardTitle>
                  <CardDescription>Detailed monthly operating costs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {monthlyExpenses.operatingExpenses.map((expense, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{expense.icon}</span>
                        <span className="font-medium">{expense.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold">${expense.amount}</span>
                        <Badge
                          variant={
                            expense.trend === "up" ? "destructive" : expense.trend === "down" ? "default" : "secondary"
                          }
                          className="text-xs"
                        >
                          {expense.trend === "up" ? "↗" : expense.trend === "down" ? "↘" : "→"}{" "}
                          {Math.abs(expense.change)}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="labor" className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Labor Cost Analysis (1⅓ Calculation)
                </CardTitle>
                <CardDescription>Detailed breakdown of labor expenses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Full-Time Workers
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Number of workers:</span>
                        <span className="font-medium">{monthlyExpenses.laborCosts.fullTimeWorkers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly salary each:</span>
                        <span className="font-medium">${monthlyExpenses.laborCosts.fullTimeSalary}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-medium">Total Full-Time:</span>
                        <span className="font-bold">
                          $
                          {(
                            monthlyExpenses.laborCosts.fullTimeWorkers * monthlyExpenses.laborCosts.fullTimeSalary
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2 text-orange-600" />
                      Part-Time Workers (⅓ Cost)
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Number of workers:</span>
                        <span className="font-medium">{monthlyExpenses.laborCosts.partTimeWorkers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly salary each:</span>
                        <span className="font-medium">${monthlyExpenses.laborCosts.partTimeSalary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Calculated at ⅓ cost:</span>
                        <span className="font-medium">
                          ${(monthlyExpenses.laborCosts.partTimeSalary / 3).toFixed(0)}
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-medium">Total Part-Time:</span>
                        <span className="font-bold">
                          $
                          {(
                            (monthlyExpenses.laborCosts.partTimeWorkers * monthlyExpenses.laborCosts.partTimeSalary) /
                            3
                          ).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-primary">Total Labor Cost Calculation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Full-Time Labor Cost:</span>
                      <span>
                        $
                        {(
                          monthlyExpenses.laborCosts.fullTimeWorkers * monthlyExpenses.laborCosts.fullTimeSalary
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Part-Time Labor Cost (⅓):</span>
                      <span>
                        $
                        {(
                          (monthlyExpenses.laborCosts.partTimeWorkers * monthlyExpenses.laborCosts.partTimeSalary) /
                          3
                        ).toFixed(0)}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-bold text-lg">
                      <span>Total Monthly Labor Cost:</span>
                      <span className="text-primary">
                        ${monthlyExpenses.laborCosts.totalLaborCost.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      * Part-time worker cost calculated at 1/3 of full salary as per 1⅓ laborer cost methodology
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Revenue Streams</CardTitle>
                  <CardDescription>Monthly revenue by source</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <span className="mr-2">🍽️</span>Restaurant Sales
                      </span>
                      <span className="font-bold">${monthlyExpenses.revenue.restaurant.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <span className="mr-2">🚜</span>Farm Tours
                      </span>
                      <span className="font-bold">${monthlyExpenses.revenue.farmTours.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <span className="mr-2">🛒</span>Retail Sales
                      </span>
                      <span className="font-bold">${monthlyExpenses.revenue.retailSales.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <span className="mr-2">🎉</span>Catering
                      </span>
                      <span className="font-bold">${monthlyExpenses.revenue.catering.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center font-bold text-lg">
                      <span>Total Revenue</span>
                      <span className="text-green-600">${monthlyExpenses.revenue.total.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Financial Health</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Gross Revenue</span>
                      <span className="font-bold text-green-600">
                        ${monthlyExpenses.revenue.total.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total Expenses</span>
                      <span className="font-bold text-red-600">${totalExpenses.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Net Profit</span>
                      <span className="font-bold text-primary">${netProfit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Profit Margin</span>
                      <span className="font-bold">{profitMargin}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Labor Cost %</span>
                      <span className="font-bold">
                        {((monthlyExpenses.laborCosts.totalLaborCost / monthlyExpenses.revenue.total) * 100).toFixed(1)}
                        %
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">
                      ✅ Healthy profit margin above industry standard (15-20%)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
