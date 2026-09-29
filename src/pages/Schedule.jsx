import { Clock } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'

export default function Schedule() {
  return (
    <PageLayout title="Conference Schedule">
      <PageHero eyebrow="Sessions and Timings" title="Conference Schedule" />
      <section className="mx-auto max-w-8xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl border border-navy-100 bg-navy-50/60 p-10">
          <Clock size={40} className="text-accent-600" />
          <h2 className="font-display text-xl font-bold text-navy-900">Will be available soon</h2>
          <p className="text-sm text-navy-500">Stay tuned for updates</p>
        </div>
      </section>
    </PageLayout>
  )
}
