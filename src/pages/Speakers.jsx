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
      />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-12 rounded-xl border border-gold-500/30 bg-gold-500/5 p-5 text-center">
          <p className="text-sm font-semibold text-navy-700">
            Will be available soon — stay tuned for updates.
          </p>
        </div>

        <SectionHeading eyebrow="National Speakers" title="Distinguished Leaders and Experts" />
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nationalSpeakers.map((s) => (
            <PersonCard key={s.name} name={s.name} role={s.role} org={s.org} />
          ))}
        </div>

        <SectionHeading eyebrow="International Speakers" title="Global Experts and Leaders" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {internationalSpeakers.map((s) => (
            <PersonCard key={s.name} name={s.name} role={s.role} org={s.org} />
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
