import Image from "next/image"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

const images = [
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200",
    alt: "Corporate Gala Dinner",
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
    alt: "Elegant Wedding Table Setting",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=1200",
    alt: "Floral Arrangement",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    alt: "Reception Venue Lighting",
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  },
]

export function GallerySection() {
  return (
    <SectionWrapper background="muted">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white font-serif">
            A Preview of <span className="text-amber italic font-light">Elegance</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore glimpses of our meticulously styled events and breathtaking venues.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[800px] md:h-[600px] w-full">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden group ${img.className}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
