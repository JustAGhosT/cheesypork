"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote, TrendingUp, TrendingDown, Users } from "lucide-react"
import { monthlyExpenses, calculateTotalExpenses, calculateNetProfit, calculateProfitMargin } from "./expense-data"

export default function KeyMetrics() {
  const totalExpenses = calculateTotalExpenses()
  const netProfit = calculateNetProfit()
  const profitMargin = calculateProfitMargin()
  
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
      <Card className="border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <Banknote className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">R{monthlyExpenses.revenue.total.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">+12.5% from last month</p>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          <TrendingDown className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-600">R{totalExpenses.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">+3.2% from last month</p>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
          <TrendingUp className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">R{netProfit.toLocaleString()}</div>
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
            R{monthlyExpenses.laborCosts.totalLaborCost.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">1⅓ laborer calculation</p>
        </CardContent>
      </Card>
    </div>
  )
}