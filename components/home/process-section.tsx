import Link from "next/link"
import { ArrowRightIcon, PaletteIcon, LayoutListIcon, GlassWaterIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  {
    num: "01",
    icon: PaletteIcon,
    title: "Vision & Consultation",
    desc: "We begin by understanding your desires, aesthetic preferences, and objectives. Through a collaborative consultation, we lay the foundation of your event's unique narrative.",
  },
  {
    num: "02",
    icon: LayoutListIcon,
    title: "Design & Curation",
    desc: "Our creative team sources exclusive venues, curates top-tier vendors, and develops a comprehensive design deck that brings your concept into vivid detail.",
  },
  {
    num: "03",
    icon: GlassWaterIcon,
    title: "Flawless Execution",
    desc: "On the day of your event, our coordination specialists manage every logistical component behind the scenes, allowing you to be a guest at your own celebration.",
  },
]

export function ProcessSection() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white font-serif">
            The Journey to <span className="text-amber italic font-light">Perfection</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A seamless, stress-free planning experience. We have refined our methodology to ensure every milestone is met with care and artistry.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline connecting line for desktop */}
        <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 bg-border z-0" />
        
        <div className="grid gap-12 md:gap-0 md:grid-cols-3 relative z-10">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 150} className="relative text-center px-6">
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-navy text-amber shadow-xl shadow-navy/10 border-4 border-background mb-8">
                <step.icon className="size-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground font-serif">{step.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground max-w-xs mx-auto">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal className="mt-20 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-base font-bold text-navy border-b-2 border-amber pb-1 dark:text-white hover:text-amber transition-colors uppercase tracking-wider"
        >
          View Our Full Services
          <ArrowRightIcon className="size-5" />
        </Link>
      </ScrollReveal>
    </SectionWrapper>
  )
}
