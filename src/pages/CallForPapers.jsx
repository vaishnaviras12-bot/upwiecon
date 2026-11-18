import { Cpu, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { callForPapersMeta, tracks } from '../data/tracks'

const plagiarismRules = [
  'All submitted papers must represent original research work and must properly acknowledge previously published work.',
  'Authors must provide appropriate citations and references whenever they use ideas, text, data, figures, tables or results from other sources.',
  'Direct copying of content from another source without proper quotation and attribution is prohibited.',
  'Paraphrasing another author\'s work without appropriate citation is also considered plagiarism.',
  'Self-plagiarism, including substantial reuse of an author\'s previously published work without disclosure and proper citation, is prohibited.',
  'Duplicate or simultaneous submission of substantially the same manuscript to multiple conferences or journals is not permitted.',
  'Authors must obtain necessary permissions before reproducing copyrighted material.',
  'All submitted papers may undergo plagiarism and similarity screening using appropriate tools.',
  'Papers found to violate publication ethics may be rejected or withdrawn from conference proceedings, subject to applicable IEEE policies.',
]

export default function CallForPapers() {
  return (
    <PageLayout title="Call for Papers">
      <PageHero eyebrow={callForPapersMeta.eyebrow} title="Call for Papers" subtitle={callForPapersMeta.recordNumber} />

      <section className="mx-auto max-w-8xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-16">
        {/* TRACKS SECTION */}
        <div>
          <SectionHeading eyebrow="Tracks" title="Call for Papers" subtitle={callForPapersMeta.intro} />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t) => (
              <Card key={t.title} title={t.title} icon={Cpu}>
                {t.body}
              </Card>
            ))}
          </div>
        </div>

        {/* PLAGIARISM AND PUBLICATION ETHICS SECTION */}
        <div>
          <SectionHeading
            eyebrow="Publication Ethics"
            title="Plagiarism and Publication Ethics"
            subtitle="IEEE UPWIECON 2027 is committed to upholding the highest standards of scientific integrity and research publication ethics."
          />

          <div className="mt-8 rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-navy-800 pb-4">
              <div className="rounded-xl bg-accent-600/10 dark:bg-gold-500/10 p-2.5 text-accent-600 dark:text-gold-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100">
                  Ethical Submission Guidelines for Authors
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  All authors must adhere strictly to IEEE publication policies and integrity principles
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm text-navy-800 dark:text-slate-200">
              {plagiarismRules.map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-100 dark:border-navy-800 bg-slate-50/60 dark:bg-navy-850/50 p-4 transition-colors hover:border-slate-200 dark:hover:border-navy-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-xs sm:text-sm">{rule}</span>
                </li>
              ))}
            </ul>

            {/* Official IEEE Plagiarism Guidelines Link */}
            <div className="pt-4 border-t border-slate-100 dark:border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                For complete details on IEEE rights, responsibilities, and plagiarism investigation processes:
              </p>
              <a
                href="https://www.ieee.org/publications/rights/plagiarism"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-navy-900 dark:bg-navy-800 hover:bg-navy-800 dark:hover:bg-navy-700 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all shrink-0"
              >
                <span>Read IEEE's Official Plagiarism Guidelines</span>
                <ExternalLink className="h-3.5 w-3.5 text-gold-400" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-navy-500 dark:text-slate-400">
          © 2027 UPWIECON 2027. All rights reserved. | Submit your papers and be part of cutting-edge research!
        </p>
      </section>
    </PageLayout>
  )
}
