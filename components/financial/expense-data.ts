// Monthly expense data with 1 1/3rd laborer cost calculation
export const monthlyExpenses = {
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

export const expenseBreakdown = [
  {
    category: "Labor Costs",
    amount: monthlyExpenses.laborCosts.totalLaborCost,
    percentage: 35.2,
    description: "3 full-time + 1/3 part-time workers",
    color: "bg-red-500",
    icon: "Users",
  },
  {
    category: "Feed & Supplies",
    amount: 2800,
    percentage: 24.1,
    description: "Organic feed, bedding, supplements",
    color: "bg-orange-500",
    icon: "PiggyBank",
  },
  {
    category: "Utilities & Operations",
    amount: 2770,
    percentage: 23.8,
    description: "Power, water, maintenance, transport",
    color: "bg-yellow-500",
    icon: "Calculator",
  },
  {
    category: "Professional Services",
    amount: 1180,
    percentage: 10.1,
    description: "Veterinary, insurance, permits",
    color: "bg-green-500",
    icon: "FileText",
  },
  {
    category: "Marketing & Misc",
    amount: 780,
    percentage: 6.8,
    description: "Advertising, licenses, other costs",
    color: "bg-blue-500",
    icon: "TrendingUp",
  },
]

// Helper function to calculate total expenses
export const calculateTotalExpenses = () => {
  return (
    monthlyExpenses.laborCosts.totalLaborCost +
    monthlyExpenses.operatingExpenses.reduce((sum, expense) => sum + expense.amount, 0)
  )
}

// Helper function to calculate net profit
export const calculateNetProfit = () => {
  const totalExpenses = calculateTotalExpenses()
  return monthlyExpenses.revenue.total - totalExpenses
}

// Helper function to calculate profit margin
export const calculateProfitMargin = () => {
  const netProfit = calculateNetProfit()
  return ((netProfit / monthlyExpenses.revenue.total) * 100).toFixed(1)
}