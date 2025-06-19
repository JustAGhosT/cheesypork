"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  ShoppingBag,
  Users,
  BookOpen,
  Settings,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Merge,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info, Download } from "lucide-react"

const currentPages = [
  { path: "/", title: "Homepage", status: "keep", category: "core" },
  { path: "/products", title: "Products Catalog", status: "keep", category: "shop" },
  { path: "/products/pork", title: "Pork Products", status: "redundant", category: "shop" },
  { path: "/products/cheese", title: "Cheese Products", status: "redundant", category: "shop" },
  { path: "/shop", title: "Shop Landing", status: "redundant", category: "shop" },
  { path: "/shop/pork", title: "Shop Pork", status: "redundant", category: "shop" },
  { path: "/shop/cheeses", title: "Shop Cheeses", status: "redundant", category: "shop" },
  { path: "/shop/gifts", title: "Gift Packages", status: "consolidate", category: "shop" },
  { path: "/bulk-orders", title: "Bulk Orders", status: "consolidate", category: "shop" },
  { path: "/about", title: "About Us", status: "keep", category: "core" },
  { path: "/contact", title: "Contact", status: "keep", category: "core" },
  { path: "/blog", title: "Blog Hub", status: "keep", category: "content" },
  { path: "/blog/market-waste-feed", title: "Market Waste Feed Guide", status: "keep", category: "content" },
  { path: "/blog/farm-profitability", title: "Farm Profitability", status: "keep", category: "content" },
  { path: "/blog/farm-to-braai", title: "Farm to Braai", status: "keep", category: "content" },
  { path: "/platform/sustainability", title: "Sustainability", status: "keep", category: "platform" },
  { path: "/platform/opportunities", title: "Business Opportunities", status: "keep", category: "platform" },
  { path: "/platform/cheese-making-process", title: "Cheese Making Process", status: "keep", category: "platform" },
  { path: "/platform/market-data", title: "Market Data", status: "keep", category: "platform" },
  { path: "/community", title: "Community Dashboard", status: "keep", category: "community" },
  { path: "/community/tools", title: "Farming Tools", status: "consolidate", category: "community" },
  { path: "/community/opportunities", title: "Community Opportunities", status: "redundant", category: "community" },
  { path: "/community/network", title: "Community Network", status: "consolidate", category: "community" },
  { path: "/community/resources", title: "Learning Resources", status: "consolidate", category: "community" },
]

const optimizedSitemap = {
  core: [
    { path: "/", title: "Homepage", description: "Main landing page with hero, products, and CTAs" },
    { path: "/about", title: "About Us", description: "Farm story, team, values, and sustainability mission" },
    { path: "/contact", title: "Contact", description: "All contact methods, location, hours, and inquiry forms" },
  ],
  shop: [
    {
      path: "/products",
      title: "All Products",
      description: "Complete product catalog with categories, pricing, and ordering",
    },
    {
      path: "/products/bulk-orders",
      title: "Bulk & Custom Orders",
      description: "Wholesale pricing, gift packages, and custom orders",
    },
  ],
  content: [
    { path: "/blog", title: "Blog & Resources", description: "Farming guides, business tips, and success stories" },
    {
      path: "/blog/[slug]",
      title: "Individual Blog Posts",
      description: "Detailed articles on farming, business, and sustainability",
    },
  ],
  platform: [
    { path: "/platform", title: "Platform Hub", description: "Overview of all platform features and tools" },
    {
      path: "/platform/sustainability",
      title: "Sustainability Impact",
      description: "Environmental mission and waste transformation process",
    },
    {
      path: "/platform/opportunities",
      title: "Business Opportunities",
      description: "Partnerships, franchises, and supplier programs",
    },
    {
      path: "/platform/cheese-making",
      title: "Cheese Making Process",
      description: "Detailed artisan cheese-making techniques and community",
    },
    {
      path: "/platform/market-data",
      title: "Market Intelligence",
      description: "Pricing insights and market analysis tools",
    },
  ],
  community: [
    {
      path: "/community",
      title: "Community Dashboard",
      description: "Member tools, resources, network, and learning materials",
    },
  ],
  legal: [
    { path: "/privacy", title: "Privacy Policy", description: "Data protection and privacy practices" },
    { path: "/terms", title: "Terms of Service", description: "Website terms and conditions" },
  ],
}

