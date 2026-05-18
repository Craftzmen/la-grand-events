import { Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'La Grand Events | Expert Event Management & Wedding Planning in Brooklyn, NY',
  description:
    'Quality event management, wedding planning, and celebration coordination services in Brooklyn, NY. Expert planners, transparent pricing, and unforgettable experiences. Trusted by 500+ happy clients.',
  keywords: [
    'event management Brooklyn',
    'wedding planning NY',
    'party coordination Brooklyn',
    'expert event planners',
    'celebration planning tools',
    'wedding coordinator service',
    'affordable event deals',
    'professional event care',
  ],
  openGraph: {
    title: 'La Grand Events - Expert Event Management & Wedding Planning in Brooklyn',
    description:
      'Quality event management, wedding planning, and party coordination. Step into a world of unforgettable moments where imagination meets expertise.',
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'La Grand Events - Expert Event Planning',
    description:
      'Step into a world of unforgettable moments with expert event and wedding planning.',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", inter.variable, "font-sans")}>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
