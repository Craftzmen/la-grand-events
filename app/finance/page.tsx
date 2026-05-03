import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { FinanceIntro } from "@/components/finance/finance-intro"
import { FinanceFeatured } from "@/components/finance/finance-featured"
import { FinanceOptions } from "@/components/finance/finance-options"
import { FinanceBenefits } from "@/components/finance/finance-benefits"
import { FinanceTestimonials } from "@/components/finance/finance-testimonials"
import { FinanceCta } from "@/components/finance/finance-cta"

export const metadata: Metadata = {
  title: 'Kia & Hyundai Car Finance in Brooklyn | Prime Auto Deals',
  description:
    'Navigating car finance made easy for Kia and Hyundai. Explore competitive rates, flexible terms, and fast approvals with Prime Auto Deals.',
  keywords: [
    'Kia finance Brooklyn',
    'Hyundai finance Brooklyn',
    'car finance Brooklyn',
    'easy car loans',
    'auto refinancing',
    'low interest car loans',
    'new car finance',
    'used car finance',
    'credit car deals',
    'fast car loan approval',
  ],
  openGraph: {
    title: 'Kia & Hyundai Car Finance - Affordable Automotive Financing',
    description:
      'Specialized financing for Kia and Hyundai. Whether buying new or refinancing, Prime Auto Deals makes it seamless.',
    url: '/finance',
    type: 'website',
  },
  twitter: {
    title: 'Kia & Hyundai Car Finance - Affordable Auto Financing',
    description:
      'Experience seamless car financing for Kia and Hyundai with Prime Auto Deals. Easy rates and flexible terms.',
  },
  alternates: {
    canonical: '/finance',
  },
};

import { FinancePopup } from "@/components/finance/finance-popup"

export default function FinancePage() {
  return (
    <>
      <PageHeader
        title="Car Finance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Finance" },
        ]}
      />

      <FinanceIntro />
      <FinanceFeatured />
      <FinanceOptions />
      <FinanceBenefits />
      <FinanceTestimonials />
      <FinanceCta />
      <FinancePopup />
    </>
  )
}
