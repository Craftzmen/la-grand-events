import { QuoteIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const testimonials = [
  {
    text: "LA Grand Events transformed our vision into an absolute dream. Their attention to detail, from the bespoke floral arrangements to the seamless timeline, meant we didn't have to worry about a single thing. Truly extraordinary.",
    author: "Elena & Marcus T.",
    role: "Wedding Clients",
    rating: 5,
  },
  {
    text: "We hired LA Grand for our annual charity gala and they elevated the entire experience. The venue sourcing was impeccable and the execution was flawless. Our guests are still talking about it.",
    author: "Sarah Jenkins",
    role: "Corporate Director",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <SectionWrapper background="default">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white font-serif">
            Words of <span className="text-amber italic font-light">Praise</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} delay={i * 150} direction="up">
            <div className="flex flex-col justify-between h-full border border-border bg-muted/30 p-10 dark:bg-card hover:border-amber transition-colors">
              <div>
                <QuoteIcon className="mb-6 size-10 text-amber/40" />
                <p className="mb-8 text-xl font-medium leading-relaxed text-foreground/90 font-serif italic">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="flex size-12 items-center justify-center rounded-full bg-navy text-lg font-bold text-amber">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-bold text-foreground">{t.author}</div>
                  <div className="text-sm font-medium text-amber uppercase tracking-widest mt-1">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
