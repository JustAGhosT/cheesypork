"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, FileText, Users, PiggyBank, TrendingUp } from "lucide-react"
import { monthlyExpenses, expenseBreakdown } from "./expense-data"

// Map the icon names to actual components
const IconMap = {
  Users: Users,
  PiggyBank: PiggyBank,
  Calculator: Calculator,
  FileText: FileText,
  TrendingUp: TrendingUp
}

export default function ExpensesTab() {
  return (
    <div className="space-y-6">
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
              const IconComponent = IconMap[category.icon as keyof typeof IconMap]
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                    {IconComponent && <IconComponent className="h-4 w-4 text-primary" />}
                    <div>
                      <p className="font-medium">{category.category}</p>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">R{category.amount.toLocaleString()}</p>
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
                  <span className="font-bold">R{expense.amount}</span>
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
    </div>
  )
}