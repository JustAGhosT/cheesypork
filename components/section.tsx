import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "muted" | "accent"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  container?: boolean
}

export function Section({
  children,
  className,
  id,
  background = "default",
  padding = "lg",
  container = true,
}: SectionProps) {
  const backgroundClasses = {
    default: "",
    muted: "bg-muted/50",
    accent: "bg-accent/10",
  }

  const paddingClasses = {
    none: "",
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
  }

  return (
    <section id={id} className={cn(backgroundClasses[background], paddingClasses[padding], className)}>
      {container ? <div className="container mx-auto px-4">{children}</div> : children}
    </section>
  )
}
