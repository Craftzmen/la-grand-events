import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PhoneLinkProps = {
  href: string
  title?: string
  className?: string
  children: ReactNode
}

/** Full-surface tel link for reliable mobile tap-to-call. */
export function PhoneLink({ href, title, className, children }: PhoneLinkProps) {
  return (
    <Link
      href={href}
      title={title}
      className={cn(
        "inline-flex min-h-11 w-full items-center justify-center gap-2 transition active:opacity-90",
        className
      )}
    >
      {children}
    </Link>
  )
}
