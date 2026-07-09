"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import {
  MenuIcon,
  PhoneIcon,
  MailIcon,
  ChevronDownIcon,
} from "lucide-react"
import Logo from '@/app/assets/images/logo-new.png'

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Finance", href: "/finance" },
  { label: "Contact", href: "/contact" },
]

const policyLinks = [
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Refund Policy", href: "/policies/refund-policy" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [policyOpen, setPolicyOpen] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPolicyOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 dark:bg-zinc-950/95 border-b border-zinc-200 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-2"
          : "bg-transparent border-b border-transparent py-4"
      )}
    >
      {/* Top Bar for non-scrolled state */}
      <div
        className={cn(
          "flex justify-center transition-all duration-500 overflow-hidden",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100 bg-black/20"
        )}
      >
        <div className="flex max-w-7xl w-full items-center justify-between px-6 py-2 text-xs text-white/90 font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <Link href="tel:+18022420583" className="flex items-center gap-2 hover:text-white transition-colors">
              <PhoneIcon className="size-3.5" />
              802 242 0583
            </Link>
            <Link href="mailto:query@primeautodeals.live" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
              <MailIcon className="size-3.5" />
              query@primeautodeals.live
            </Link>
          </div>
          <span className="hidden md:block text-white/70">
            Mon-Sat: 8:00 AM – 6:00 PM
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 transition-all duration-500">
        <nav
          className="relative flex items-center justify-between transition-all duration-500"
        >
          <Link href="/" className="flex items-center gap-2.5 z-10">
            <Image
              src={Logo}
              alt="La Grand Events"
              width={200}
              height={60}
              className={cn(
                "h-14 w-auto transition-all duration-500 md:h-24 drop-shadow-md",
                scrolled && "brightness-100 invert grayscale-100 dark:invert dark:grayscale-0 dark:brightness-[unset]"
              )}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative group px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300",
                    active
                      ? "text-amber"
                      : scrolled
                        ? "text-foreground/80 hover:text-amber"
                        : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                  {/* Underline animation */}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-amber transform origin-left transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              )
            })}

            {/* Policies Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setPolicyOpen(!policyOpen)}
                className={cn(
                  "cursor-pointer flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300",
                  pathname.startsWith("/policies")
                    ? "text-amber"
                    : scrolled
                      ? "text-foreground/80 hover:text-amber"
                      : "text-white/90 hover:text-white"
                )}
              >
                Policies
                <ChevronDownIcon
                  className={cn(
                    "size-4 transition-transform duration-300",
                    policyOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-4 w-52 rounded-2xl border border-white/20 bg-white/95 dark:bg-zinc-900/95 p-2 shadow-2xl transition-all duration-300 origin-top",
                  policyOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                )}
              >
                {policyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setPolicyOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                      isActive(link.href)
                        ? "bg-amber/10 text-amber dark:text-amber"
                        : "text-foreground/70 hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 z-10">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className={cn(
                "lg:hidden rounded-full border transition-all duration-300",
                scrolled
                  ? "border-primary/20 text-primary hover:bg-primary/5"
                  : "border-white/30 text-white hover:bg-white/10"
              )}
            >
              <Link href="tel:+18022420583" title="Call 802 242 0583">
                <PhoneIcon className="size-4" />
              </Link>
            </Button>

            {/* Get a Quote Button */}
            <Button
              asChild
              className={cn(
                "hidden sm:flex rounded-none px-6 shadow-lg shadow-amber/20 hover:shadow-amber/40 transition-all duration-300 font-bold",
                "bg-amber hover:bg-amber-light text-black border-0"
              )}
            >
              <Link href="tel:+18022420583" title="Call 802 242 0583">
                Get a Quote
              </Link>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "lg:hidden rounded-full border transition-all duration-300",
                    scrolled
                      ? "border-primary/20 text-primary hover:bg-primary/5"
                      : "border-white/30 text-white hover:bg-white/10"
                  )}
                >
                  <MenuIcon className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0 border-l-white/10 dark:bg-zinc-950">
                <SheetHeader className="border-b border-border/50 p-5">
                  <SheetTitle className="flex items-center gap-2">
                    <Image
                      src={Logo}
                      alt="La Grand Events"
                      width={140}
                      height={35}
                      className="h-10 w-auto brightness-0 invert dark:brightness-[unset] dark:invert-0"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive(link.href)
                          ? "bg-amber/10 text-amber"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="my-2 h-px bg-border/50" />
                  <p className="px-4 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Policies
                  </p>
                  {policyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive(link.href)
                          ? "bg-amber/10 text-amber"
                          : "text-foreground/70 hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="my-4 h-px bg-border/50" />
                  <div className="px-4 py-3">
                    <Button
                      asChild
                      className="w-full rounded-full bg-amber text-white font-semibold hover:bg-amber-light shadow-md shadow-amber/20"
                    >
                      <Link href="tel:+18022420583" title="Call 802 242 0583">
                        <PhoneIcon className="size-4 mr-2" />
                        Call 802 242 0583
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
