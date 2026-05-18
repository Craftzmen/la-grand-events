import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ContactCards } from "@/components/contact/contact-cards"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactSidebar } from "@/components/contact/contact-sidebar"

export const metadata: Metadata = {
  title: 'Contact Us | La Grand Events in Brooklyn, NY',
  description:
    'Get in touch with the event experts at La Grand Events. Visit our Brooklyn location, call us, or book an appointment online for complete event planning and wedding coordination.',
  keywords: [
    'contact La Grand Events',
    'event planner in Brooklyn',
    'wedding coordination location',
    'book event consultation',
    'event management number',
    'last-minute party planning',
    'event service contact',
    'customer Support event planning',
  ],
  openGraph: {
    title: 'Contact Us - Get in Touch with Event Planning Experts',
    description:
      'Step into the solution. Visit our Brooklyn office for quality event planning and wedding coordination.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    title: 'Contact Us - Event planning at Your Fingertips',
    description:
      'Reach out to La Grand Events for all your celebration needs. We are here to help.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <ContactCards />

      <SectionWrapper background="muted">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <ContactSidebar />
        </div>
      </SectionWrapper>
    </>
  )
}
