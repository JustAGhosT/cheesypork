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

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {shopItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {platformItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {user && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Community
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {communityItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {aboutItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              (555) 123-PORK
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
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/community">
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Community Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => setAuthDialogOpen(true)} className="bg-primary hover:bg-primary/90">
                Join Community
              </Button>
            )}
          </div>
        </div>
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
