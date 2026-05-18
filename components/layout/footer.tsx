import Link from "next/link"
import Image from "next/image"
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  GlobeIcon,
  MessageCircleIcon,
  LinkIcon,
} from "lucide-react"
import Logo from '@/app/assets/images/logo-new.png'

const serviceLinks = [
  { label: "Luxury Weddings", href: "/services" },
  { label: "Corporate Galas", href: "/services" },
  { label: "Private Milestones", href: "/services" },
  { label: "Venue Sourcing", href: "/services" },
  { label: "Event Planning", href: "/services" },
]

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

const policyLinks = [
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Refund Policy", href: "/policies/refund-policy" },
]

const hours = [
  { day: "Monday – Saturday", time: "8:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white/80 pt-20">

      {/* Pre-footer Call to Action */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-16">
        <div className="rounded-3xl bg-zinc-900 border border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to plan your <span className="text-amber">Grand Event</span>?</h2>
            <p className="text-white/60 text-lg">Let our expert coordinators bring your vision to life with flawless execution.</p>
          </div>
          <div className="z-10 shrink-0">
            <Link
              href="tel:+18022420583"
              className="inline-flex items-center justify-center gap-2 rounded-none bg-amber px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105"
            >
              <PhoneIcon className="size-4" />
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src={Logo}
                alt="La Grand Events"
                width={200}
                height={60}
                className="h-28 w-auto drop-shadow-md"
              />
            </Link>
            <p className="mb-8 text-sm leading-relaxed text-white/50">
              At La Grand Events, we elevate ordinary moments into extraordinary memories. From luxury weddings to corporate galas, our dedicated team ensures every detail is perfect.
            </p>
            <div className="flex gap-4">
              {[
                { icon: GlobeIcon, label: "Facebook" },
                { icon: MessageCircleIcon, label: "Twitter" },
                { icon: LinkIcon, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-amber hover:border-amber hover:text-black"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-white/60 transition-colors hover:text-amber"
                  >
                    <span className="mr-2 h-px w-0 bg-amber transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-white/60 transition-colors hover:text-amber"
                  >
                    <span className="mr-2 h-px w-0 bg-amber transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Expertise
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-white/60 transition-colors hover:text-amber"
                  >
                    <span className="mr-2 h-px w-0 bg-amber transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Connect
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber/10">
                  <MapPinIcon className="size-4 text-amber" />
                </div>
                <span className="text-sm leading-relaxed text-white/60 mt-1">
                  2415 SOUTH HOWELL A VE,<br />MILWAUKEE, WI 53207,<br />United States of America
                </span>
              </li>
              <li>
                <Link
                  href="tel:+18022420583"
                  title="Call 802 242 0583"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber/10 transition-colors group-hover:bg-amber group-hover:text-black text-amber">
                    <PhoneIcon className="size-4" />
                  </div>
                  <span className="text-sm text-white/60 transition-colors group-hover:text-amber">
                    802 242 0583
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:lagrandeventsllc@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber/10 transition-colors group-hover:bg-amber group-hover:text-black text-amber">
                    <MailIcon className="size-4" />
                  </div>
                  <span className="text-sm text-white/60 transition-colors group-hover:text-amber">
                    lagrandeventsllc@gmail.com
                  </span>
                </Link>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl bg-white/5 p-5 border border-white/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                <ClockIcon className="size-4 text-amber" />
                Service Hours
              </div>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex flex-col gap-1 text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-white/50">{h.day}</span>
                    <span className="text-white font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-zinc-950/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-white/40 sm:flex-row md:px-8">
          <p>&copy; {new Date().getFullYear()} La Grand Events. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/policies/privacy-policy" className="transition-colors hover:text-amber">
              Privacy Policy
            </Link>
            <Link href="/policies/refund-policy" className="transition-colors hover:text-amber">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
