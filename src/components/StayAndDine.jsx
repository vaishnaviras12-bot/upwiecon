import { useState } from 'react'
import { Hotel, Utensils, Star, MapPin, Navigation, ExternalLink, Compass } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { nearbyHotels, nearbyRestaurants } from '../data/nearbyAmenities'

export default function StayAndDine() {
  const [activeTab, setActiveTab] = useState('hotels')

  return (
    <div id="stay-and-dine" className="scroll-mt-28">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <SectionHeading
            eyebrow="Attendee Logistics"
            title="Stay & Dine Near WIT"
          />
          <p className="mt-2 text-sm text-navy-600 dark:text-slate-300 max-w-3xl">
            Recommended hotels, guest accommodations, and dining spots in the immediate vicinity of
            Women's Institute of Technology (WIT), Suddhowala and Prem Nagar along Chakrata Road.
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
            <span>Hotels & Stays ({nearbyHotels.length})</span>
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
                    {item.distanceFromWIT} from WIT
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent-600 dark:text-gold-400">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100 group-hover:text-accent-600 dark:group-hover:text-gold-400 transition-colors">
                      {item.name}
                    </h3>
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
                    {item.features.slice(0, 3).map((f, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-navy-50 dark:bg-navy-800 px-2 py-0.5 text-[10px] font-semibold text-navy-700 dark:text-slate-300 border border-navy-100 dark:border-navy-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={item.googleRatingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 px-3 py-2 text-xs font-bold text-navy-800 dark:text-slate-200 hover:bg-navy-50 dark:hover:bg-navy-700 transition-colors"
                  >
                    <Star className="h-3.5 w-3.5 text-gold-500 fill-gold-500" />
                    <span>Reviews</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>
                  <a
                    href={item.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy-900 dark:bg-navy-800 px-3 py-2 text-xs font-bold text-white hover:bg-navy-800 dark:hover:bg-navy-700 transition-colors shadow-sm"
                  >
                    <Navigation className="h-3.5 w-3.5 text-gold-400" />
                    <span>Directions</span>
                  </a>
                </div>

                {item.websiteUrl && (
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent-600/10 dark:bg-gold-500/10 px-3 py-1.5 text-xs font-bold text-accent-700 dark:text-gold-300 hover:bg-accent-600/20 transition-colors"
                  >
                    <span>Visit Official Website / Book</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
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
                  <div className="absolute bottom-3 left-3 rounded-md bg-emerald-600/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-white shadow">
                    {item.distanceFromWIT} from WIT
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent-600 dark:text-gold-400">
                      {item.cuisine}
                    </span>
                    <h3 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100 group-hover:text-accent-600 dark:group-hover:text-gold-400 transition-colors">
                      {item.name}
                    </h3>
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
                      <span>Transit: {item.travelTime}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.features.slice(0, 3).map((f, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-navy-50 dark:bg-navy-800 px-2 py-0.5 text-[10px] font-semibold text-navy-700 dark:text-slate-300 border border-navy-100 dark:border-navy-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={item.googleRatingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 px-3 py-2 text-xs font-bold text-navy-800 dark:text-slate-200 hover:bg-navy-50 dark:hover:bg-navy-700 transition-colors"
                  >
                    <Star className="h-3.5 w-3.5 text-gold-500 fill-gold-500" />
                    <span>Reviews</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>
                  <a
                    href={item.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy-900 dark:bg-navy-800 px-3 py-2 text-xs font-bold text-white hover:bg-navy-800 dark:hover:bg-navy-700 transition-colors shadow-sm"
                  >
                    <Navigation className="h-3.5 w-3.5 text-gold-400" />
                    <span>Directions</span>
                  </a>
                </div>

                {item.websiteUrl && (
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent-600/10 dark:bg-gold-500/10 px-3 py-1.5 text-xs font-bold text-accent-700 dark:text-gold-300 hover:bg-accent-600/20 transition-colors"
                  >
                    <span>View Menu / Details</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
