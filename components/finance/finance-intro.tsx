import Image from "next/image"
import { DollarSignIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FinanceIntro() {
  return (
    <SectionWrapper>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase">
              <DollarSignIcon className="size-3.5 text-amber" />
              Financing Solutions
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white mb-6">
              Drive Now, <span className="text-amber">Pay Later</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Specializing in personalized financing for <span className="font-bold text-foreground">Kia and Hyundai</span>, we offer
              flexible options to get you behind the wheel of your dream car. Whether it's a new EV6 or a reliable Tucson, our partnerships with top lenders ensure competitive rates tailored to your needs.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="right">
          <div className="relative h-[450px] w-full border border-border overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1718780138801-d93ebf484827?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Kia EV6"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-amber px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">Featured: Kia EV6</span>
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-navy -z-10 dark:bg-amber" />
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
