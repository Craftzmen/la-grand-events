import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, SparklesIcon, BuildingIcon, GemIcon, MapPinIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: GemIcon,
    title: "Luxury Weddings",
    desc: "From visionary conceptualization to flawless day-of coordination, we craft bespoke luxury weddings that reflect your unique love story and leave lasting impressions.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    features: ["Custom Theme & Design", "Exclusive Venue Selection", "Full Vendor Management", "Day-Of Coordination"],
  },
  {
    icon: BuildingIcon,
    title: "Corporate Galas & Events",
    desc: "Elevate your brand presence with meticulously planned corporate functions. We handle product launches, awards nights, and VIP dinners with uncompromising professionalism.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200",
    features: ["Brand Integration", "Logistics & A/V Support", "Catering & Menu Curation", "Executive VIP Handling"],
  },
  {
    icon: SparklesIcon,
    title: "Private Milestones",
    desc: "Celebrate life's most meaningful moments, from extravagant birthday bashes to elegant anniversaries, curated with an exclusive touch and absolute privacy.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Intimate Gatherings", "Bespoke Entertainment", "Custom Floral & Decor", "Private Chef Sourcing"],
  },
  {
    icon: MapPinIcon,
    title: "Venue Sourcing & Design",
    desc: "Gain access to our exclusive network of New York's most prestigious hidden venues, perfectly matched and transformed to fit your event's distinct aesthetic.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    features: ["Exclusive Network Access", "Contract Negotiation", "Space Transformation", "Permit & Zoning Assistance"],
  },
]

export function ServicesGrid() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase">
              <SparklesIcon className="size-3.5 text-amber" />
              What We Do
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white font-serif">
              Professional <br /><span className="text-amber italic font-light">Event Management</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md font-light">
            From intimate private dinners to grandiose luxury weddings, our elite coordinators
            deliver unforgettable experiences with absolute precision.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 80}>
            <div className="group relative flex h-full flex-col overflow-hidden border border-border bg-card transition-colors hover:border-amber pb-6">
              <div className="relative h-80 w-full overflow-hidden border-b border-border">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 transition-opacity group-hover:opacity-0" />
                <div className="absolute bottom-0 left-0 bg-navy p-5 text-amber">
                  <svc.icon className="size-8" />
                </div>
              </div>
              <div className="flex-1 px-8 pt-8">
                <h3 className="text-3xl font-bold text-foreground mb-4 font-serif">{svc.title}</h3>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {svc.desc}
                </p>
                <div className="space-y-2 mb-6">
                   {svc.features.map((feature, index) => (
                     <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                       <div className="size-1.5 rounded-full bg-amber" />
                       {feature}
                     </div>
                   ))}
                </div>
              </div>
              <div className="px-8 mt-4 border-t border-border pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy dark:text-white uppercase tracking-wider group-hover:text-amber transition-colors"
                >
                  Inquire Now
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
