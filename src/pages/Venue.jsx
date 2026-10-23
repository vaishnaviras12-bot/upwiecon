import { TrainFront, Plane, Bus, Thermometer, CloudRain, ShieldAlert, Navigation, ExternalLink } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import StayAndDine from '../components/StayAndDine'
import VenueMap from '../components/VenueMap'
import { venueDetails, transportationOptions } from '../data/transportationData'
import { weatherInfo } from '../data/weatherData'

export default function Venue() {
  return (
    <PageLayout title="Venue & Travel">
      <PageHero
        eyebrow="Plan Your Visit"
        title="Venue & Travel Information"
        subtitle={`${venueDetails.name} — ${venueDetails.address}`}
      />

      <section className="mx-auto max-w-8xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-16">
        {/* ================= 1. TRANSPORTATION SECTION ================= */}
        <div>
          <SectionHeading eyebrow="Getting There" title="Transportation Options" />
          <p className="mt-2 text-sm text-navy-600 dark:text-slate-300 max-w-3xl">
            Distances and travel times are measured from the official conference venue at{' '}
            <strong className="text-navy-900 dark:text-slate-100">{venueDetails.name}</strong>, Prem Nagar, Sudhowala, Dehradun.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {transportationOptions.map((item) => {
              const Icon = item.id === 'railway' ? TrainFront : item.id === 'airport' ? Plane : Bus
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-accent-600/10 dark:bg-gold-500/10 p-3 text-accent-600 dark:text-gold-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-gold-400">
                          {item.category}
                        </p>
                        <h3 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-navy-700 dark:text-slate-300">
                      <p className="flex items-start gap-2">
                        <strong className="text-navy-900 dark:text-slate-100 shrink-0">Address:</strong>
                        <span>{item.address}</span>
                      </p>

                      <div className="flex flex-wrap items-center gap-4 py-2 border-y border-slate-100 dark:border-navy-800 text-xs font-bold text-navy-800 dark:text-slate-200">
                        <span>Distance: {item.distance}</span>
                        <span>•</span>
                        <span>Travel Time: {item.travelTime}</span>
                      </div>

                      <div>
                        <strong className="text-navy-900 dark:text-slate-100 block mb-1 text-xs uppercase tracking-wider">
                          Recommended Transit:
                        </strong>
                        <ul className="list-disc list-inside space-y-1 text-xs text-navy-600 dark:text-slate-300">
                          {item.options.map((opt, i) => (
                            <li key={i}>{opt}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 text-xs">
                        <p className="flex items-start gap-1.5 text-navy-600 dark:text-slate-300">
                          <Navigation className="h-3.5 w-3.5 text-accent-600 dark:text-gold-400 shrink-0 mt-0.5" />
                          <span>{item.howToReach}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href={item.googleMapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 dark:bg-navy-800 py-2.5 text-xs font-bold text-white hover:bg-navy-800 dark:hover:bg-navy-700 transition-colors shadow"
                    >
                      Get Directions on Google Maps
                      <ExternalLink className="h-3.5 w-3.5 text-gold-400" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ================= 2. WEATHER SECTION ================= */}
        <div>
          <SectionHeading eyebrow="Climate & Clothing" title="Weather in Dehradun" />
          <div className="mt-6 rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 sm:p-8 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-navy-800 pb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900 dark:text-slate-100">
                  Expected Weather for {weatherInfo.conferenceDates}
                </h3>
                <p className="text-xs text-navy-500 dark:text-slate-400 mt-1">
                  {weatherInfo.location}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-navy-800 dark:text-gold-300 border border-gold-500/20">
                <ShieldAlert className="h-4 w-4 text-gold-500" />
                <span>Historical September Averages</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Temp Stats */}
              <div className="flex flex-col justify-center gap-4 rounded-xl bg-navy-50/70 dark:bg-navy-800/60 p-5 border border-navy-100 dark:border-navy-700/50">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-accent-600/10 p-2 text-accent-600 dark:text-gold-400">
                    <Thermometer className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-500 dark:text-slate-400 uppercase">
                      Typical Range
                    </p>
                    <p className="font-display text-xl font-bold text-navy-900 dark:text-slate-100">
                      {weatherInfo.typicalClimate.tempRange}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-navy-100 dark:border-navy-700">
                  <div className="rounded-lg bg-accent-600/10 p-2 text-accent-600 dark:text-gold-400">
                    <CloudRain className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-500 dark:text-slate-400 uppercase">
                      Humidity & Monsoon
                    </p>
                    <p className="text-sm font-bold text-navy-900 dark:text-slate-100">
                      {weatherInfo.typicalClimate.humidity} • {weatherInfo.typicalClimate.monsoonLikelihood}
                    </p>
                  </div>
                </div>
              </div>

              {/* Climate Overview & Practical Tips */}
              <div className="md:col-span-2 space-y-4 text-sm leading-relaxed text-navy-700 dark:text-slate-300">
                <div>
                  <h4 className="font-bold text-navy-900 dark:text-slate-100 mb-1">
                    General Conditions:
                  </h4>
                  <p>{weatherInfo.typicalClimate.generalDescription}</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 dark:text-slate-100 mb-1">
                    Practical Travel & Clothing Advice:
                  </h4>
                  <p>{weatherInfo.typicalClimate.clothingAdvice}</p>
                </div>
                <p className="text-xs italic text-navy-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-navy-800">
                  {weatherInfo.notice}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. STAY & DINE NEAR WIT ================= */}
        <StayAndDine />

        {/* ================= 4. LOCATION MAP SECTION ================= */}
        <div>
          <SectionHeading eyebrow="Interactive Guide" title="Venue & Surrounding Area Logistics Map" />
          <p className="mt-2 mb-6 text-sm text-navy-600 dark:text-slate-300 max-w-3xl">
            Click markers to explore the official conference venue at WIT, transit hubs, and nearby accommodation and dining options with direct navigation routes.
          </p>

          <VenueMap />
        </div>
      </section>
    </PageLayout>
  )
}
