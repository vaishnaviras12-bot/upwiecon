import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import PersonCard from '../components/PersonCard'
import { specialSessions } from '../data/specialSessions'

export default function SpecialSessions() {
  return (
    <PageLayout title="Special Sessions">
      <PageHero
        eyebrow="Call for Special Sessions"
        title="Special Sessions"
        subtitle="Join our distinguished speakers for exclusive presentations on cutting-edge topics and innovative research"
      />

      <section className="mx-auto max-w-8xl space-y-14 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {specialSessions.map((s) => (
          <div key={s.number} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Special Session {s.number}
            </p>
            <h2 className="mt-2 font-display text-xl font-bold text-navy-900 sm:text-2xl">
              {s.title}
            </h2>
            <p className="mt-5 mb-3 text-xs font-semibold uppercase tracking-wide text-navy-500">
              Special Session Chairs
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.chairs.map((c) => (
                <PersonCard key={c.name} name={c.name} org={c.org} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageLayout>
  )
}
