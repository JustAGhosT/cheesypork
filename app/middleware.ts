import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // 301 Redirects for consolidated pages
  const redirects: Record<string, string> = {
    "/shop": "/products",
    "/shop/pork": "/products",
    "/shop/cheeses": "/products",
    "/shop/gifts": "/products#bulk-orders",
    "/products/pork": "/products",
    "/products/cheese": "/products",
    "/bulk-orders": "/products#bulk-orders",
    "/community/tools": "/community",
    "/community/network": "/community",
    "/community/resources": "/community",
    "/community/opportunities": "/platform/opportunities",
  }

  if (redirects[url.pathname]) {
    url.pathname = redirects[url.pathname]
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/shop/:path*",
    "/products/pork",
    "/products/cheese",
    "/bulk-orders",
    "/community/tools",
    "/community/network",
    "/community/resources",
    "/community/opportunities",
  ],
}
