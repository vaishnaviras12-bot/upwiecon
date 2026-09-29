import { MapPin, Phone, CalendarClock } from 'lucide-react'
import { venue, importantDates, importantDatesNote } from '../data/conference'

// Mirrors the "Conference Venue" + "Important Dates" block that appears
// at the bottom of every page on the source site.
export default function VenueDatesBanner() {
  return (
    <section className="bg-navy-900 py-14 text-white sm:py-16">
      <div className="mx-auto grid max-w-8xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Conference Venue
          </p>
          <h3 className="font-display text-xl font-bold sm:text-2xl">{venue.name}</h3>
          <p className="mt-3 flex items-start gap-2 text-sm text-navy-100">
            <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" />
            {venue.address}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-navy-100">
            <Phone size={16} className="shrink-0 text-gold-400" />
            {venue.phone}
          </p>
        </div>

        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            <CalendarClock size={16} />
            Important Dates
          </p>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {importantDates.map((d) => (
              <li key={d.label} className="flex items-baseline justify-between gap-3 border-b border-white/10 py-1.5 text-sm">
                <span className="text-navy-200">{d.label}</span>
                <span className={`shrink-0 font-semibold ${d.isFinal ? 'text-gold-400' : 'text-white'}`}>
                  {d.date}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs italic text-navy-300">Note: {importantDatesNote}</p>
        </div>
      </div>
    </section>
  )
}
