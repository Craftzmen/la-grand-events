import { SectionWrapper } from "@/components/layout/section-wrapper"
import Link from "next/link"
import { ShieldCheckIcon, EyeIcon, DatabaseIcon, CookieIcon, Share2Icon, ClockIcon, UserCheckIcon, SettingsIcon, MailIcon } from "lucide-react"

export function PrivacyPolicyContent() {
  const sections = [
    {
      icon: <ShieldCheckIcon className="size-6 text-amber" />,
      title: "Introduction",
      content: (
        <p>
          La Grand Events (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) operates{" "}
          <Link
            href="https://lagrandevents.com/"
            className="font-bold text-amber hover:text-amber-light transition-colors underline decoration-amber/30 underline-offset-4"
          >
            lagrandevents.com
          </Link>{" "}
          (the &ldquo;Website&rdquo;). This Privacy Policy describes how
          we collect, use, disclose, and protect the personal information
          of our distinguished clients and visitors. Your privacy is paramount.
        </p>
      )
    },
    {
      icon: <DatabaseIcon className="size-6 text-amber" />,
      title: "Information We Collect",
      content: (
        <div className="space-y-6">
          <p>We collect essential information to provide our premium services:</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900 p-6 border border-zinc-100 dark:border-zinc-800">
              <h3 className="mb-4 font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"><UserCheckIcon className="size-4 text-amber"/> Personal Data</h3>
              <ul className="space-y-2 text-sm">
                <li>• Full Name & Contact details</li>
                <li>• Mailing & Billing address</li>
                <li>• Secure Payment details</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900 p-6 border border-zinc-100 dark:border-zinc-800">
              <h3 className="mb-4 font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2"><EyeIcon className="size-4 text-amber"/> Automated Data</h3>
              <ul className="space-y-2 text-sm">
                <li>• IP address & Browser type</li>
                <li>• Site usage & Analytics</li>
                <li>• Cookie preferences</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <SettingsIcon className="size-6 text-amber" />,
      title: "How We Use Your Data",
      content: (
        <ul className="space-y-3">
          <li className="flex gap-3"><span className="text-amber">✓</span> Provide, operate, and refine our event services</li>
          <li className="flex gap-3"><span className="text-amber">✓</span> Process orders, deposits, and payments securely</li>
          <li className="flex gap-3"><span className="text-amber">✓</span> Communicate critical updates regarding your event</li>
          <li className="flex gap-3"><span className="text-amber">✓</span> Personalize your digital and physical experience</li>
        </ul>
      )
    },
    {
      icon: <CookieIcon className="size-6 text-amber" />,
      title: "Cookies and Tracking",
      content: (
        <p>
          We utilize minimal tracking technologies to enhance user experience and site performance. You retain full control to disable these through your browser, though it may limit some personalized features on our platform.
        </p>
      )
    },
    {
      icon: <Share2Icon className="size-6 text-amber" />,
      title: "Information Sharing",
      content: (
        <div className="space-y-4">
          <p>We share data strictly on a need-to-know basis with trusted partners:</p>
          <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
            <li>Secure payment processors</li>
            <li>Essential event vendors (with your explicit consent)</li>
            <li>Legal authorities when compelled by law</li>
          </ul>
          <div className="mt-6 inline-block rounded-lg bg-amber/10 px-4 py-2 text-sm font-semibold text-amber border border-amber/20">
            We never sell your personal information.
          </div>
        </div>
      )
    },
    {
      icon: <ClockIcon className="size-6 text-amber" />,
      title: "Data Retention & Rights",
      content: (
        <p>
          Your data is retained only as long as necessary for the successful execution of your event and legal compliance. You maintain the right to access, correct, or request the deletion of your personal records at any time.
        </p>
      )
    },
    {
      icon: <MailIcon className="size-6 text-amber" />,
      title: "Contact Privacy Team",
      content: (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900/50 mt-4">
          <p className="mb-4 text-zinc-900 dark:text-white font-medium">For any privacy-related inquiries:</p>
          <div className="space-y-2 text-sm">
            <p>Email: <a href="mailto:query@primeautodeals.live" className="text-amber hover:underline">query@primeautodeals.live</a></p>
            <p>Address: 2415 SOUTH HOWELL A VE, MILWAUKEE, WI 53207, United States of America</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <SectionWrapper>
      <article className="mx-auto max-w-4xl py-10 md:py-16">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-zinc-900 dark:text-white">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={index} className="group">
              <div className="flex items-start gap-5 md:gap-8">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform group-hover:scale-110">
                  {section.icon}
                </div>
                <div className="pt-2 flex-1">
                  <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100">{section.title}</h2>
                  <div className="text-lg leading-relaxed text-muted-foreground font-light">
                    {section.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </SectionWrapper>
  )
}
