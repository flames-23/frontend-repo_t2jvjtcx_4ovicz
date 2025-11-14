export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28 bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-slate-600">{subtitle}</p>
          )}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
