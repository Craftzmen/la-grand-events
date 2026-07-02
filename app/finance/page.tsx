import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { FinanceIntro } from "@/components/finance/finance-intro"
import { PackagesSection } from "@/components/finance/packages-section"
import { AdvantageSection } from "@/components/finance/advantage-section"
import { TestimonialsSection } from "@/components/finance/testimonials-section"
import { EligibilitySection } from "@/components/finance/eligibility-section"
import { ApprovalTimelineSection } from "@/components/finance/approval-timeline-section"
import { FinanceFaqSection } from "@/components/finance/finance-faq-section"
import { FinanceCtaSection } from "@/components/finance/finance-cta-section"
import { FinancePopup } from "@/components/finance/finance-popup"

export const metadata: Metadata = {
  title: "Car Finance and Loan Support | La Grand Events",
  description:
    "La Grand Events offers structured financing support for Kia and Hyundai vehicles, including new purchases, used models, and refinancing requests.",
  keywords: [
    "car finance Brooklyn",
    "Kia Hyundai financing",
    "used car loan",
    "car loan refinancing",
    "auto finance support",
    "vehicle loan approval",
  ],
  openGraph: {
    title: "Car Finance and Loan Support | La Grand Events",
    description:
      "Structured financing support for new purchases, pre-owned vehicles, and refinancing with clear documentation and transparent approval paths.",
    url: "/finance",
    type: "website",
  },
  twitter: {
    title: "Car Finance and Loan Support | La Grand Events",
    description:
      "Structured financing support for Kia and Hyundai vehicles, including new purchases, used models, and refinancing.",
  },
  alternates: {
    canonical: "/finance",
  },
}

export default function FinancePage() {
  return (
    <>
      <PageHeader
        title="Finance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Finance" },
        ]}
      />
      <FinanceIntro />
      <PackagesSection />
      <AdvantageSection />
      <TestimonialsSection />
      <EligibilitySection />
      <ApprovalTimelineSection />
      <FinanceFaqSection />
      <FinanceCtaSection />
      <FinancePopup />
    </>
  )
}
