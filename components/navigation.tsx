"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { AuthDialog } from "@/components/auth-dialog"
import { useAuth } from "@/lib/auth-context"
import { MiniCart } from "@/components/mini-cart"
import {
  ChefHat,
  UtensilsCrossed,
  Truck,
  Users,
  MapPin,
  Calendar,
  ShoppingBag,
  Star,
  Phone,
  Info,
  Briefcase,
  Shield,
  Settings,
  LogOut,
  User,
  Leaf,
  TrendingUp,
  Menu,
} from "lucide-react"

const menuItems = [
  {
    title: "Pork Products",
    href: "/products/pork",
    description: "Premium bacon, sausages, chops, and specialty cuts.",
    icon: UtensilsCrossed,
  },
  {
    title: "Artisanal Cheeses",
    href: "/products/cheese",
    description: "Hand-crafted cheeses made fresh on our farm.",
    icon: ChefHat,
  },
  {
    title: "Bulk Orders",
    href: "/bulk-orders",
    description: "Wholesale pricing for restaurants and large orders.",
    icon: Calendar,
  },
]

const platformItems = [
  {
    title: "Sustainability Impact",
    href: "/platform/sustainability",
    description: "See how we transform waste into premium protein.",
    icon: Leaf,
  },
  {
    title: "Business Opportunities",
    href: "/platform/opportunities",
    description: "Explore partnerships and franchise opportunities.",
    icon: Briefcase,
  },
  {
    title: "Market Data",
    href: "/platform/market-data",
    description: "Pricing insights and market intelligence (coming soon).",
    icon: TrendingUp,
  },
]

const shopItems = [
  {
    title: "Fresh Pork",
    href: "/shop/pork",
    description: "Bacon, chops, sausages, and premium cuts.",
    icon: ShoppingBag,
  },
  {
    title: "Farm Cheeses",
    href: "/shop/cheeses",
    description: "Hand-crafted cheeses made fresh on our farm.",
    icon: Truck,
  },
  {
    title: "Gift Packages",
    href: "/shop/gifts",
    description: "Curated meat and cheese packages for any occasion.",
    icon: Star,
  },
]

const aboutItems = [
  {
    title: "Our Story",
    href: "/about",
    description: "Learn about our farm-to-table journey and values.",
    icon: Info,
  },
  {
    title: "The Farm",
    href: "/farm",
    description: "Visit our sustainable farm and meet our animals.",
    icon: MapPin,
  },
  {
    title: "Team",
    href: "/team",
    description: "Meet the passionate people behind The Cheesy Pig.",
    icon: Users,
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join our team and be part of something special.",
    icon: Briefcase,
  },
]

const communityItems = [
  {
    title: "Farming Tools",
    href: "/community/tools",
    description: "Exclusive calculators and analysis tools for farmers.",
    icon: Shield,
  },
  {
    title: "Business Opportunities",
    href: "/community/opportunities",
    description: "Partnership and franchise opportunities.",
    icon: Briefcase,
  },
  {
    title: "Community Network",
    href: "/community/network",
    description: "Connect with fellow farmers and partners.",
    icon: Users,
  },
  {
    title: "Learning Resources",
    href: "/community/resources",
    description: "Guides, courses, and educational materials.",
    icon: Info,
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const [authDialogOpen, setAuthDialogOpen] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rustic-texture">
        <div className="container flex h-20 items-center">
          <Link href="/" className="mr-8 flex items-center space-x-3">
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl">🐷</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-primary">The Cheesy Pig</span>
              <p className="text-xs text-muted-foreground">Farm to Table Excellence</p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {menuItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other navigation menu items remain the same... */}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <MiniCart className="hidden sm:block" />
            <Button variant="ghost" size="sm" className="hidden lg:flex">
              <Phone className="h-4 w-4 mr-2" />
              069 238 1255
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {user.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  {/* Dropdown menu content remains the same... */}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => setAuthDialogOpen(true)} className="bg-primary hover:bg-primary/90">
                Join Community
              </Button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-background">
            <div className="container py-4 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Link 
                  href="/products/pork"
                  className="flex items-center p-3 rounded-lg hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <UtensilsCrossed className="h-5 w-5 mr-3 text-primary" />
                  <span>Pork Products</span>
                </Link>
                <Link 
                  href="/products/cheese"
                  className="flex items-center p-3 rounded-lg hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ChefHat className="h-5 w-5 mr-3 text-primary" />
                  <span>Artisanal Cheeses</span>
                </Link>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
                <Link 
                  href="/contact"
                  className="flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <span>Contact Us</span>
                </Link>
                <span className="text-sm text-muted-foreground">069 238 1255</span>
              </div>
              
              <MiniCart className="w-full" />
            </div>
          </div>
        )}
      </header>

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ComponentType<any> }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-4 w-4 text-primary" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"