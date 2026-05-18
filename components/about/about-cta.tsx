import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutCta() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="relative overflow-hidden bg-navy p-12 text-center md:p-20 text-white">
          <div className="absolute inset-0 border border-white/10 m-4" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold md:text-5xl mb-6 font-serif">
              Ready to Experience the <span className="text-amber italic font-light">Difference?</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/70 mb-10 font-light">
              Contact us today and discover why elite clients across New York trust LA Grand Events
              with their most important occasions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-amber px-8 py-6 text-base text-navy font-bold hover:bg-amber-light"
              >
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRightIcon className="ml-2 size-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none border-2 border-white/30 bg-transparent px-8 py-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/services">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
