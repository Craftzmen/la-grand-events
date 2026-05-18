import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { PrivacyPolicyContent } from "@/components/policies/privacy-policy-content"

export const metadata: Metadata = {
  title: 'Privacy Policy | La Grand Events',
  description:
    'Learn how La Grand Events collects, uses, and protects your personal information. Your privacy is our priority.',
  keywords: [
    'privacy policy',
    'data protection',
    'la grand events privacy',
    'customer information security',
    'cookie policy event planner',
    'legal compliance',
  ],
  openGraph: {
    title: 'Privacy Policy - Our Commitment to Data Protection',
    description:
      'Step into absolute trust. Learn how we secure your data while providing the best event planning services.',
    url: '/policies/privacy-policy',
    type: 'website',
  },
  twitter: {
    title: 'Privacy Policy - Protecting Your Information',
    description:
      'Read about how we protect your personal data for a secure event management experience.',
  },
  alternates: {
    canonical: '/policies/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Policies" },
          { label: "Privacy Policy" },
        ]}
      />
      <PrivacyPolicyContent />
    </>
  )
}
