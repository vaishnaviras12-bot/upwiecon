import { useState } from 'react'
import { Hotel, Utensils, Star, MapPin, Navigation, ExternalLink, ShieldCheck, Compass } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { nearbyHotels, fartherHotels, nearbyRestaurants } from '../data/nearbyAmenities'

export default function StayAndDine() {
  const [activeTab, setActiveTab] = useState('hotels')

  return (
    <div id="stay-and-dine" className="scroll-mt-28 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <SectionHeading
            eyebrow="Attendee Logistics"
            title="Stay & Dine Near WIT"
          />
          <p className="mt-2 text-sm text-navy-600 dark:text-slate-300 max-w-3xl">
            Verified hotels, guest accommodations, and dining spots around Government Women Institute of Technology (GWIT),
            Nanda Ki Chowki, and Sudhowala along the Chakrata Road corridor.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="inline-flex rounded-xl bg-navy-100 dark:bg-navy-800 p-1 self-start sm:self-auto border border-navy-200 dark:border-navy-700">
          <button
            type="button"
            onClick={() => setActiveTab('hotels')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
              activeTab === 'hotels'
                ? 'bg-white dark:bg-navy-900 text-accent-600 dark:text-gold-400 shadow-sm'
                : 'text-navy-700 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white'
            }`}
          >
            <Hotel className="h-4 w-4" />
            <span>Hotels & Stays ({nearbyHotels.length + fartherHotels.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('restaurants')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
              activeTab === 'restaurants'
                ? 'bg-white dark:bg-navy-900 text-accent-600 dark:text-gold-400 shadow-sm'
                : 'text-navy-700 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white'
            }`}
          >
            <Utensils className="h-4 w-4" />
            <span>Dining & Cafés ({nearbyRestaurants.length})</span>
          </button>
        </div>
      </div>

      {/* HOTELS TAB CONTENT */}
      {activeTab === 'hotels' && (
        <div className="space-y-12">
          {/* SECTION 1: NEARBY HOTELS (< 3 KM) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-navy-800 pb-3">
              <div className="flex items-center gap-2 text-navy-950 dark:text-slate-100 font-bold text-base">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <h3>Nearby Accommodations (Within 3 km of GWIT & Nanda Ki Chowki)</h3>
              </div>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                Fastest commute to conference venue
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {nearbyHotels.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold-500/40"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-navy-100 dark:bg-navy-800">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 rounded-full bg-navy-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-gold-400 shadow flex items-center gap-1 border border-white/10">
                        <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                        <span>{item.rating}</span>
                        <span className="text-[10px] text-slate-300">({item.reviewsCount})</span>
                      </div>
                      <div className="absolute bottom-3 left-3 rounded-md bg-accent-600/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-white shadow">
                        {item.distanceFromWIT} from GWIT
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-accent-600 dark:text-gold-400">
                          {item.category}
                        </span>
                        <h4 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100 group-hover:text-accent-600 dark:group-hover:text-gold-400 transition-colors">
                          {item.name}
                        </h4>
                      </div>

                      <p className="text-xs text-navy-600 dark:text-slate-300 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-navy-800 text-xs text-navy-600 dark:text-slate-300">
                        <p className="flex items-start gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-accent-600 dark:text-gold-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item.address}</span>
                        </p>
                        <p className="flex items-center gap-1.5 font-medium text-navy-800 dark:text-slate-200">
                          <Navigation className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>Drive time: {item.travelTime}</span>
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.features.slice(0, 3).map((feat, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-navy-50 dark:bg-navy-800 px-2 py-0.5 text-[10px] font-semibold text-navy-700 dark:text-slate-300"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center gap-2 border-t border-slate-50 dark:border-navy-800/60 mt-2">
                    <a
                      href={item.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy-900 dark:bg-navy-800 hover:bg-navy-800 dark:hover:bg-navy-700 py-2 text-xs font-bold text-white transition-colors"
                    >
                      <Navigation className="h-3.5 w-3.5 text-gold-400" />
                      <span>Route from GWIT</span>
                    </a>
                    {item.websiteUrl && (
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-lg border border-slate-200 dark:border-navy-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                        title="Visit Official Hotel Website"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: CITY & HIGHWAY HOTELS (FARTHER AWAY) */}
          <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-navy-800">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-navy-800 pb-3">
              <div className="flex items-center gap-2 text-navy-950 dark:text-slate-100 font-bold text-base">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                <h3>City & Highway Hotels (Located Farther Away from GWIT)</h3>
              </div>
              <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                Central Dehradun & Saharanpur Road Corridor
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {fartherHotels.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold-500/40"
                >
                  <div>
                    <div className="relative h-52 w-full overflow-hidden bg-navy-100 dark:bg-navy-800">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 rounded-full bg-navy-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-gold-400 shadow flex items-center gap-1 border border-white/10">
                        <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                        <span>{item.rating}</span>
                        <span className="text-[10px] text-slate-300">({item.reviewsCount})</span>
                      </div>
                      <div className="absolute bottom-3 left-3 rounded-md bg-amber-600/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-white shadow">
                        {item.distanceFromWIT}
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                          {item.category}
                        </span>
                        <h4 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100 group-hover:text-accent-600 dark:group-hover:text-gold-400 transition-colors">
                          {item.name}
                        </h4>
                      </div>

                      <p className="text-xs text-navy-600 dark:text-slate-300 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-navy-800 text-xs text-navy-600 dark:text-slate-300">
                        <p className="flex items-start gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-accent-600 dark:text-gold-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item.address}</span>
                        </p>
                        <p className="flex items-center gap-1.5 font-medium text-navy-800 dark:text-slate-200">
                          <Navigation className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                          <span>Estimated commute: {item.travelTime}</span>
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.features.map((feat, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-navy-50 dark:bg-navy-800 px-2 py-0.5 text-[10px] font-semibold text-navy-700 dark:text-slate-300"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center gap-2 border-t border-slate-50 dark:border-navy-800/60 mt-2">
                    <a
                      href={item.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy-900 dark:bg-navy-800 hover:bg-navy-800 dark:hover:bg-navy-700 py-2 text-xs font-bold text-white transition-colors"
                    >
                      <Navigation className="h-3.5 w-3.5 text-gold-400" />
                      <span>Directions to Venue</span>
                    </a>
                    {item.websiteUrl && (
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-lg border border-slate-200 dark:border-navy-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                        title="Visit Official Hotel Website"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* RESTAURANTS TAB CONTENT */}
      {activeTab === 'restaurants' && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nearbyRestaurants.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold-500/40"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-navy-100 dark:bg-navy-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-navy-950/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-gold-400 shadow flex items-center gap-1 border border-white/10">
                    <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                    <span>{item.rating}</span>
                    <span className="text-[10px] text-slate-300">({item.reviewsCount})</span>
                  </div>
                  <div className="absolute bottom-3 left-3 rounded-md bg-accent-600/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-white shadow">
                    {item.distanceFromWIT} from GWIT
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent-600 dark:text-gold-400">
                      {item.cuisine}
                    </span>
                    <h4 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100 group-hover:text-accent-600 dark:group-hover:text-gold-400 transition-colors">
                      {item.name}
                    </h4>
                  </div>

                  <p className="text-xs text-navy-600 dark:text-slate-300 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-navy-800 text-xs text-navy-600 dark:text-slate-300">
                    <p className="flex items-start gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-accent-600 dark:text-gold-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{item.address}</span>
                    </p>
                    <p className="flex items-center gap-1.5 font-medium text-navy-800 dark:text-slate-200">
                      <Navigation className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Drive time: {item.travelTime}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.features.slice(0, 3).map((feat, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-navy-50 dark:bg-navy-800 px-2 py-0.5 text-[10px] font-semibold text-navy-700 dark:text-slate-300"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center gap-2 border-t border-slate-50 dark:border-navy-800/60 mt-2">
                <a
                  href={item.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy-900 dark:bg-navy-800 hover:bg-navy-800 dark:hover:bg-navy-700 py-2 text-xs font-bold text-white transition-colors"
                >
                  <Navigation className="h-3.5 w-3.5 text-gold-400" />
                  <span>Route from GWIT</span>
                </a>
                <a
                  href={item.googleRatingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 rounded-lg border border-slate-200 dark:border-navy-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                  title="View on Google Maps / Reviews"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
