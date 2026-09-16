"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X, Zap, CreditCard, ChevronRight } from "lucide-react"
import { financeContact } from "@/lib/finance-contact"

export function FinancePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: isMobile ? 0 : 50, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            width: isMinimized
              ? isMobile
                ? 56
                : 64
              : isMobile
                ? "calc(100vw - 32px)"
                : "500px",
          }}
          exit={{ opacity: 0, y: 50, x: isMobile ? 0 : 50, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={`fixed bottom-[5.75rem] right-4 z-[90] flex max-h-[calc(100vh-7rem)] flex-col border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.7)] sm:bottom-[6.25rem] sm:right-6 ${
            isMinimized ? "rounded-full p-0" : "rounded-none bg-zinc-950/95 backdrop-blur-3xl"
          }`}
        >
          {isMinimized ? (
            <motion.a
              layoutId="popup-container"
              href={financeContact.phoneHref}
              title={`Call ${financeContact.phoneDisplay}`}
              className="relative flex h-14 w-14 min-h-14 min-w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_4px_24px_rgba(16,185,129,0.55)] ring-2 ring-emerald-300/50 transition-transform hover:scale-110 hover:bg-emerald-400 active:scale-95 sm:h-16 sm:w-16"
            >
              <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="absolute right-0 top-0 flex h-4 w-4 sm:h-5 sm:w-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-zinc-950 bg-green-500 sm:h-5 sm:w-5" />
              </span>
            </motion.a>
          ) : (
            <motion.div
              layoutId="popup-container"
              className="flex h-full flex-col overflow-hidden rounded-none"
            >
              <div className="relative flex shrink-0 items-center gap-3 bg-gradient-to-br from-amber to-amber-dark p-4 text-black sm:gap-4 sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-none border border-black/10 bg-black/10 backdrop-blur-md sm:h-14 sm:w-14">
                  <Phone className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-black uppercase leading-tight tracking-wider sm:text-lg">
                    Need Finance Assistance?
                  </h3>
                  <div className="mt-0.5 flex items-center gap-1.5 sm:mt-1 sm:gap-2">
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-700 sm:h-2 sm:w-2" />
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-black/70 sm:text-[9px]">
                      Advisors Connected
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-black/60 transition-all hover:bg-black/20 hover:text-black sm:top-5 sm:right-5 sm:h-7 sm:w-7"
                >
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>

              <div className="space-y-3 overflow-y-auto p-4 sm:space-y-4 sm:p-6">
                <div className="grid gap-2 sm:gap-2.5">
                  <div className="group flex cursor-default items-center justify-between rounded-none border border-white/5 bg-white/[0.04] p-2.5 transition-all hover:bg-white/[0.07] sm:p-3.5">
                    <div className="flex items-center gap-2.5 sm:gap-3.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-none bg-amber/15 text-amber sm:h-9 sm:w-9">
                        <Zap className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-white/90 sm:text-[12px]">
                        Fast & Easy Application
                      </span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-amber sm:h-4 sm:w-4" />
                  </div>

                  <div className="group flex cursor-default items-center justify-between rounded-none border border-white/5 bg-white/[0.04] p-2.5 transition-all hover:bg-white/[0.07] sm:p-3.5">
                    <div className="flex items-center gap-2.5 sm:gap-3.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-none bg-amber/15 text-amber sm:h-9 sm:w-9">
                        <CreditCard className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-white/90 sm:text-[12px]">
                        Instant Eligibility Check
                      </span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-amber sm:h-4 sm:w-4" />
                  </div>
                </div>

                <div className="group relative pt-0.5 sm:pt-1">
                  <div className="absolute -inset-1 rounded-none bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-30 blur-md transition duration-1000 group-hover:opacity-60 group-hover:duration-200" />
                  <a
                    href={financeContact.phoneHref}
                    title={`Call ${financeContact.phoneDisplay}`}
                    className="relative flex min-h-11 w-full flex-col items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-white shadow-[0_4px_28px_rgba(16,185,129,0.45)] ring-2 ring-emerald-300/40 transition-all hover:scale-[1.02] hover:bg-emerald-400 active:scale-95 sm:px-6 sm:py-4"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5">
                      <span className="text-xl font-black tracking-tighter sm:text-2xl">
                        {financeContact.phoneDisplay}
                      </span>
                      <Phone className="h-4.5 w-4.5 animate-pulse sm:h-5 sm:w-5" />
                    </div>
                    <p className="mt-1 text-[8px] font-black uppercase tracking-[0.4em] text-emerald-100 sm:text-[9px]">
                      Call Right Now
                    </p>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
