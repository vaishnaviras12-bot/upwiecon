import { FileText, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { submission } from '../data/tracks'

export default function Submission() {
  return (
    <PageLayout title="Paper Submission">
      <PageHero eyebrow="Author Guidelines" title="Paper Submission" subtitle={submission.intro} />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-14 flex flex-col items-center gap-4 rounded-2xl border border-navy-100 bg-navy-50/60 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Microsoft CMT Submission Portal
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-navy-900">
              Submit your manuscript electronically
            </h2>
          </div>
          <a
            href={submission.cmtUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-accent-700"
          >
            Submit via CMT <ExternalLink size={16} />
          </a>
        </div>

        <SectionHeading eyebrow="Formatting" title="Submission Requirements" />
        <div className="mb-14 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {submission.requirements.map((r, i) => (
            <div key={i} className="flex items-start gap-2 rounded-lg border border-navy-100 bg-white p-4 text-sm text-navy-600 shadow-card">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-600" />
              {r}
            </div>
          ))}
        </div>
        <div className="mb-14 text-center">
          <a
            href={submission.templateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-2.5 text-sm font-semibold text-navy-700 hover:bg-navy-50"
          >
            <FileText size={16} /> Download IEEE Conference Template
          </a>
        </div>

        <SectionHeading eyebrow="Scope" title="Note to Authors" />
        <div className="mb-14 space-y-4">
          <p className="rounded-lg border border-navy-100 bg-white p-5 text-sm leading-relaxed text-navy-600 shadow-card">
            {submission.noteToAuthors}
          </p>
          <p className="rounded-lg border border-accent-200 bg-accent-50 p-5 text-sm leading-relaxed text-navy-700">
            {submission.outOfScope}
          </p>
        </div>

        <SectionHeading eyebrow="Manuscript Types" title="Article Types" />
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {submission.articleTypes.map((a) => (
            <Card key={a.title} title={a.title} icon={FileText}>
              {a.body}
            </Card>
          ))}
        </div>

        <SectionHeading eyebrow="Citations" title="References" />
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {submission.references.map((r) => (
            <Card key={r.title} title={r.title}>
              {r.body}
            </Card>
          ))}
        </div>

        <SectionHeading eyebrow="Post-Acceptance" title="After Acceptance" />
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {submission.afterAcceptance.map((a) => (
            <Card key={a.title} title={a.title} icon={ShieldCheck}>
              {a.body}
            </Card>
          ))}
        </div>

        <SectionHeading eyebrow="Policies" title="Other Guidelines" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {submission.otherGuidelines.map((g) => (
            <Card key={g.title} title={g.title}>
              {g.body}
            </Card>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
