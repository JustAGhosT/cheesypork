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
  Users,
  MapPin,
  ShoppingBag,
  Phone,
  Info,
  Briefcase,
  Shield,
  Settings,
  LogOut,
  User,
  Leaf,
  TrendingUp,
  BookOpen,
  Gift,
  Package,
} from "lucide-react"

const productItems = [
  {
    title: "All Products",
    href: "/products",
    description: "Browse our complete selection of farm-fresh products.",
    icon: ShoppingBag,
  },
  {
    title: "Bulk & Custom Orders",
    href: "/products#bulk-orders",
    description: "Wholesale pricing and custom packages for events.",
    icon: Package,
  },
  {
    title: "Gift Packages",
    href: "/products#bulk-orders",
    description: "Curated meat and cheese packages for any occasion.",
    icon: Gift,
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
    title: "Cheese Making Process",
    href: "/platform/cheese-making-process",
    description: "Learn our artisan cheese-making techniques.",
    icon: ChefHat,
  },
  {
    title: "Market Intelligence",
    href: "/platform/market-data",
    description: "Pricing insights and market analysis tools.",
    icon: TrendingUp,
  },
]

const blogItems = [
  {
    title: "Farming Guides",
    href: "/blog/market-waste-feed",
    description: "Sustainable pig farming with market waste feed.",
    icon: Leaf,
  },
  {
    title: "Business Tips",
    href: "/blog/farm-profitability",
    description: "Calculate your farm's true profitability.",
    icon: TrendingUp,
  },
  {
    title: "Local Stories",
    href: "/blog/farm-to-braai",
    description: "Why local meat tastes and earns better.",
    icon: Users,
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
    title: "The Team",
    href: "/about#team",
    description: "Meet the passionate people behind The Cheesy Pig.",
    icon: Users,
  },
  {
    title: "Visit Our Farm",
    href: "/about#farm",
    description: "Plan a visit to our sustainable farm in Bela Bela.",
    icon: MapPin,
  },
  {
    title: "Careers",
    href: "/contact",
    description: "Join our team and be part of something special.",
    icon: Briefcase,
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const [authDialogOpen, setAuthDialogOpen] = React.useState(false)

  const handlePhoneClick = () => {
    window.open("tel:0692381255", "_self")
  }

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
                    {productItems.map((item) => (
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

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">Blog & Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/blog"
                        >
                          <BookOpen className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">Farm Smarter Blog</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Free guides, success stories, and expert insights for sustainable farming.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    {blogItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                        {item.description}
                      </ListItem>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {user && (
                <NavigationMenuItem>
                  <Link href="/community" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      <Shield className="h-4 w-4 mr-2 text-primary" />
                      Community
                    </NavigationMenuLink>
                  </Link>
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
            <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={handlePhoneClick}>
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
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
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
