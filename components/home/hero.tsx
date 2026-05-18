import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, SparklesIcon } from "lucide-react"
import { StatCounter } from "@/components/stat-counter"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-foreground flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop"
          alt="Premium Luxury Event Venue"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pt-32 lg:pt-40 pb-20 md:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-none border border-amber/30 bg-amber/5 px-4 py-1.5 text-sm font-medium tracking-wide text-amber uppercase">
          <SparklesIcon className="size-4" />
          Extraordinary Celebrations
        </div>

        <h1 className="text-5xl font-extrabold leading-[1.2] tracking-tight text-white md:text-7xl">
          Crafting Unforgettable <span className="block text-amber mt-2">Moments & Milestones</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
          LA Grand Events specializes in premium event management, luxury weddings, and exclusive corporate galas across New York and beyond.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-none bg-amber px-8 py-6 text-base text-navy font-bold hover:bg-amber-light"
          >
            <Link href="/contact">
              Start Planning
              <ArrowRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none border-white/20 bg-white/10 px-8 py-6 text-base text-white hover:bg-white/25 hover:text-white"
          >
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>

        <div className="mt-20 flex w-full flex-wrap justify-center gap-12 md:gap-24 border-t border-white/10 pt-12">
          {[
            { value: 10, suffix: "+", label: "Years Experience" },
            { value: 500, suffix: "+", label: "Events Hosted" },
            { value: 150, suffix: "+", label: "Trusted Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white md:text-5xl">
                <StatCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-amber uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
