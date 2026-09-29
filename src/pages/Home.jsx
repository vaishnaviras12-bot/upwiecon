import PageLayout from '../components/PageLayout'
import Hero from '../components/Hero'
import SponsorStrip from '../components/SponsorStrip'
import ConferenceOverview from '../components/ConferenceOverview'
import Highlights from '../components/Highlights'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import { importantDates, importantDatesNote } from '../data/conference'
import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <PageLayout title="Home">
      <Hero />
      <SponsorStrip />
      <ConferenceOverview />
      <Highlights />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="Timeline" title="Important Dates" align="center" />
        <Timeline items={importantDates} />
        <p className="mx-auto mt-6 max-w-xl text-center text-xs italic text-navy-500">
          Note: {importantDatesNote}
        </p>
      </section>

      <section className="bg-accent-600 py-14 text-white">
        <div className="mx-auto flex max-w-8xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Ready to be part of UPWIECON 2027?
            </h3>
            <p className="mt-2 text-sm text-white/90 sm:text-base">
              Submit your research or secure your seat at India Expo Centre & Mart, Greater Noida.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <NavLink
              to="/call-for-paper"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent-700 shadow-soft hover:bg-navy-50"
            >
              Submit Paper <ArrowRight size={16} />
            </NavLink>
            <NavLink
              to="/registration"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
            >
              Register Now <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
