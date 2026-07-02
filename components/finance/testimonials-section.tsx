import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FinanceSectionLabel } from "@/components/finance/finance-section-label"
import { financeImages } from "@/lib/finance-images"

const testimonials = [
  {
    text: "The file moved faster than expected and the payment structure was explained clearly before I signed.",
    name: "David K.",
    role: "New Car Buyer",
  },
  {
    text: "The documentation was easy to follow and the refinance review did not leave me guessing about fees.",
    name: "Lisa M.",
    role: "Refinance Client",
  },
]

export function TestimonialsSection() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber/5 blur-[120px]" />
      <ScrollReveal>
        <div className="relative z-10 mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <FinanceSectionLabel label="Reviews" className="justify-center" />
          <h2 className="font-serif text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            What clients say after the{" "}
            <span className="text-amber italic font-light">finance process is complete</span>
          </h2>
        </div>

        <div className="relative z-10 mx-auto mb-10 h-[200px] max-w-5xl overflow-hidden border border-white/10 lg:h-[320px]">
          <Image
            src={financeImages.testimonials}
            alt="Kia Sportage representing satisfied customer choice"
            fill
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col overflow-hidden border border-white/10 bg-zinc-900/90 p-8"
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber transition-all duration-500 ease-out group-hover:w-full" />
              <Quote className="mb-6 h-10 w-10 text-amber/20 transition-colors group-hover:text-amber/30" />
              <div className="mb-6 flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} fill="currentColor" strokeWidth={0} className="h-4 w-4 text-amber" />
                ))}
              </div>
              <p className="mb-8 flex-1 text-lg italic leading-relaxed text-white/60">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber to-amber-dark text-sm font-bold text-black">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-bold tracking-tight text-white">{t.name}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-amber">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
