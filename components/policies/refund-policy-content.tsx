import { SectionWrapper } from "@/components/layout/section-wrapper"
import Link from "next/link"
import { AlertCircleIcon, CalendarClockIcon, CheckCircle2Icon, CreditCardIcon, FileWarningIcon, ShieldAlertIcon, InfoIcon } from "lucide-react"

export function RefundPolicyContent() {
  const sections = [
    {
      icon: <InfoIcon className="size-6 text-amber" />,
      title: "Overview",
      content: (
        <p>
          At La Grand Events, flawless execution and client satisfaction are the cornerstones of our service. This policy outlines the specific conditions under which refunds or credits are evaluated for our bespoke event planning and coordination services.
        </p>
      )
    },
    {
      icon: <CheckCircle2Icon className="size-6 text-amber" />,
      title: "Eligibility for Refunds",
      content: (
        <div className="space-y-4">
          <p>Refund requests are subject to the following criteria:</p>
          <ul className="space-y-3">
            <li className="flex gap-3"><span className="text-amber">✓</span> Requests must be submitted within 7 days of service delivery or event date.</li>
            <li className="flex gap-3"><span className="text-amber">✓</span> Services must be proven to be unrendered or fundamentally deviating from the agreed contract.</li>
            <li className="flex gap-3"><span className="text-amber">✓</span> All refunds require formal review and written approval by our management team.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <ShieldAlertIcon className="size-6 text-amber" />,
      title: "Non-Refundable Elements",
      content: (
        <div className="rounded-2xl border-l-4 border-l-amber bg-zinc-50 dark:bg-zinc-900 p-6 md:p-8">
          <p className="mb-4 font-medium text-zinc-900 dark:text-white">Due to the nature of event planning, the following are strictly non-refundable:</p>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc ml-4">
            <li>Initial retainer fees once the planning phase has commenced</li>
            <li>Custom design work, bespoke fabrication, and personalized decor</li>
            <li>Third-party vendor deposits remitted on your behalf</li>
            <li>Last-minute or emergency coordination surcharges</li>
          </ul>
        </div>
      )
    },
    {
      icon: <AlertCircleIcon className="size-6 text-amber" />,
      title: "Execution & Satisfaction",
      content: (
        <p>
          Should any aspect of our on-site execution fail to meet the rigorous standards outlined in your contract, we ask that you notify us immediately. Our team will conduct an exhaustive internal review to provide an equitable resolution, which may include future event credits or partial refunds.
        </p>
      )
    },
    {
      icon: <CreditCardIcon className="size-6 text-amber" />,
      title: "Refund Processing",
      content: (
        <p>
          Approved refunds are processed exclusively to the original payment method. Please allow 5 to 10 business days for the funds to clear, contingent upon your financial institution's processing times.
        </p>
      )
    },
    {
      icon: <FileWarningIcon className="size-6 text-amber" />,
      title: "Special Exceptions",
      content: (
        <p>
          <strong>Force Majeure:</strong> Events disrupted by acts of God, severe weather, or public health emergencies will be navigated per the specific contingency clauses in your contract, rather than this standard refund policy. Digital assets (floor plans, schematics) remain non-refundable upon delivery.
        </p>
      )
    },
    {
      icon: <CalendarClockIcon className="size-6 text-amber" />,
      title: "Initiate a Request",
      content: (
        <div className="mt-2 text-sm bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
          <p className="mb-2 text-zinc-900 dark:text-white font-medium">To formally request a review for a refund, contact our billing department:</p>
          <p>Email: <a href="mailto:lagrandeventsllc@gmail.com" className="text-amber hover:underline font-medium">lagrandeventsllc@gmail.com</a></p>
          <p className="text-muted-foreground mt-1 text-xs">Please include "Refund Request - [Your Name]" in the subject line.</p>
        </div>
      )
    }
  ]

  return (
    <SectionWrapper>
      <article className="mx-auto max-w-4xl py-10 md:py-16">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber mb-3">Policies</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-zinc-900 dark:text-white">Refund Policy</h1>
          <p className="mt-4 text-muted-foreground">Ensuring clarity and peace of mind.</p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {sections.map((section, index) => (
            <section key={index} className="group relative">
              {index !== sections.length - 1 && (
                <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
              )}
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm z-10 transition-transform group-hover:-translate-y-1">
                  {section.icon}
                </div>
                <div className="pt-2 flex-1">
                  <h2 className="mb-3 text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">{section.title}</h2>
                  <div className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </SectionWrapper>
  )
}
