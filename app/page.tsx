import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { HomeServices } from "@/components/home/services-section"
import { AboutSnapshot } from "@/components/home/about-snapshot"
import { ProcessSection } from "@/components/home/process-section"
import { GallerySection } from "@/components/home/gallery-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaBanner } from "@/components/home/cta-banner"

export const metadata: Metadata = {
  title: 'La Grand Events | Premium Event Planning in Brooklyn, NY',
  description:
    'Experience the best in event management and luxury weddings. At La Grand Events, we combine creativity with pristine organization to make your events spectacular.',
  keywords: [
    'Brooklyn event planning',
    'expert wedding coordination',
    'luxury party planner',
    'venue selection',
    'wedding planning Brooklyn',
    'corporate gala management',
    'event design specialists',
    'luxury event planners',
  ],
  openGraph: {
    title: 'La Grand Events - Your Trusted Event Planning Partner',
    description:
      'Step into luxury event management. Our experts in Brooklyn provide top-tier planning and coordination.',
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'La Grand Events - Premium Event Planning',
    description:
      'Where creativity meets expertise in event management.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <HomeServices />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