const consolidationActions = [
  {
    action: "Merge Shop Pages",
    description: "Combine /shop/* and /products/* into single /products page with categories",
    pages: ["/shop", "/shop/pork", "/shop/cheeses", "/products/pork", "/products/cheese"],
    target: "/products",
    impact: "Reduces confusion, improves SEO, simplifies navigation",
  },
  {
    action: "Consolidate Community Features",
    description: "Merge all community sub-pages into main dashboard with tabs",
    pages: ["/community/tools", "/community/network", "/community/resources"],
    target: "/community",
    impact: "Better user experience, reduced page maintenance, clearer structure",
  },
  {
    action: "Combine Order Types",
    description: "Merge bulk orders and gift packages into products page",
    pages: ["/bulk-orders", "/shop/gifts"],
    target: "/products/bulk-orders",
    impact: "Streamlined ordering process, reduced duplicate content",
  },
  {
    action: "Remove Duplicate Opportunities",
    description: "Remove community opportunities page (duplicate of platform)",
    pages: ["/community/opportunities"],
    target: "Remove",
    impact: "Eliminates content duplication, clearer information architecture",
  },
]

export default function SitemapPage() {
  return (
    <div className="container py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-amber-800">🐷🧀 Cheesy Pig's Sitemap Analysis</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive analysis of current pages with optimization recommendations
            </p>
          </div>
          <div className="text-6xl">🐷</div>
        </div>

        {/* Status Legend */}
        <Card className="bg-amber-50 border-amber-200 mb-6">
          <CardContent className="pt-4">
            <h3 className="font-semibold mb-3 text-amber-800">📋 Page Status Legend</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Keep - Perfect as is! 🎯</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-sm font-medium">Consolidate - Merge for better UX 🔄</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm font-medium">Redundant - Time to say goodbye! 👋</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="current" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="current">Current Structure</TabsTrigger>
          <TabsTrigger value="optimized">Optimized Sitemap</TabsTrigger>
          <TabsTrigger value="consolidation">Consolidation Plan</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Current Page Analysis
              </CardTitle>
              <CardDescription>Analysis of all existing pages with status recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {["core", "shop", "content", "platform", "community"].map((category) => (
                  <div key={category} className="space-y-2">
                    <h3 className="font-semibold text-lg capitalize">{category} Pages</h3>
                    <div className="grid gap-2">
                      {currentPages
                        .filter((page) => page.category === category)
                        .map((page) => (
                          <div key={page.path} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <code className="text-sm bg-muted px-2 py-1 rounded">{page.path}</code>
                              <span>{page.title}</span>
                            </div>
                            <Badge
                              variant={
                                page.status === "keep"
                                  ? "default"
                                  : page.status === "redundant"
                                    ? "destructive"
                                    : "secondary"
                              }
                              className={
                                page.status === "keep"
                                  ? "bg-green-500 text-white"
                                  : page.status === "consolidate"
                                    ? "bg-amber-500 text-white"
                                    : "bg-red-500 text-white"
                              }
                            >
                              {page.status === "keep" && "🎯 "}
                              {page.status === "consolidate" && "🔄 "}
                              {page.status === "redundant" && "👋 "}
                              {page.status}
                            </Badge>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimized" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Optimized Site Structure
              </CardTitle>
              <CardDescription>Streamlined sitemap for better UX and SEO performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(optimizedSitemap).map(([category, pages]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="font-semibold text-lg capitalize flex items-center gap-2">
                      {category === "core" && <Home className="h-4 w-4" />}
                      {category === "shop" && <ShoppingBag className="h-4 w-4" />}
                      {category === "content" && <BookOpen className="h-4 w-4" />}
                      {category === "platform" && <Settings className="h-4 w-4" />}
                      {category === "community" && <Users className="h-4 w-4" />}
                      {category} Pages
                    </h3>
                    <div className="grid gap-3">
                      {pages.map((page) => (
                        <Card key={page.path} className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <code className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">{page.path}</code>
                              <h4 className="font-medium">{page.title}</h4>
                              <p className="text-sm text-muted-foreground">{page.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consolidation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Merge className="h-5 w-5 text-blue-500" />
                Consolidation Strategy
              </CardTitle>
              <CardDescription>Detailed plan for merging and removing redundant pages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {consolidationActions.map((action, index) => (
                  <Card key={index} className="p-4 border-amber-200">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
                          🐷 {action.action}
                        </Badge>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-amber-600 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p className="text-sm">
                                <strong>Why this matters:</strong> {action.impact}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        {action.target === "Remove" ? (
                          <Trash2 className="h-4 w-4 text-red-500" />
                        ) : (
                          <ArrowRight className="h-4 w-4 text-amber-600" />
                        )}
                      </div>
                      <p className="font-medium">{action.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Affected Pages:</p>
                        <div className="flex flex-wrap gap-2">
                          {action.pages.map((page) => (
                            <code key={page} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                              {page}
                            </code>
                          ))}
                        </div>
                      </div>
                      {action.target !== "Remove" && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Target:</span>
                          <code className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{action.target}</code>
                        </div>
                      )}
                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800">
                          <strong>🧀 Cheesy Benefit:</strong> {action.impact}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="implementation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Implementation Roadmap</CardTitle>
              <CardDescription>Step-by-step guide to optimize your website structure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-amber-800">🐾 Phase 1: Content Consolidation</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 border rounded-lg border-amber-200 bg-amber-50">
                      <div className="text-2xl">🐾</div>
                      <div>
                        <p className="font-medium">Merge Shop and Products Pages</p>
                        <p className="text-sm text-muted-foreground">
                          Combine all product-related pages into single /products page with category filters
                        </p>
                        <div className="mt-2 p-2 bg-amber-100 rounded text-xs text-amber-800">
                          🥔 <strong>Mashed Potato Tip:</strong> Don't forget to update your main navigation menu!
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 border rounded-lg border-amber-200 bg-amber-50">
                      <div className="text-2xl">🐾</div>
                      <div>
                        <p className="font-medium">Consolidate Community Features</p>
                        <p className="text-sm text-muted-foreground">
                          Move all community sub-pages into main dashboard with tabbed interface
                        </p>
                        <div className="mt-2 p-2 bg-amber-100 rounded text-xs text-amber-800">
                          🥔 <strong>Mashed Potato Tip:</strong> Test all community features work in the new tabbed
                          layout!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-amber-800">🐾 Phase 2: SEO Optimization</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 border rounded-lg border-amber-200 bg-amber-50">
                      <div className="text-2xl">🐾</div>
                      <div>
                        <p className="font-medium">Implement 301 Redirects</p>
                        <p className="text-sm text-muted-foreground">
                          Set up redirects from old URLs to new consolidated pages
                        </p>
                        <div className="mt-2 p-2 bg-amber-100 rounded text-xs text-amber-800">
                          🥔 <strong>Mashed Potato Warning:</strong> Test redirects thoroughly - broken links make sad
                          pigs!
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 border rounded-lg border-amber-200 bg-amber-50">
                      <div className="text-2xl">🐾</div>
                      <div>
                        <p className="font-medium">Update Internal Links</p>
                        <p className="text-sm text-muted-foreground">
                          Update all navigation and internal links to point to new structure
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-amber-800">🐾 Phase 3: Performance & UX</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 border rounded-lg border-amber-200 bg-amber-50">
                      <div className="text-2xl">🐾</div>
                      <div>
                        <p className="font-medium">Generate XML Sitemap</p>
                        <p className="text-sm text-muted-foreground">
                          Create and submit updated sitemap to search engines
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 border rounded-lg border-amber-200 bg-amber-50">
                      <div className="text-2xl">🐾</div>
                      <div>
                        <p className="font-medium">Monitor & Optimize</p>
                        <p className="text-sm text-muted-foreground">
                          Track user behavior and search performance on new structure
                        </p>
                        <div className="mt-2 p-2 bg-amber-100 rounded text-xs text-amber-800">
                          🥔 <strong>Mashed Potato Tip:</strong> Set up Google Analytics goals to track the
                          improvements!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      🎉 Expected Benefits - Squeal with Joy!
                    </h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>🐷 40% reduction in total pages (easier maintenance)</li>
                      <li>🧀 Improved user navigation and conversion rates</li>
                      <li>🥓 Better search engine rankings through consolidated authority</li>
                      <li>🐽 Reduced bounce rate from clearer information architecture</li>
                      <li>⚡ Faster site performance with fewer pages to load</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Export Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
                    onClick={() => alert("🐷 Oink! Task list export coming soon!")}
                  >
                    <Download className="mr-2 h-5 w-5" />🐷 Export as Task List
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-amber-700 font-medium">
                    🎯 Next, squeal your way to a cleaner, faster website! 🐷✨
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
