import Image from "next/image"
import { CheckCircle2, Car, RefreshCcw, CreditCard } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FinanceSectionLabel } from "@/components/finance/finance-section-label"
import { financeImages } from "@/lib/finance-images"

const packages = [
  {
    icon: Car,
    title: "New Car Finance",
    desc: "Structure a new-vehicle purchase (including Kia and Hyundai models) around clear monthly obligations and lender requirements.",
    features: [
      "Low down payment options",
      "Flexible tenure (12–84 months)",
      "Quick loan approvals",
      "Transparent documentation",
    ],
  },
  {
    icon: CreditCard,
    title: "Used Car Finance",
    desc: "Finance pre-owned purchases with eligibility paths that are easier to review and document.",
    features: [
      "Financing for dealer & individual sellers",
      "Flexible EMI plans",
      "Fast documentation process",
      "Competitive interest rates",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Car Loan Refinancing",
    desc: "Refinance an existing loan to reduce monthly exposure or reshape the payment schedule.",
    features: [
      "Reduce EMI burden",
      "Lower interest rate",
      "Improve cash flow",
      "Adjust loan tenure",
    ],
  },
]

export function PackagesSection() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-amber/5 blur-[120px]" />
      <ScrollReveal>
        <div className="relative z-10 mb-12 max-w-2xl lg:mb-14">
          <FinanceSectionLabel label="Packages" />
          <h2 className="font-serif text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Tailored finance packages with{" "}
            <span className="text-amber italic font-light">traceable requirements</span>
          </h2>
        </div>

        <div className="relative z-10 mb-10 h-[220px] overflow-hidden border border-white/10 lg:h-[340px]">
          <Image
            src={financeImages.packages}
            alt="Hyundai Sonata showcasing premium sedan finance options"
            fill
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-md border border-white/10 bg-zinc-950/80 px-5 py-4 text-sm text-white/80 backdrop-blur-md">
            Each package maps to a different ownership scenario, so the approval path and monthly
            plan stay easy to review.
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col overflow-hidden border border-white/10 bg-zinc-900/90 p-8"
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber transition-all duration-500 ease-out group-hover:w-full" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-white/10 bg-gradient-to-br from-amber to-amber-dark shadow-lg transition-transform group-hover:-translate-y-1">
                <p.icon className="h-7 w-7 text-black" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-amber">
                {p.title}
              </h3>
              <p className="mb-6 text-[15px] leading-relaxed text-white/50">{p.desc}</p>
              <ul className="mt-auto flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
