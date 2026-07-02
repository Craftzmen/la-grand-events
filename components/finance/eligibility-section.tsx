import Image from "next/image"
import { BadgeCheck, FileInput, UserCheck, Wallet } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FinanceSectionLabel } from "@/components/finance/finance-section-label"
import { financeImages } from "@/lib/finance-images"

const criteria = [
  {
    icon: UserCheck,
    title: "Identity verification",
    text: "Basic identity and contact information help align the file with the correct applicant.",
  },
  {
    icon: FileInput,
    title: "Income or affordability review",
    text: "We review the payment profile so the monthly structure is realistic.",
  },
  {
    icon: BadgeCheck,
    title: "Vehicle context",
    text: "New, used, and refinance requests are handled with different underwriting assumptions.",
  },
  {
    icon: Wallet,
    title: "Budget alignment",
    text: "The final recommendation should fit the payment plan, not just the sticker price.",
  },
]

export function EligibilitySection() {
  return (
    <SectionWrapper background="navy" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber/5 blur-[120px]" />
      <ScrollReveal>
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <div>
            <FinanceSectionLabel label="Eligibility" />
            <h2 className="font-serif text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Applications reviewed against a{" "}
              <span className="text-amber italic font-light">practical affordability model</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/45">
              The objective is not to overcomplicate the file. It is to make the requirements visible
              so customers can prepare the right documents once.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {criteria.map((item) => (
                <div
                  key={item.title}
                  className="group border border-white/10 bg-zinc-900/90 p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center bg-amber/10 transition-colors group-hover:bg-amber/20">
                    <item.icon className="h-5 w-5 text-amber" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden border border-white/10 lg:h-[460px]">
            <Image
              src={financeImages.eligibility}
              alt="Kia vehicle representing modern eligibility standards"
              fill
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/15 to-transparent" />
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
