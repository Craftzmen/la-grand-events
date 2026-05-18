import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StatCounter } from "@/components/stat-counter"

export function AboutStats() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-2 gap-0 md:grid-cols-4 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border">
        {[
          { value: 2009, label: "Year Founded", suffix: "" },
          { value: 15, label: "Years Experience", suffix: "+" },
          { value: 5000, label: "events Serviced", suffix: "+" },
          { value: 98, label: "Satisfaction Rate", suffix: "%" },
        ].map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 100} className="p-10 text-center bg-card hover:bg-muted/50 transition-colors">
             <div className="text-5xl font-extrabold text-navy dark:text-white mb-2">
              <StatCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
