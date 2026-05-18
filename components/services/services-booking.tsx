import { CalendarIcon, ArrowRightIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export function ServicesBooking() {
  return (
    <SectionWrapper background="muted">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="mb-4 inline-flex items-center gap-2 border border-border bg-white px-3 py-1 text-xs font-semibold tracking-widest text-foreground uppercase dark:bg-black">
            <CalendarIcon className="size-3.5 text-amber" />
            Inquire
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-navy dark:text-white mb-6 font-serif">
            Schedule a <span className="text-amber italic font-light">Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us about your upcoming occasion, and a dedicated coordinator will connect with you to discuss bringing your vision to life.
          </p>
          <ul className="space-y-4">
            {[
              "Complimentary 45-minute vision session",
              "Access to exclusive venue portfolios",
              "Bespoke transparent proposals",
              "Uncompromising privacy and discretion",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 border border-border p-3 bg-white dark:bg-card">
                <div className="size-2 shrink-0 bg-amber" />
                <span className="font-semibold text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="border border-border bg-white p-10 dark:bg-card">
            <h3 className="mb-8 text-2xl font-bold uppercase tracking-wide text-navy dark:text-white border-b-2 border-amber inline-block pb-2">
              Event Inquiry
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
                    Event Type
                  </label>
                  <Select>
                    <SelectTrigger className="h-12 rounded-none border border-border focus:ring-0 focus:border-amber bg-white dark:bg-black">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-border">
                      <SelectGroup>
                        <SelectItem value="wedding">Luxury Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Gala / Event</SelectItem>
                        <SelectItem value="milestone">Private Milestone</SelectItem>
                        <SelectItem value="sourcing">Venue Sourcing Only</SelectItem>
                        <SelectItem value="other">Other Celebration</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
                    Target Date
                  </label>
                  <Input type="date" className="h-12 rounded-none border border-border focus:ring-0 focus:border-amber bg-white dark:bg-black" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-foreground/80">
                  Estimated Guest Count
                </label>
                <Select>
                  <SelectTrigger className="h-12 rounded-none border border-border focus:ring-0 focus:border-amber bg-white dark:bg-black">
                    <SelectValue placeholder="Select gauge" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border">
                    <SelectGroup>
                      <SelectItem value="micro">Intimate (Under 50)</SelectItem>
                      <SelectItem value="medium">Medium (50 - 150)</SelectItem>
                      <SelectItem value="large">Large (150 - 300)</SelectItem>
                      <SelectItem value="grand">Grand (300+)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button className="mt-4 w-full rounded-none bg-amber px-8 py-6 text-base font-bold text-navy hover:bg-amber-light">
                Request Consultation
                <ArrowRightIcon className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
