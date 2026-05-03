import Image from "next/image"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const vehicles = [
  {
    name: "Hyundai Sonata",
    image: "https://images.unsplash.com/photo-1689221590315-514bb87b16e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    brand: "Hyundai"
  },
  {
    name: "Hyundai Tucson",
    image: "https://images.unsplash.com/photo-1705624843697-4461f9dce482?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    brand: "Hyundai"
  },
  {
    name: "Kia Sportage",
    image: "https://images.unsplash.com/photo-1693456356273-b0bfab25c4bf?q=80&w=1660&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    brand: "Kia"
  }
]

export function FinanceFeatured() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-navy dark:text-white mb-4">
            Specialized Financing for <span className="text-amber">Premium Models</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            We provide exclusive finance rates and flexible terms for the latest Kia and Hyundai models. 
            Get approved today for these and many more.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-3">
        {vehicles.map((vehicle, i) => (
          <ScrollReveal key={vehicle.name} delay={i * 100}>
            <div className="group relative overflow-hidden border border-border bg-card">
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber">
                  {vehicle.brand}
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white">
                  {vehicle.name}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground/70">
                  <div className="h-px flex-1 bg-border" />
                  <span>Available Now</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
