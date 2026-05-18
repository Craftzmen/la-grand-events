import Image from "next/image"
import { SparklesIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutIntro() {
  return (
    <SectionWrapper>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="relative h-[500px] w-full border border-border">
            <Image 
              src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Event Design"
              fill
              className="object-cover"
            />
            <div className="absolute -top-6 -left-6 h-32 w-32 bg-amber -z-10" />
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="right">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase">
              <SparklesIcon className="size-3.5 text-amber" />
              Who We Are
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white mb-6 font-serif">
              Creating <span className="text-amber italic font-light">Extraordinary</span> Memories
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              At LA Grand Events, we believe celebrations are the punctuation marks of life. Our mission is to transform your distinct vision into a flawless reality through meticulous planning, exclusive venue sourcing, and high-end design.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With our expert guidance, orchestrating a luxury wedding, prestigious corporate gala, or an intimate private milestone is completely seamless. We pride ourselves on executing sheer elegance into every occasion.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
