import { ClockIcon, PhoneIcon, GlobeIcon, MessageCircleIcon, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

const hours = [
  { day: "Monday", time: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
  { day: "Thursday", time: "9:00 AM – 6:00 PM" },
  { day: "Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
]

export function ContactSidebar() {
  return (
    <div className="space-y-8 lg:col-span-2">
      <ScrollReveal direction="right">
        <div className="border border-border bg-white p-10 dark:bg-card">
          <div className="mb-6 flex items-center gap-3">
            <ClockIcon className="size-6 text-amber" />
            <h3 className="text-xl font-bold uppercase tracking-wider text-navy dark:text-white">Working Hours</h3>
          </div>
          <ul className="space-y-4">
            {hours.map((h) => (
              <li
                key={h.day}
                className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
              >
                <span className="text-base font-semibold text-foreground/80">{h.day}</span>
                <span
                  className={`text-sm font-bold uppercase tracking-wider ${h.time === "Closed" ? "text-rose-500" : "text-amber"}`}
                >
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={150}>
        <div className="border border-border bg-white p-10 dark:bg-card">
          <h3 className="mb-6 text-xl font-bold uppercase tracking-wider text-navy dark:text-white">Follow Us</h3>
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
                className="flex size-14 items-center justify-center bg-navy text-white transition-colors hover:bg-amber hover:text-navy border border-border"
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={250}>
        <div className="border border-border bg-navy p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 border border-white/10 m-2" />
          <div className="relative z-10">
            <PhoneIcon className="mx-auto mb-4 size-10 text-amber" />
            <h3 className="mb-2 text-2xl font-bold text-white uppercase tracking-wider">Last-Minute Soirée?</h3>
            <p className="mb-8 text-base text-white/60">
              Call our priority line for expedited planning
            </p>
            <Button
              asChild
              className="w-full h-14 rounded-none bg-amber text-base text-navy font-bold hover:bg-amber-light"
            >
              <Link href="tel:+18022420583" title="Call 802 242 0583">Call 802 242 0583</Link>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
