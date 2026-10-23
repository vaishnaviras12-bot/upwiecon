import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import PersonCard from '../components/PersonCard'
import { nationalSpeakers, internationalSpeakers } from '../data/speakers'

export default function Speakers() {
  return (
    <PageLayout title="Speakers">
      <PageHero
        eyebrow="UPWIECON 2027 | International Conference on Emerging Technologies"
        title="Speakers"
        subtitle="Distinguished national and international keynotes and domain experts"
      />

      <section className="mx-auto max-w-8xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 rounded-xl border border-gold-500/30 bg-gold-500/10 dark:bg-gold-500/5 p-4 sm:p-5 text-center shadow-sm">
          <p className="text-sm font-semibold text-navy-800 dark:text-gold-300">
            Speakers list and schedule details — Stay tuned for final session announcements.
          </p>
        </div>

        <SectionHeading eyebrow="National Speakers" title="Distinguished Leaders and Experts" />
        <div className="mb-16">
          {nationalSpeakers.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nationalSpeakers.map((s, idx) => (
                <PersonCard
                  key={s.name || idx}
                  name={s.name}
                  role={s.role}
                  org={s.org}
                  isBlank={!s.name}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 dark:border-navy-700 bg-white/50 dark:bg-navy-900/40 p-8 text-center">
              <p className="text-sm font-medium text-navy-600 dark:text-slate-400">
                National keynotes and distinguished speakers will be announced soon.
              </p>
            </div>
          )}
        </div>

        <SectionHeading eyebrow="International Speakers" title="Global Experts and Leaders" />
        <div>
          {internationalSpeakers.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {internationalSpeakers.map((s, idx) => (
                <PersonCard
                  key={s.name || idx}
                  name={s.name}
                  role={s.role}
                  org={s.org}
                  isBlank={!s.name}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 dark:border-navy-700 bg-white/50 dark:bg-navy-900/40 p-8 text-center">
              <p className="text-sm font-medium text-navy-600 dark:text-slate-400">
                International keynotes and distinguished speakers will be announced soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
