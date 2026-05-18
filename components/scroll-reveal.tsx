"use client"

import * as React from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "left" | "right" | "fade" | "scale"
  delay?: number
  className?: string
  threshold?: number
}

export function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
