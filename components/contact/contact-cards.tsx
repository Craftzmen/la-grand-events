import { PhoneIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { siteContact } from "@/lib/site-contact"

export function ContactCards() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-lg">
        <ScrollReveal>
          <Link
            href={siteContact.phoneHref}
            title={`Call ${siteContact.phoneDisplay}`}
            className="flex min-h-[180px] w-full flex-col items-center justify-center border border-border bg-white p-10 text-center transition-colors hover:border-amber active:opacity-90 dark:bg-card"
          >
            <div className="mb-6 flex size-16 items-center justify-center bg-navy text-amber">
              <PhoneIcon className="size-6" />
            </div>
            <h3 className="mb-3 text-xl font-bold uppercase tracking-wider text-navy dark:text-white">Call Us</h3>
            <p className="text-lg font-bold text-amber">{siteContact.phoneDisplay}</p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Tap anywhere on this card to call</p>
          </Link>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
