import Image from "next/image"
import Link from "next/link"
import { ArrowRight, PhoneCall } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FinanceSectionLabel } from "@/components/finance/finance-section-label"
import { financeContact } from "@/lib/finance-contact"
import { financeImages } from "@/lib/finance-images"

export function FinanceCtaSection() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/10 blur-[120px]" />
      <ScrollReveal>
        <div className="group relative z-10 overflow-hidden border border-amber/30 p-8 transition-all duration-700 hover:border-amber/50 md:p-12 lg:grid lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-12 lg:p-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-amber/5 blur-[80px] mix-blend-screen transition-colors duration-700 group-hover:bg-amber/10" />

          <div className="relative z-10 flex flex-col">
            <FinanceSectionLabel label="Ready to start?" />
            <h2 className="mb-6 font-serif text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span className="text-amber italic font-light">Start Your Finance Journey</span>
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
              Apply today and experience a smooth, transparent, and hassle-free car financing
              journey.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-none bg-amber px-8 py-4 text-[15px] font-bold text-black shadow-[0_0_20px_rgba(230,179,9,0.25)] transition-all hover:-translate-y-1 hover:bg-amber-light hover:shadow-[0_0_30px_rgba(230,179,9,0.4)] active:scale-[0.98] sm:w-auto"
              >
                Send a Message
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={financeContact.phoneHref}
                title={`Call ${financeContact.phoneDisplay}`}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-none border border-white/10 bg-zinc-900/90 px-8 py-4 text-[15px] font-bold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
              >
                <PhoneCall className="h-4 w-4 text-amber" />
                {financeContact.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-10 hidden lg:mt-0 lg:block">
            <div className="relative h-[400px] overflow-hidden border border-white/10 p-2">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={financeImages.timeline}
                  alt="Finance application review"
                  fill
                  className="object-cover object-center opacity-80 transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/10 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 border border-white/10 bg-zinc-950/80 px-5 py-4 text-sm text-white/90 backdrop-blur-md">
                Every approval path is mapped to documentation and repayment planning
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
