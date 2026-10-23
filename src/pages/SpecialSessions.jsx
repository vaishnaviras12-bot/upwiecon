import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import PersonCard from '../components/PersonCard'
import { specialSessions } from '../data/specialSessions'

export default function SpecialSessions() {
  return (
    <PageLayout title="Special Sessions">
      <PageHero
        eyebrow="Call for Special Sessions"
        title="Special Sessions"
        subtitle="Join our distinguished chairs and speakers for exclusive presentations on cutting-edge research topics"
      />

      <section className="mx-auto max-w-8xl space-y-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {specialSessions.map((s) => (
          <div
            key={s.number}
            className="rounded-2xl border border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 p-6 sm:p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-gold-400">
              Special Session {s.number}
            </p>
            <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-slate-100 sm:text-2xl">
              {s.title}
            </h2>
            <p className="mt-5 mb-3 text-xs font-semibold uppercase tracking-wide text-navy-500 dark:text-slate-400">
              Special Session Chairs
            </p>
            {s.chairs && s.chairs.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {s.chairs.map((c, idx) => (
                  <PersonCard
                    key={c.name || idx}
                    name={c.name}
                    org={c.org}
                    isBlank={!c.name}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-200 dark:border-navy-800 bg-slate-50/50 dark:bg-navy-850/40 p-4 text-center">
                <p className="text-xs text-navy-500 dark:text-slate-400">
                  Session chairs and organizers will be announced soon.
                </p>
              </div>
            )}
          </div>
        ))}
      </section>
    </PageLayout>
  )
}
