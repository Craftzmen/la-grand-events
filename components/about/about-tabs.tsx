import { HistoryIcon, TargetIcon, EyeIcon, CheckCircle2Icon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function AboutTabs() {
  return (
    <SectionWrapper background="muted" padding="default">
      <ScrollReveal>
        <Tabs defaultValue="history" className="mx-auto max-w-5xl">
          <TabsList className="mx-auto mb-10 flex w-full flex-wrap justify-center gap-2 bg-transparent">
            <TabsTrigger value="history" className="gap-2 rounded-none border border-border data-[state=active]:border-amber data-[state=active]:text-amber px-6 py-3 font-semibold uppercase tracking-wider">
              <HistoryIcon className="size-4" />
              History
            </TabsTrigger>
            <TabsTrigger value="mission" className="gap-2 rounded-none border border-border data-[state=active]:border-amber data-[state=active]:text-amber px-6 py-3 font-semibold uppercase tracking-wider">
              <TargetIcon className="size-4" />
              Our Mission
            </TabsTrigger>
            <TabsTrigger value="vision" className="gap-2 rounded-none border border-border data-[state=active]:border-amber data-[state=active]:text-amber px-6 py-3 font-semibold uppercase tracking-wider">
              <EyeIcon className="size-4" />
              Our Vision
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <div className="border border-border bg-white p-10 dark:bg-card md:p-14">
              <h3 className="mb-6 text-3xl font-bold text-navy dark:text-white font-serif">
                Founded in 2009, Brooklyn, NY
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                LA Grand Events was born from a passion for exquisite design and flawless hosting. 
                Starting as a boutique floral and styling studio in Brooklyn, the company quickly grew by 
                focusing on trust, high-end design, and exceptional client relationships. 
                Over the years, we expanded our offerings into comprehensive event management, 
                building a strong reputation for orchestrating some of the most prestigious celebrations in New York.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="mission">
            <div className="border border-border bg-white p-10 dark:bg-card md:p-14">
              <h3 className="mb-6 text-3xl font-bold text-navy dark:text-white font-serif">
                Crafting the Unforgettable
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Our mission is to provide the highest tier of luxury event planning while building deep, lasting relationships with every client. We believe that every milestone deserves unmatched attention to detail, and every host deserves a stress-free, magical experience.
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  "Source the most exclusive venues and vendors",
                  "Design bespoke aesthetics tailored to the client's narrative",
                  "Commit to absolute transparency in budgeting and logistics",
                  "Consistently deliver flawless day-of execution"
                ].map((item) => (
                  <li key={item} className="flex gap-4 border border-border p-4">
                    <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-amber" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="vision">
            <div className="border border-border bg-white p-10 dark:bg-card md:p-14">
              <h3 className="mb-6 text-3xl font-bold text-navy dark:text-white font-serif">
                Redefining the Standard of Luxury
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our vision is to be recognized globally as the premier luxury event management agency, known for our breathtaking aesthetics, unparalleled service, and client trust. We continually aspire to push creative boundaries, setting new industry standards in the event planning experience.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </SectionWrapper>
  )
}
