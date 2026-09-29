import { Fragment } from 'react'
import { AlertCircle, ArrowRight } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import { registrationNotes, feeCategories, registrationFormUrl } from '../data/registration'

export default function Registration() {
  return (
    <PageLayout title="Registration">
      <PageHero
        eyebrow="Secure Your Spot"
        title="Registration"
        subtitle="Secure your spot at the premier academic conference"
      />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8 space-y-2 rounded-xl border border-gold-500/40 bg-gold-500/5 p-5">
          {registrationNotes.map((n, i) => (
            <p key={i} className="flex items-start gap-2 text-sm text-navy-700">
              <AlertCircle size={16} className="mt-0.5 shrink-0 text-gold-600" />
              {n}
            </p>
          ))}
        </div>

        <p className="mb-3 text-xs font-medium italic text-navy-500">
          ⟵ Scroll horizontally to see all fees ⟶
        </p>

        <div className="overflow-x-auto rounded-xl border border-navy-100 shadow-card">
          <table className="min-w-[900px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th rowSpan={2} className="px-4 py-3 font-semibold align-bottom">Category</th>
                <th rowSpan={2} className="px-4 py-3 font-semibold align-bottom">Membership</th>
                <th colSpan={2} className="px-4 py-2 text-center font-semibold border-l border-white/10">
                  Early Bird (Before 1 Sep 2026)
                </th>
                <th colSpan={2} className="px-4 py-2 text-center font-semibold border-l border-white/10">
                  Registration after 1 Sep 2026
                </th>
              </tr>
              <tr className="bg-navy-800 text-white text-xs">
                <th className="px-4 py-2 font-medium border-l border-white/10">Indian</th>
                <th className="px-4 py-2 font-medium">Foreign</th>
                <th className="px-4 py-2 font-medium border-l border-white/10">Indian</th>
                <th className="px-4 py-2 font-medium">Foreign</th>
              </tr>
            </thead>
            <tbody>
              {feeCategories.map((cat, ci) => (
                <Fragment key={cat.category}>
                  {cat.rows.map((row, ri) => (
                    <tr
                      key={`${cat.category}-${row.membership}`}
                      className={`${ci % 2 === 0 ? 'bg-white' : 'bg-navy-50/50'} border-b border-navy-100`}
                    >
                      {ri === 0 && (
                        <td
                          rowSpan={cat.rows.length}
                          className="px-4 py-3 align-top font-semibold text-navy-900"
                        >
                          {cat.category}
                        </td>
                      )}
                      <td className="px-4 py-3 text-navy-600">{row.membership}</td>
                      <td className="px-4 py-3 font-medium text-navy-800">{row.earlyIndian}</td>
                      <td className="px-4 py-3 font-medium text-navy-800">{row.earlyForeign}</td>
                      <td className="px-4 py-3 font-medium text-navy-800">{row.lateIndian}</td>
                      <td className="px-4 py-3 font-medium text-navy-800">{row.lateForeign}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <a
            href={registrationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-accent-700"
          >
            Register Now <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
