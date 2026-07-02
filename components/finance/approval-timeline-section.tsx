import Image from "next/image"
import { Clock3, FileCheck2, BadgeDollarSign, Handshake } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FinanceSectionLabel } from "@/components/finance/finance-section-label"
import { financeImages } from "@/lib/finance-images"

const steps = [
  {
    icon: FileCheck2,
    title: "Submit details",
    text: "The application starts with the minimum information needed to review the request.",
  },
  {
    icon: Clock3,
    title: "Initial review",
    text: "The file is checked against lender criteria and the chosen vehicle path.",
  },
  {
    icon: BadgeDollarSign,
    title: "Decision and terms",
    text: "If approved, the rate, term, and payment structure are presented in a readable format.",
  },
  {
    icon: Handshake,
    title: "Delivery or refinance",
    text: "The finance path ends with a vehicle handoff or a completed refinance agreement.",
  },
]

export function ApprovalTimelineSection() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/5 blur-[120px]" />
      <ScrollReveal>
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="relative order-2 h-[300px] overflow-hidden border border-white/10 lg:order-1 lg:h-[460px]">
            <Image
              src={financeImages.timeline}
              alt="Premium Kia model highlighting efficient finance approval"
              fill
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/15 to-transparent" />
          </div>

          <div className="order-1 lg:order-2">
            <FinanceSectionLabel label="Approval Timeline" />
            <h2 className="font-serif text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              A predictable approval sequence keeps the{" "}
              <span className="text-amber italic font-light">finance path readable</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/45">
              We use a straightforward sequence so customers know when they are waiting, when they
              are approved, and when the deal is ready to close.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-5 border border-white/10 bg-zinc-900/90 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-gradient-to-br from-amber to-amber-dark shadow-lg transition-transform group-hover:-translate-y-1">
                    <item.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-base font-bold text-white transition-colors group-hover:text-amber">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
