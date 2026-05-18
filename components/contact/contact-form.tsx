import { MailIcon, SendIcon, SparklesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactForm() {
  return (
    <ScrollReveal direction="left">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-950 p-8 sm:p-12 shadow-2xl">

        
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber/20 bg-amber/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-amber uppercase">
            <SparklesIcon className="size-3.5" />
            Let's connect
          </div>
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold text-white font-serif tracking-tight">
            Design Your <span className="text-amber italic font-light">Dream Event</span>
          </h2>
          <p className="mb-10 text-white/60 text-lg font-light max-w-lg">
            Fill out the form below and our lead coordinator will be in touch within 24 hours to begin planning.
          </p>

          <form className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold tracking-wide text-white/90">
                Full Name
              </label>
              <Input
                placeholder="Your name"
                className="h-14 rounded-xl border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 focus-visible:border-amber focus-visible:ring-1 focus-visible:ring-amber transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold tracking-wide text-white/90">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                className="h-14 rounded-xl border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 focus-visible:border-amber focus-visible:ring-1 focus-visible:ring-amber transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold tracking-wide text-white/90">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="(888) 000-0000"
                className="h-14 rounded-xl border-white/10 bg-white/5 px-4 text-white placeholder:text-white/30 focus-visible:border-amber focus-visible:ring-1 focus-visible:ring-amber transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold tracking-wide text-white/90">
                Event Type
              </label>
              <Select>
                <SelectTrigger className="h-14 rounded-xl border-white/10 bg-white/5 px-4 text-white focus:border-amber focus:ring-1 focus:ring-amber transition-all">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-zinc-900 text-white">
                  <SelectGroup>
                    <SelectItem value="wedding">Luxury Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Gala</SelectItem>
                    <SelectItem value="milestone">Private Milestone</SelectItem>
                    <SelectItem value="sourcing">Venue Sourcing</SelectItem>
                    <SelectItem value="other">Other Inquiry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div className="sm:col-span-2 space-y-2">
              <label className="text-sm font-semibold tracking-wide text-white/90">
                Event Details & Vision
              </label>
              <Textarea
                placeholder="Tell us about your estimated guest count, preferred dates, and initial ideas..."
                className="min-h-[160px] resize-none rounded-xl border-white/10 bg-white/5 p-4 text-white placeholder:text-white/30 focus-visible:border-amber focus-visible:ring-1 focus-visible:ring-amber transition-all"
              />
            </div>
            
            <div className="sm:col-span-2 mt-4">
              <Button className="h-14 w-full rounded-xl bg-amber text-lg font-bold text-black shadow-lg shadow-amber/20 transition-all hover:bg-amber-light hover:shadow-amber/40 hover:-translate-y-0.5 sm:w-auto sm:px-12">
                <SendIcon className="mr-2 size-5" />
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ScrollReveal>
  )
}
