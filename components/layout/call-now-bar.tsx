import Link from "next/link"
import { PhoneIcon } from "lucide-react"
import { siteContact } from "@/lib/site-contact"

export function CallNowBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[500] border-t border-amber/30 bg-zinc-950/95 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Call now"
    >
      <Link
        href={siteContact.phoneHref}
        title={`Call ${siteContact.phoneDisplay}`}
        className="flex min-h-14 w-full items-center justify-center gap-3 rounded-none bg-amber px-6 text-lg font-black uppercase tracking-wide text-black shadow-lg transition active:scale-[0.98] hover:bg-amber-light sm:text-xl"
      >
        <PhoneIcon className="size-6 shrink-0" aria-hidden />
        <span>Call Now</span>
        <span className="hidden font-bold normal-case tracking-normal sm:inline">· {siteContact.phoneDisplay}</span>
      </Link>
    </div>
  )
}
