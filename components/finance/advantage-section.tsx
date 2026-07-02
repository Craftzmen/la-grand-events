import Image from "next/image"
import { Zap, Clock, Eye, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FinanceSectionLabel } from "@/components/finance/finance-section-label"
import { financeImages } from "@/lib/finance-images"

const advantages = [
  {
    icon: Zap,
    title: "Fast Approval",
    desc: "Push the file through a streamlined review path and reduce idle time before funding decisions land.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "See what is being requested, what is approved, and what the next stage requires before committing.",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    desc: "Choose repayment periods from 12 to 84 months so monthly obligations match the vehicle plan.",
  },
  {
    icon: ShieldCheck,
    title: "Competitive Rates",
    desc: "Work with lender partnerships that keep the pricing review competitive and understandable.",
  },
]

export function AdvantageSection() {
  return (
    <SectionWrapper background="navy" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/5 blur-[120px]" />
      <ScrollReveal>
        <div className="relative z-10 mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <FinanceSectionLabel label="Why Choose Us" className="justify-center" />
          <h2 className="font-serif text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            The <span className="text-amber italic font-light">La Grand Advantage</span>
          </h2>
        </div>

        <div className="relative z-10 mx-auto mb-10 h-[200px] max-w-5xl overflow-hidden border border-white/10 lg:h-[320px]">
          <Image
            src={financeImages.advantage}
            alt="Hyundai Tucson representing versatile SUV financing"
            fill
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="group relative flex flex-col items-center overflow-hidden border border-white/10 bg-zinc-900/90 p-7 text-center"
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber transition-all duration-500 ease-out group-hover:w-full" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-white/10 bg-gradient-to-br from-amber to-amber-dark shadow-lg transition-transform group-hover:-translate-y-1">
                <a.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="mb-2.5 text-base font-bold text-white transition-colors group-hover:text-amber">
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">{a.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
