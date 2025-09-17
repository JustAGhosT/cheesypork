"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { monthlyExpenses, calculateTotalExpenses, calculateNetProfit, calculateProfitMargin } from "./expense-data"

export default function TrendsTab() {
  const totalExpenses = calculateTotalExpenses()
  const netProfit = calculateNetProfit()
  const profitMargin = calculateProfitMargin()

  return (
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
              <span className="font-bold">R{monthlyExpenses.revenue.restaurant.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <span className="mr-2">🚜</span>Farm Tours
              </span>
              <span className="font-bold">R{monthlyExpenses.revenue.farmTours.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <span className="mr-2">🛒</span>Retail Sales
              </span>
              <span className="font-bold">R{monthlyExpenses.revenue.retailSales.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <span className="mr-2">🎉</span>Catering
              </span>
              <span className="font-bold">R{monthlyExpenses.revenue.catering.toLocaleString()}</span>
            </div>
            <div className="border-t pt-3 flex justify-between items-center font-bold text-lg">
              <span>Total Revenue</span>
              <span className="text-green-600">R{monthlyExpenses.revenue.total.toLocaleString()}</span>
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
                R{monthlyExpenses.revenue.total.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total Expenses</span>
              <span className="font-bold text-red-600">R{totalExpenses.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Net Profit</span>
              <span className="font-bold text-primary">R{netProfit.toLocaleString()}</span>
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
  )
}