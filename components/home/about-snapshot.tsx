import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, SparklesIcon, CalendarHeartIcon, StarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StatCounter } from "@/components/stat-counter"

export function AboutSnapshot() {
  return (
    <SectionWrapper background="muted" className="overflow-hidden">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <div className="relative h-[650px] w-full">
            {/* Background Accent */}
            <div className="absolute top-10 left-10 h-full w-full bg-navy/5 dark:bg-amber/5 border border-border" />
            
            {/* Main Image */}
            <div className="absolute top-0 right-10 h-[80%] w-[85%] border border-border bg-muted shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2670&auto=format&fit=crop"
                alt="Luxury Wedding Setup"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping Image */}
            <div className="absolute bottom-0 left-0 h-[45%] w-[60%] border-4 border-white dark:border-background bg-muted shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2669&auto=format&fit=crop"
                alt="Corporate Gala Event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="pl-0 lg:pl-6">
            <div className="mb-6 inline-flex items-center gap-2 border border-border bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-foreground uppercase dark:bg-black">
              <SparklesIcon className="size-3.5 text-amber" />
              Our Story
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white mb-6 leading-tight">
              Designing <span className="text-amber italic font-serif font-light">Extraordinary</span> Experiences.
            </h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              At LA Grand Events, we believe every celebration should be a masterpiece. From intimate private gatherings to grand-scale corporate galas and luxury weddings, our boutique approach ensures every detail is curated with elegance, precision, and passion.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10 border-y border-border py-8">
              {[
                { value: 10, suffix: "+", label: "Years Creating Magic", icon: StarIcon },
                { value: 100, suffix: "%", label: "Client Satisfaction", icon: CalendarHeartIcon },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-amber pl-5">
                  <div className="text-4xl font-light font-serif text-navy dark:text-white mb-2">
                    <StatCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-none bg-navy text-white px-8 py-6 font-bold hover:bg-navy-light dark:bg-white dark:text-navy"
            >
              <Link href="/about">
                Meet The Team
                <ArrowRightIcon className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
