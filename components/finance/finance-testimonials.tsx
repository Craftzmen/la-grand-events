import { QuoteIcon, StarIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const testimonials = [
  {
    text: "Getting my Kia EV6 through Prime Auto Deals was a breeze. The approval was faster than I expected, and the rates were unbeatable!",
    author: "James M.",
    rating: 5,
  },
  {
    text: "I was looking for a Hyundai Tucson and the team here made the financing so easy. Transparent process and no hidden charges. Highly recommended!",
    author: "Elena R.",
    rating: 5,
  },
]

export function FinanceTestimonials() {
  return (
    <SectionWrapper background="muted">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white">
            What Our Clients <span className="text-amber">Say</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
           <ScrollReveal key={t.author} delay={i * 150}>
             <div className="flex flex-col justify-between h-full border border-border bg-white p-10 dark:bg-card">
               <div>
                 <QuoteIcon className="mb-6 size-8 text-amber" />
                 <p className="mb-8 text-lg font-medium leading-relaxed text-foreground/90">
                   "{t.text}"
                 </p>
               </div>
               <div className="flex items-center justify-between border-t border-border pt-6">
                 <span className="text-base font-bold text-navy dark:text-white uppercase tracking-wider">— {t.author}</span>
                 <div className="flex gap-1">
                   {Array.from({ length: t.rating }).map((_, j) => (
                     <StarIcon key={j} className="size-4 fill-amber text-amber" />
                   ))}
                 </div>
               </div>
             </div>
           </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
