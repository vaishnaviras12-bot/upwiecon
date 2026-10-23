const sponsors = [
  { name: '', logo: null },
  { name: '', logo: null },
  { name: '', logo: null },
  { name: '', logo: null },
]

export default function SponsorStrip() {
  return (
    <section className="border-y border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-950 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <p className="mb-8 text-center text-xl font-bold uppercase tracking-[0.16em] text-slate-700 dark:text-slate-200 sm:text-2xl">
          Our Sponsors
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 sm:gap-6 lg:gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.name || index}
              className="flex min-h-[140px] flex-col items-center justify-center rounded-xl border border-slate-200 dark:border-navy-800 bg-navy-50/40 dark:bg-navy-900/60 p-4 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex h-20 w-full items-center justify-center">
                {sponsor.logo && (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-20 max-w-[90%] object-contain"
                  />
                )}
              </div>
              {sponsor.name && (
                <p className="mt-2 text-center text-sm font-bold tracking-wide text-navy-800 dark:text-slate-200">
                  {sponsor.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}