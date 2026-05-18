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
  },
  {
    icon: BuildingIcon,
    title: "Corporate Galas & Events",
    desc: "Elevate your brand presence with meticulously planned corporate functions. We handle product launches, awards nights, and VIP dinners with uncompromising professionalism.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: SparklesIcon,
    title: "Private Milestones",
    desc: "Celebrate life's most meaningful moments, from extravagant birthday bashes to elegant anniversaries, curated with an exclusive touch and absolute privacy.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: MapPinIcon,
    title: "Venue Sourcing & Design",
    desc: "Gain access to our exclusive network of New York's most prestigious hidden venues, perfectly matched and transformed to fit your event's distinct aesthetic.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
  },
]

export function HomeServices() {
  return (
    <SectionWrapper id="services" className="bg-background">
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center text-center gap-4 mb-20">
          <div className="mb-2 inline-flex items-center gap-2 border border-border bg-muted px-4 py-1.5 text-xs font-semibold tracking-widest text-foreground uppercase">
            <SparklesIcon className="size-3.5 text-amber" />
            Our Expertise
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white max-w-2xl leading-tight">
            Curated Services for <br /><span className="text-amber italic font-serif font-light">Grand Occasions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mt-4">
            Specializing in high-end design, meticulous organization, and flawless execution for events that demand perfection.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-16 md:gap-24">
        {services.map((svc, i) => {
          const isEven = i % 2 !== 0;
          return (
            <ScrollReveal key={svc.title} direction={isEven ? "left" : "right"}>
              <div className={`grid items-center gap-8 md:gap-16 lg:grid-cols-2 ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative h-[400px] md:h-[500px] w-full overflow-hidden border border-border shadow-lg ${isEven ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/10" />
                </div>
                
                <div className={`flex flex-col justify-center ${isEven ? 'lg:col-start-1 lg:pl-8' : 'lg:pr-8'}`}>
                  <div className="mb-6 inline-flex size-14 items-center justify-center border border-amber/30 bg-amber/10 text-amber">
                    <svc.icon className="size-6" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-navy dark:text-white font-serif">{svc.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {svc.desc}
                  </p>
                  <div>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 border-b-2 border-amber pb-1 text-sm font-bold text-navy dark:text-white uppercase tracking-widest hover:text-amber transition-colors"
                    >
                      Discover {svc.title}
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  )
}
