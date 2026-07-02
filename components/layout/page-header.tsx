import Link from "next/link"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  breadcrumbs: { label: string; href?: string }[]
  className?: string
}

export function PageHeader({ title, breadcrumbs, className }: PageHeaderProps) {
  // Map common pages to their bespoke luxury descriptions to wow the user
  const getPageDescription = (titleStr: string) => {
    const t = titleStr.toLowerCase();
    if (t.includes("about")) {
      return "Crafting legendary moments and elite celebrations with timeless grandeur, absolute discretion, and unmatched artistic vision."
    }
    if (t.includes("service")) {
      return "A meticulously curated portfolio of ultra-luxury event coordination, bespoke styling, and elite venue management."
    }
    if (t.includes("contact")) {
      return "Step into our world of extraordinary celebrations. Connect with our principal coordinators to begin detailing your vision."
    }
    if (t.includes("privacy")) {
      return "Our absolute commitment to your privacy, personal legacy, and data security. Underpinned by principles of total discretion."
    }
    if (t.includes("refund")) {
      return "Clear parameters, absolute transparency, and professional integrity designed to guarantee absolute peace of mind."
    }
    if (t.includes("finance")) {
      return "Structured lending support for new purchases, pre-owned vehicles, and refinancing — with clear documentation and transparent approval paths."
    }
    return "Curating bespoke experiences and legendary celebrations tailored precisely to the desires of our distinguished clientele."
  }

  const description = getPageDescription(title);
  
  // Split title into words to create an asymmetrical, haute-couture editorial layout
  const words = title.split(" ");

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-black pt-40 pb-20 md:pt-48 md:pb-28 border-b border-white/5",
        className
      )}
    >
      {/* Editorial Luxury Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white" />
      </div>



      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 items-center">
          
          {/* Column 1: Asymmetric Editorial Title (Left 7 Columns) */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-amber uppercase">
              <span className="h-[2px] w-8 bg-amber" />
              L'Éxpérience Unique
            </div>
            
            <div className="flex flex-col select-none">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={cn(
                    "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-none",
                    i % 2 === 1 && "pl-8 sm:pl-16 text-amber italic font-light font-serif"
                  )}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Minimalist Info & Breadcrumbs (Right 5 Columns) */}
          <div className="md:col-span-5 md:pl-8 border-l border-white/10 space-y-6">
            <p className="text-white/60 text-lg font-light leading-relaxed">
              {description}
            </p>

            {/* Ultra-clean Luxury Breadcrumb */}
            <nav className="flex flex-wrap items-center gap-2 text-xs tracking-widest uppercase text-white/40">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-amber font-light">→</span>
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/80 font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </section>
  )
}
