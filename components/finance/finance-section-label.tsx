interface FinanceSectionLabelProps {
  label: string
  className?: string
}

export function FinanceSectionLabel({ label, className = "" }: FinanceSectionLabelProps) {
  return (
    <div
      className={`mb-6 inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-2 ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-amber" />
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">{label}</span>
    </div>
  )
}
