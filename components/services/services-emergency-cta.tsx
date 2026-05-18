import Image from "next/image"
import { PhoneIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesEmergencyCta() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 md:py-24 text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f524174092?auto=format&fit=crop&q=80&w=2669"
          alt="Luxury Soirée Background"
          fill
          className="object-cover opacity-10 grayscale"
        />
        <div className="absolute left-0 top-0 h-0.5 w-full bg-amber" />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-5 text-center md:px-8 border border-white/10 p-12 bg-zinc-900/90">
        <ScrollReveal>
          <h2 className="text-4xl font-extrabold text-white md:text-5xl mb-6 font-serif">
            Planning a <span className="text-amber italic font-light">Last-Minute Soirée?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70 mb-10 font-light">
            Our elite coordination team specializes in rapid execution. For expedited VIP events requiring immediate attention, bypass the form and reach us directly.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-none bg-amber px-10 py-7 text-lg text-navy font-bold hover:bg-amber-light"
          >
            <Link href="tel:+18022420583" title="Call 802 242 0583">
              <PhoneIcon className="mr-3 size-5" />
              Call Priority Line
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
