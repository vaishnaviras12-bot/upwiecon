import { ExternalLink, Mail, Phone, ShieldCheck, Trophy } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Timeline from '../components/Timeline'
import { sustainAThon as sa } from '../data/sustainAThon'

export default function SustainAThon() {
  return (
    <PageLayout title="Sustain-a-thon 2026">
      <PageHero eyebrow={sa.eyebrow} title={sa.title} subtitle={sa.subtitle} />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="About" title="Grand Challenge Overview" />
        <div className="mb-14 space-y-4 text-sm leading-relaxed text-navy-600 sm:text-base">
          {sa.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <SectionHeading eyebrow="Who Can Apply" title="Eligibility Criteria" icon={ShieldCheck} />
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sa.eligibility.map((e) => (
            <Card key={e.title} title={e.title}>{e.body}</Card>
          ))}
        </div>

        <SectionHeading eyebrow="Theme" title={sa.grandChallengeTheme.title} />
        <div className="mb-14 space-y-3 rounded-xl border border-navy-100 bg-white p-6 text-sm leading-relaxed text-navy-600 shadow-card">
          {sa.grandChallengeTheme.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <SectionHeading eyebrow="Focus Areas" title="Challenge Tracks" align="center" />
        <div className="mb-16 space-y-10">
          {sa.tracks.map((t) => (
            <div key={t.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <h3 className="font-display text-lg font-bold text-navy-900 sm:text-xl">{t.title}</h3>
              <p className="mt-2 text-sm text-navy-600">{t.intro}</p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {t.items.map((it, i) => (
                  <div key={i} className="rounded-lg border border-navy-100 bg-navy-50/50 p-4 text-sm text-navy-700">
                    {it.title && <p className="mb-1 font-semibold text-navy-900">{it.title}</p>}
                    <p>{it.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Judging" title="Evaluation Framework" />
        <div className="mb-14 overflow-hidden rounded-xl border border-navy-100 shadow-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-4 py-3 font-semibold">Criterion</th>
                <th className="px-4 py-3 font-semibold">Weight</th>
              </tr>
            </thead>
            <tbody>
              {sa.evaluationFramework.map((e, i) => (
                <tr key={e.criterion} className={i % 2 === 0 ? 'bg-white' : 'bg-navy-50/50'}>
                  <td className="px-4 py-3 text-navy-700">{e.criterion}</td>
                  <td className="px-4 py-3 font-semibold text-navy-900">{e.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <SectionHeading eyebrow="Recognition" title="Awards" icon={Trophy} />
        <div className="mb-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {sa.awards.map((a) => (
            <div key={a.title} className="rounded-xl border border-gold-500/30 bg-gold-500/5 p-6 text-center">
              <p className="font-display text-lg font-bold text-navy-900">{a.title}</p>
              <p className="mt-2 text-2xl font-bold text-gold-600">{a.amount}</p>
            </div>
          ))}
        </div>
        <p className="mb-14 text-center text-sm italic text-navy-500">{sa.awardsNote}</p>

        <SectionHeading eyebrow="Roadmap" title="Timeline" align="center" />
        <div className="mb-16">
          <Timeline
            items={sa.timeline.map((t) => ({
              label: t.title,
              date: t.date,
              isFinal: t.date.includes('20th November'),
            }))}
          />
        </div>

        <div className="mb-14 text-center">
          <a
            href={sa.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-accent-700"
          >
            Register Now <ExternalLink size={16} />
          </a>
        </div>

        <SectionHeading eyebrow="Reach Us" title="Contacts" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sa.contacts.map((c) => (
            <div key={c.name} className="rounded-xl border border-navy-100 bg-white p-5 shadow-card">
              <p className="font-semibold text-navy-900">{c.name}</p>
              <p className="text-xs text-navy-500">{c.org}</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-navy-600"><Phone size={14} className="text-accent-600" />{c.phone}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-navy-600"><Mail size={14} className="text-accent-600" /><a href={`mailto:${c.email}`} className="hover:text-accent-600">{c.email}</a></p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
