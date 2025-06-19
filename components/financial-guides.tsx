"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Shield,
  TrendingUp,
  Phone,
  MessageCircle,
  FileText,
  Calculator,
  PiggyBank,
  Smartphone,
} from "lucide-react"

const bankingTips = [
  {
    icon: CheckCircle,
    title: "Successful Payments",
    description: "FNB APP PAYMENT FROM EBEN - R500.00",
    tip: "Always verify payment details before confirming transfers",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: AlertTriangle,
    title: "Declined Transactions",
    description: "DECLINED FOREIGN T - R8.00 fees",
    tip: "Check account balance and transaction limits to avoid fees",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Shield,
    title: "Schedule Alerts",
    description: "SCHEDMNT ALERT - R4.00",
    tip: "Set up SMS alerts to monitor all account activity",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: CreditCard,
    title: "Insufficient Funds",
    description: "NO FUNDS 1 ITEMS - R200.00",
    tip: "Maintain buffer balance to avoid overdraft fees",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

const paymentMethods = [
  {
    method: "EFT Bank Transfer",
    description: "Direct bank-to-bank transfer",
    fees: "Free (same bank) / R5-15 (other banks)",
    timeframe: "Instant - 24 hours",
    bestFor: "Large orders, bulk purchases",
    icon: "🏦",
  },
  {
    method: "FNB App Payment",
    description: "Mobile banking app transfer",
    fees: "Free - R5",
    timeframe: "Instant",
    bestFor: "Quick payments, regular customers",
    icon: "📱",
  },
  {
    method: "Cash on Delivery",
    description: "Pay when collecting products",
    fees: "No banking fees",
    timeframe: "Immediate",
    bestFor: "Local pickup, first-time customers",
    icon: "💰",
  },
  {
    method: "WhatsApp Pay",
    description: "Payment via WhatsApp Business",
    fees: "Varies by method",
    timeframe: "Instant",
    bestFor: "Convenient ordering and payment",
    icon: "💬",
  },
]

const farmBusinessTips = [
  {
    title: "Track Every Transaction",
    description: "Keep detailed records of all farm income and expenses",
    example: "R500 payment from Eben = 3.3kg cheese grillers sold",
    icon: FileText,
  },
  {
    title: "Avoid Unnecessary Fees",
    description: "Multiple R8 declined transaction fees add up quickly",
    example: "6 declined transactions = R48 in avoidable fees",
    icon: TrendingUp,
  },
  {
    title: "Set Up Payment Alerts",
    description: "R4 SMS alerts help you monitor cash flow in real-time",
    example: "Know immediately when customers pay for orders",
    icon: Smartphone,
  },
  {
    title: "Maintain Cash Buffer",
    description: "Avoid 'NO FUNDS' situations that cost R200+ in fees",
    example: "Keep R1,000 minimum balance for smooth operations",
    icon: PiggyBank,
  },
]

export default function FinancialGuides() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-blue-50/50 to-green-50/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">💡 Financial Guides</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Smart Banking for Farm Business
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn from real banking examples to optimize your farm business payments and avoid costly fees
          </p>
        </div>

        <Tabs defaultValue="banking" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="banking">Banking Basics</TabsTrigger>
            <TabsTrigger value="payments">Payment Methods</TabsTrigger>
            <TabsTrigger value="business">Business Tips</TabsTrigger>
            <TabsTrigger value="calculator">Fee Calculator</TabsTrigger>
          </TabsList>

          <TabsContent value="banking" className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Understanding Your Bank Statement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <img
                    src="/images/bank-statement-example.png"
                    alt="Bank statement example showing various transactions"
                    className="w-full rounded-lg border border-gray-200 shadow-sm"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Example bank statement showing common farm business transactions
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {bankingTips.map((tip, index) => {
                    const Icon = tip.icon
                    return (
                      <Card key={index} className={`${tip.bgColor} border-primary/20`}>
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <Icon className={`h-5 w-5 mt-1 ${tip.color}`} />
                            <div>
                              <h4 className="font-semibold text-primary mb-1">{tip.title}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{tip.description}</p>
                              <p className="text-xs font-medium">{tip.tip}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <span className="text-2xl mr-3">{method.icon}</span>
                      {method.method}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Fees:</strong>
                        <p className="text-muted-foreground">{method.fees}</p>
                      </div>
                      <div>
                        <strong>Time:</strong>
                        <p className="text-muted-foreground">{method.timeframe}</p>
                      </div>
                    </div>
                    <div>
                      <strong className="text-sm">Best for:</strong>
                      <p className="text-sm text-muted-foreground">{method.bestFor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">💡 Payment Recommendations for Farm Orders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🥓</div>
                    <strong>Small Orders (Under R500)</strong>
                    <p className="text-sm text-muted-foreground">Cash on pickup or FNB App</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🌭</div>
                    <strong>Medium Orders (R500-2000)</strong>
                    <p className="text-sm text-muted-foreground">EFT or WhatsApp Pay</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🐷</div>
                    <strong>Bulk Orders (R2000+)</strong>
                    <p className="text-sm text-muted-foreground">Bank transfer with confirmation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="business" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {farmBusinessTips.map((tip, index) => {
                const Icon = tip.icon
                return (
                  <Card key={index} className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Icon className="h-5 w-5 mr-2 text-primary" />
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground">{tip.description}</p>
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <strong className="text-primary text-sm">Example:</strong>
                        <p className="text-sm">{tip.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="border-primary/20 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">🎯 Monthly Financial Health Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-800">Income Tracking:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✅ Record all customer payments</li>
                      <li>✅ Track payment methods used</li>
                      <li>✅ Monitor seasonal trends</li>
                      <li>✅ Calculate profit margins</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-800">Expense Management:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✅ Review all bank fees</li>
                      <li>✅ Identify avoidable charges</li>
                      <li>✅ Set up account alerts</li>
                      <li>✅ Maintain cash buffer</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2 text-primary" />
                  Banking Fee Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-3">❌ Costly Mistakes to Avoid</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Declined foreign transaction (each):</span>
                      <span className="font-bold text-red-600">R8.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SMS alert (each):</span>
                      <span className="font-bold">R4.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insufficient funds fee:</span>
                      <span className="font-bold text-red-600">R200.00</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>Example monthly avoidable fees:</span>
                      <span className="font-bold text-red-600">R248.00</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">✅ Smart Banking Savings</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Use same-bank transfers:</span>
                      <span className="font-bold text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Maintain minimum balance:</span>
                      <span className="font-bold text-green-600">Avoid R200 fees</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Check balance before transactions:</span>
                      <span className="font-bold text-green-600">Avoid R8 fees</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>Monthly savings potential:</span>
                      <span className="font-bold text-green-600">R248.00+</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-3">📊 Farm Business Impact</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>R248 in monthly banking fees</strong> = 1.7kg of premium bacon lost to fees
                    </p>
                    <p>
                      <strong>R2,976 in annual fees</strong> = 20kg of cheese grillers lost to poor banking habits
                    </p>
                    <p className="text-blue-700 font-medium">Smart banking = More profit for your farm business! 🎯</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-primary">Need Help with Payments?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our team can help you set up the best payment method for your farm orders
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-secondary">
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Payment Help
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
