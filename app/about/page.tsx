import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutTabs } from "@/components/about/about-tabs"
import { AboutStats } from "@/components/about/about-stats"
import { AboutValues } from "@/components/about/about-values"
import { AboutCta } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: 'About La Grand Events | Our Story & Values',
  description:
    'Since 2009, La Grand Events has been serving Brooklyn with high-quality event planning solutions. Learn more about our mission to provide transparent and expert wedding coordination.',
  keywords: [
    'about La Grand Events',
    'party planning history',
    'event coordinator team',
    'wedding planning solution and service',
    'trusted event planner Brooklyn',
    'event management expert team',
    'customer service event care',
    'Brooklyn event specialists',
  ],
  openGraph: {
    title: 'About La Grand Events - Our Commitment to Quality',
    description:
      'Step into the story of La Grand Events. From spectacular venues to expert coordination services.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: 'About La Grand Events - Our Commitment',
    description:
      'Step into the story of La Grand Events and our commitment to unforgettable event experiences.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <AboutIntro />
      <AboutTabs />
      <AboutStats />
      <AboutValues />
      <AboutCta />
    </>
  )
}
