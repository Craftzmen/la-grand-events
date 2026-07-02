import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FinanceSectionLabel } from "@/components/finance/finance-section-label"
import { financeImages } from "@/lib/finance-images"

export function FinanceIntro() {
  return (
    <SectionWrapper background="navy" padding="sm">
      <ScrollReveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <FinanceSectionLabel label="Finance Support" />
            <h2 className="font-serif text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Structured lending for{" "}
              <span className="text-amber italic font-light">Kia & Hyundai vehicles</span>
            </h2>
            <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-white/60">
              Whether you are purchasing a new car, buying used, or refinancing an existing loan, we
              help organize the paperwork, expectations, and approval path.
            </p>
          </div>
          <div className="relative h-[260px] overflow-hidden border border-white/10 lg:h-[340px]">
            <Image
              src={financeImages.hero}
              alt="Premium vehicle financing for Kia and Hyundai models"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-sm border border-white/10 bg-zinc-950/80 px-5 py-4 text-sm text-white/80 backdrop-blur-md">
              Tailored lending solutions for modern Kia and Hyundai vehicles
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
