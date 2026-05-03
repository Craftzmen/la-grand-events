import { CarIcon, KeyIcon, RefreshCwIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const financeOptions = [
  {
    icon: CarIcon,
    title: "New Car Finance",
    desc: "Own your brand-new Kia or Hyundai with affordable monthly installments and competitive rates.",
    features: [
      "Low down payment options",
      "Flexible tenure (12–84 months)",
      "Quick loan approvals",
      "Transparent documentation",
    ],
  },
  {
    icon: KeyIcon,
    title: "Used Car Finance",
    desc: "Reliable financing for pre-owned vehicles including popular Kia and Hyundai models with easy eligibility criteria.",
    features: [
      "Financing for dealer & individual sellers",
      "Flexible EMI plans",
      "Fast documentation process",
      "Competitive interest rates",
    ],
  },
  {
    icon: RefreshCwIcon,
    title: "Car Loan Refinancing",
    desc: "Lower your monthly payments or interest rates by refinancing your existing car loan.",
    features: [
      "Reduce EMI burden",
      "Lower interest rate",
      "Improve cash flow",
      "Adjust loan tenure",
    ],
  },
]

export function FinanceOptions() {
  return (
    <SectionWrapper background="muted">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white">
            Tailored Finance <span className="text-amber">Packages</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {financeOptions.map((option, i) => (
          <ScrollReveal key={option.title} delay={i * 100}>
            <div className="group h-full border border-border bg-white p-10 transition-colors hover:border-amber dark:bg-card">
              <div className="mb-8 flex size-14 items-center justify-center bg-navy text-amber">
                <option.icon className="size-6" />
              </div>
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-wide text-navy dark:text-white">{option.title}</h3>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                {option.desc}
              </p>
              <ul className="space-y-4 border-t border-border pt-6">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-foreground/80">
                    <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-amber" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
