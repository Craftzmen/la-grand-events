"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FinanceSectionLabel } from "@/components/finance/finance-section-label"

const faqs = [
  {
    q: "Can I finance if I am refinancing an existing loan?",
    a: "Yes. Refinance requests are reviewed separately from purchase applications and are structured to show the new payment context clearly.",
  },
  {
    q: "Do new and used vehicles follow the same path?",
    a: "No. Lenders may treat them differently, so we keep the underwriting expectations visible from the start.",
  },
  {
    q: "How much documentation do I need?",
    a: "Enough to verify identity, affordability, and the vehicle context. The exact list depends on the transaction type.",
  },
  {
    q: "Can I ask questions after approval?",
    a: "Yes. We can walk through the term, payment structure, and any remaining closing steps before you sign.",
  },
]

export function FinanceFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <SectionWrapper background="navy" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber/5 blur-[120px]" />
      <ScrollReveal>
        <div className="relative z-10 mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <FinanceSectionLabel label="Finance FAQ" className="justify-center" />
          <h2 className="font-serif text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Questions about{" "}
            <span className="text-amber italic font-light">approval and structure</span>
          </h2>
        </div>

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="group relative overflow-hidden border border-white/10 bg-zinc-900/90"
            >
              <div
                className={`absolute bottom-0 left-0 h-1 bg-amber transition-all duration-500 ease-out ${openIdx === i ? "w-full" : "w-0 group-hover:w-1/4"}`}
              />
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="relative z-10 flex w-full items-center justify-between p-6 text-left"
              >
                <span
                  className={`text-base font-bold transition-colors duration-300 ${openIdx === i ? "text-amber" : "text-white"}`}
                >
                  {faq.q}
                </span>
                <div
                  className={`flex h-8 w-8 items-center justify-center transition-all duration-300 ${openIdx === i ? "rotate-180 bg-amber text-black" : "bg-white/5 text-white/40"}`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>
              {openIdx === i && (
                <div className="relative z-10 -mt-1 animate-in fade-in slide-in-from-top-2 px-6 pb-6 duration-300">
                  <p className="border-t border-white/10 pt-4 text-[15px] leading-relaxed text-white/50">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
