"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CheckCircle, AlertCircle } from "lucide-react"
import { monthlyExpenses } from "./expense-data"

export default function LaborTab() {
  return (
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
                <span className="font-medium">R{monthlyExpenses.laborCosts.fullTimeSalary}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-medium">Total Full-Time:</span>
                <span className="font-bold">
                  R
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
                <span className="font-medium">R{monthlyExpenses.laborCosts.partTimeSalary}</span>
              </div>
              <div className="flex justify-between">
                <span>Calculated at ⅓ cost:</span>
                <span className="font-medium">
                  R{(monthlyExpenses.laborCosts.partTimeSalary / 3).toFixed(0)}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-medium">Total Part-Time:</span>
                <span className="font-bold">
                  R
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
                R
                {(
                  monthlyExpenses.laborCosts.fullTimeWorkers * monthlyExpenses.laborCosts.fullTimeSalary
                ).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Part-Time Labor Cost (⅓):</span>
              <span>
                R
                {(
                  (monthlyExpenses.laborCosts.partTimeWorkers * monthlyExpenses.laborCosts.partTimeSalary) /
                  3
                ).toFixed(0)}
              </span>
            </div>
            <div className="flex justify-between border-t pt-2 font-bold text-lg">
              <span>Total Monthly Labor Cost:</span>
              <span className="text-primary">
                R{monthlyExpenses.laborCosts.totalLaborCost.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              * Part-time worker cost calculated at 1/3 of full salary as per 1⅓ laborer cost methodology
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}