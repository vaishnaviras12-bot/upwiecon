import { Globe2, Sparkles, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { about } from '../data/conference'

export default function ConferenceOverview() {
  return (
    <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <SectionHeading eyebrow="About the Conference" title="About UPWIECON 2027" />
          <div className="space-y-4 text-sm leading-relaxed text-navy-700 dark:text-slate-300 sm:text-base">
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
                className="flex flex-col items-center justify-center rounded-xl border border-slate-200 dark:border-navy-700 bg-navy-50/60 dark:bg-navy-900/60 p-6 text-center"
              >
                <p className="font-display text-3xl font-bold text-navy-900 dark:text-slate-100">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-600 dark:text-slate-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between border-b border-slate-100 dark:border-navy-800 pb-3">
              <div className="flex items-center gap-2 text-accent-600 dark:text-gold-400">
                <Globe2 size={20} />
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">About IEEE UP Section</p>
              </div>
              <span className="rounded-full bg-accent-600/10 dark:bg-gold-500/10 px-2.5 py-0.5 text-xs font-bold text-accent-600 dark:text-gold-400">
                Est. {about.ieeeUpSection.established}
              </span>
            </div>

            <h3 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100">
              {about.ieeeUpSection.heading}
            </h3>

            <div className="mt-3 space-y-3 text-xs leading-relaxed text-navy-700 dark:text-slate-300 sm:text-sm">
              <p>{about.ieeeUpSection.summary}</p>
              <p>{about.ieeeUpSection.role}</p>
              <p>{about.ieeeUpSection.activities}</p>
            </div>

            {about.ieeeUpSection.officialUrl && (
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-800">
                <a
                  href={about.ieeeUpSection.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-600 dark:text-gold-400 hover:underline"
                >
                  Visit Official IEEE UP Section Website
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold-500/30 bg-gold-500/10 dark:bg-gold-500/5 p-5">
            <Sparkles size={20} className="mt-0.5 shrink-0 text-gold-600 dark:text-gold-400" />
            <p className="text-sm text-navy-800 dark:text-slate-200">
              Organized by <span className="font-semibold">Govt. Women's Institute of Technology, UTU, Dehradun, Uttarakhand</span> — the flagship
              conference of the IEEE UP Section WIE Affinity Group.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
