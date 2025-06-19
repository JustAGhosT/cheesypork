import type React from "react"
import { cn } from "@/lib/utils"

interface ShellProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "sidebar" | "centered" | "markdown"
  as?: React.ElementType
}

export function Shell({ children, className, variant = "default", as: Comp = "div" }: ShellProps) {
  return (
    <Comp
      className={cn(
        "grid items-start gap-8",
        variant === "default" && "container mx-auto px-4 py-8",
        variant === "sidebar" && "container mx-auto grid-cols-[200px_1fr] gap-12 px-4 py-8 md:grid-cols-[240px_1fr]",
        variant === "centered" && "container mx-auto max-w-4xl px-4 py-8",
        variant === "markdown" && "container mx-auto max-w-3xl px-4 py-8",
        className,
      )}
    >
      {children}
    </Comp>
  )
}
