import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { RefundPolicyContent } from "@/components/policies/refund-policy-content"

export const metadata: Metadata = {
  title: 'Refund Policy | Quality Service Guarantee',
  description:
    'Read about our refund and cancellation policies at La Grand Events. We are committed to providing top-quality event coordination and customer satisfaction.',
  keywords: [
    'refund policy event planning',
    'service cancellation terms',
    'wedding planning guarantee',
    'refund process event manager',
    'event service refund',
    'la grand events refund',
  ],
  openGraph: {
    title: 'Refund Policy - Satisfaction Guarantee',
    description:
      'Step into quality. Learn about our clear and transparent refund policies for your peace of mind.',
    url: '/policies/refund-policy',
    type: 'website',
  },
  twitter: {
    title: 'Refund Policy - Quality Commitment',
    description:
      'Learn more about our transparent refund and satisfaction policies.',
  },
  alternates: {
    canonical: '/policies/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader
        title="Refund Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies" },
          { label: "Refund Policy" },
        ]}
      />
      <RefundPolicyContent />
    </>
  )
}
