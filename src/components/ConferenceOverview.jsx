import { Globe2, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { about } from '../data/conference'

export default function ConferenceOverview() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <SectionHeading eyebrow="About the Conference" title="About UPWIECON 2027" />
          <div className="space-y-4 text-sm leading-relaxed text-navy-600 sm:text-base">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center rounded-xl border border-navy-100 bg-navy-50/60 p-6 text-center"
              >
                <p className="font-display text-3xl font-bold text-navy-900">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-navy-100 bg-white p-6 shadow-card">
            <div className="mb-3 flex items-center gap-2 text-accent-600">
              <Globe2 size={20} />
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">About IEEE UP Section</p>
            </div>
            <p className="font-display text-2xl font-bold text-navy-900">
              {about.ieeeUpSection.established}
              <span className="ml-2 text-sm font-medium text-navy-500">Est.</span>
            </p>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-navy-600">
              {about.ieeeUpSection.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold-500/30 bg-gold-500/5 p-5">
            <Sparkles size={20} className="mt-0.5 shrink-0 text-gold-600" />
            <p className="text-sm text-navy-700">
              Organized by <span className="font-semibold">Govt. Women's Institute of Technology, UTU, Dehradun, Uttarakhand</span> — the flagship
              conference of the IEEE UP Section WIE Affinity Group.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
