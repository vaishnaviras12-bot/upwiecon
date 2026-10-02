import { Target, Users2, ClipboardCheck, Trophy, HandHeart, Mail, Phone, ExternalLink } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Timeline from '../components/Timeline'
import { starProject as sp } from '../data/starProject'

export default function StarProject() {
  return (
    <PageLayout title="STAR Project Competition">
      <PageHero eyebrow={sp.eyebrow} title={sp.title} subtitle={sp.subtitle} />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="About" title="InnovateHer-2027" />
        <div className="mb-14 space-y-4 text-sm leading-relaxed text-navy-600 sm:text-base">
          {sp.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <SectionHeading eyebrow="Goals" title="Objectives" />
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {sp.objectives.map((o) => (
            <Card key={o.title} title={o.title} icon={Target}>
              {o.body}
            </Card>
          ))}
        </div>

        <SectionHeading eyebrow="UN SDGs" title="SDG Focus Areas" />
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sp.sdgFocus.map((s) => (
            <div key={s.number} className="rounded-xl border border-navy-100 bg-white p-5 shadow-card">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 font-display text-sm font-bold text-navy-900">
                {s.number}
              </span>
              <p className="mt-3 font-display text-base font-bold text-navy-900">{s.title}</p>
              <p className="mt-1 text-sm text-navy-600">{s.body}</p>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="Eligibility" title="Participants" icon={Users2} />
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Card title="Who Can Apply">{sp.participants.who}</Card>
          <Card title="Categories">
            <ul className="list-disc space-y-1 pl-4">
              {sp.participants.categories.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Card>
          <Card title="Team Composition">
            <ul className="list-disc space-y-1 pl-4">
              {sp.participants.team.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Card>
        </div>

        <SectionHeading eyebrow="How to Participate" title={sp.stage1.title} icon={ClipboardCheck} />
        <div className="mb-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Card title="Registration Requirements">
            <ul className="list-disc space-y-1 pl-4">
              {sp.stage1.registrationRequirements.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </Card>
          <Card title="Submission Guidelines">
            <ul className="list-disc space-y-1 pl-4">
              {sp.stage1.submissionGuidelines.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </Card>
        </div>
        <div className="mb-14 flex flex-col items-center gap-4 rounded-xl border border-navy-100 bg-navy-50/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm text-navy-600">Deadline: <span className="font-semibold text-navy-900">{sp.stage1.deadline}</span></p>
            <p className="mt-1 text-xs text-navy-500">{sp.stage1.juryNote}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={sp.stage1.registerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-700">
              Register Team <ExternalLink size={14} />
            </a>
            <a href={sp.stage1.recommendationLetterUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-700 hover:bg-white">
              Recommendation Letter <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <SectionHeading eyebrow="Finals" title={sp.stage2.title} />
        <div className="mb-14 rounded-xl border border-navy-100 bg-white p-6 shadow-card">
          <ul className="list-disc space-y-1 pl-4 text-sm text-navy-600">
            {sp.stage2.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <p className="mt-3 text-sm font-medium text-navy-800">Venue: {sp.stage2.venue}</p>
        </div>

        <SectionHeading eyebrow="Roadmap" title="Timeline" align="center" />
        <div className="mb-16">
          <Timeline items={sp.timeline.map((t) => ({ label: t.title, date: t.date, isFinal: t.date.includes('20th November') }))} />
        </div>

        <SectionHeading eyebrow="Recognition" title="Awards & Recognition" icon={Trophy} />
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Finalist Teams">
            <ul className="list-disc space-y-1 pl-4">{sp.awards.finalistTeams.map((a) => <li key={a}>{a}</li>)}</ul>
          </Card>
          <Card title="Winning Rewards">
            <ul className="space-y-1">
              {sp.awards.winningRewards.map((w) => (
                <li key={w.place} className="flex justify-between border-b border-navy-100 pb-1">
                  <span>{w.place} Place</span><span className="font-semibold">{w.amount}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Mentors">
            <ul className="list-disc space-y-1 pl-4">{sp.awards.mentors.map((a) => <li key={a}>{a}</li>)}</ul>
          </Card>
          <Card title="All Participants">
            <ul className="list-disc space-y-1 pl-4">{sp.awards.allParticipants.map((a) => <li key={a}>{a}</li>)}</ul>
          </Card>
        </div>

        <SectionHeading eyebrow="Get Involved" title="Call for Collaboration" icon={HandHeart} />
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {sp.collaborators.map((c) => (
            <Card key={c.title} title={c.title}>
              <p>{c.body}</p>
              {c.cta && (
                <a href={c.cta.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent-600 hover:underline">
                  {c.cta.label} <ExternalLink size={12} />
                </a>
              )}
            </Card>
          ))}
        </div>

        <SectionHeading eyebrow="Reach Us" title="Contacts" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sp.contacts.map((c) => (
            <div key={c.name} className="rounded-xl border border-navy-100 bg-white p-5 shadow-card">
              <p className="font-semibold text-navy-900">{c.name}</p>
              <p className="mt-2 flex items-center gap-2 text-sm text-navy-600"><Phone size={14} className="text-accent-600" />{c.phone}</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-navy-600"><Mail size={14} className="text-accent-600" /><a href={`mailto:${c.email}`} className="hover:text-accent-600">{c.email}</a></p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
