import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServicesBooking } from "@/components/services/services-booking"
import { ServicesEmergencyCta } from "@/components/services/services-emergency-cta"

export const metadata: Metadata = {
  title: 'Event Management & Wedding Planning Services | La Grand Events',
  description:
    'Professional event management and planning services in Brooklyn. Wedding coordination, corporate events, venue selection, and day-of management. Making your events truly spectacular.',
  keywords: [
    'event management services',
    'wedding planning specialists',
    'corporate event coordination',
    'venue selection experts',
    'day-of coordination service',
    'party planning Brooklyn',
    'custom event design',
    'expert event planner service',
  ],
  openGraph: {
    title: 'Professional Event Management & Planning Services',
    description:
      'Step into elegance. Our expert planners in Brooklyn provide comprehensive coordination for your special events.',
    url: '/services',
    type: 'website',
  },
  twitter: {
    title: 'Event Management & Planning - Professional Services',
    description:
      'Ensure your event runs flawlessly with expert planning and coordination.',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <ServicesGrid />
      <ServicesBooking />
      <ServicesEmergencyCta />
    </>
  )
}
