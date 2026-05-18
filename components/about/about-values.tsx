import { ShieldCheckIcon, HeartIcon, TrophyIcon, UsersIcon, TargetIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Trust & Integrity",
    desc: "We operate with full transparency. Every consultation, every proposal, every execution — carefully managed with honesty.",
  },
  {
    icon: HeartIcon,
    title: "Client First",
    desc: "Your vision drives our creativity. We listen, we understand, and we deliver bespoke designs tailored exclusively to your narrative.",
  },
  {
    icon: TrophyIcon,
    title: "Excellence",
    desc: "We hold ourselves to the highest luxury standards. Flawless execution is not optional — it's the baseline of our service.",
  },
  {
    icon: UsersIcon,
    title: "Community",
    desc: "We're deeply rooted in New York's elite vendor network, fostering partnerships that bring unparalleled value to your events.",
  },
]

export function AboutValues() {
  return (
    <SectionWrapper background="muted">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-white px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase dark:bg-black">
              <TargetIcon className="size-3.5 text-amber" />
              Our Core Values
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white font-serif">
              What Drives Our <span className="text-amber italic font-light">Passion</span>
            </h2>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <ScrollReveal key={v.title} delay={i * 100}>
            <div className="h-full border border-border bg-white p-8 text-left transition-colors hover:border-amber dark:bg-card">
              <div className="mb-6 flex size-14 items-center justify-center bg-navy text-amber">
                <v.icon className="size-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold font-serif">{v.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground font-light">
                {v.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
