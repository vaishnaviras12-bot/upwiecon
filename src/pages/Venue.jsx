import { Plane, TrainFront, Thermometer, MapPinned } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { venue } from '../data/conference'

export default function Venue() {
  return (
    <PageLayout title="Venue">
      <PageHero eyebrow="Plan Your Visit" title="Venue Information" subtitle={`${venue.name}, ${venue.address}`} />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow="Getting There" title="Transportation" />
        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Card title={venue.transportation[0].title} icon={Plane}>
            {venue.transportation[0].body}
          </Card>
          <Card title={venue.transportation[1].title} icon={TrainFront}>
            {venue.transportation[1].body}
          </Card>
        </div>

        <SectionHeading eyebrow="Climate" title="Weather" />
        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Card title={venue.weather.title} icon={Thermometer} className="sm:col-span-1">
            {venue.weather.body}
          </Card>
          <div className="flex items-center justify-center gap-8 rounded-xl border border-navy-100 bg-navy-50/60 p-6 sm:col-span-2">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">Low</p>
              <p className="font-display text-3xl font-bold text-navy-900">{venue.weather.low}</p>
            </div>
            <div className="h-12 w-px bg-navy-200" />
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">High</p>
              <p className="font-display text-3xl font-bold text-navy-900">{venue.weather.high}</p>
            </div>
            <p className="max-w-[10rem] text-xs text-navy-500">{venue.weather.note}</p>
          </div>
        </div>

        <SectionHeading eyebrow="Explore" title="Places of Interest" />
        <div className="mb-16 flex flex-wrap gap-3">
          {venue.placesOfInterest.map((p) => (
            <span
              key={p}
              className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-4 py-2 text-sm text-navy-700 shadow-card"
            >
              <MapPinned size={14} className="text-accent-600" />
              {p}
            </span>
          ))}
        </div>

        <SectionHeading eyebrow="Find Us" title="Location Map" />
        <div className="overflow-hidden rounded-xl border border-navy-100 shadow-card">
          <iframe
            title="India Expo Centre & Mart location map"
            src={venue.mapEmbed}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </PageLayout>
  )
}
