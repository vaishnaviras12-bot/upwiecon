import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Clock, Navigation, ExternalLink, Info, Bus, ImageOff } from 'lucide-react'
import { placesOfInterest } from '../data/placesOfInterest'

export default function PlacesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imgErrors, setImgErrors] = useState({})
  const containerRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % placesOfInterest.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + placesOfInterest.length) % placesOfInterest.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    const container = containerRef.current
    if (container) {
      container.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      if (container) {
        container.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])

  // Mobile Touch Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }))
  }

  const currentPlace = placesOfInterest[currentIndex]
  const hasValidImage = currentPlace.image && !imgErrors[currentPlace.id]

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="relative outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-2xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Places of Interest Carousel"
    >
      {/* Category Filter Pills */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        {placesOfInterest.map((place, index) => (
          <button
            key={place.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
              index === currentIndex
                ? 'bg-accent-600 dark:bg-gold-500 text-white dark:text-navy-950 shadow-md font-bold'
                : 'bg-white dark:bg-navy-800 text-navy-700 dark:text-slate-300 border border-slate-200 dark:border-navy-700 hover:bg-navy-50'
            }`}
          >
            {place.name.split(' (')[0]}
          </button>
        ))}
      </div>

      {/* Main Carousel Card Container */}
      <div className="relative overflow-hidden py-4">
        <div className="mx-auto max-w-4xl">
          <div
            className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-navy-900 shadow-xl transition-all duration-300"
          >
            {/* Top Photo / Placeholder Area */}
            <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden bg-navy-900 text-white">
              {hasValidImage ? (
                <img
                  src={currentPlace.image}
                  alt={currentPlace.name}
                  onError={() => handleImageError(currentPlace.id)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
                  <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm mb-3">
                    <ImageOff className="h-10 w-10 text-gold-400" />
                  </div>
                  <p className="font-display text-lg font-bold text-white">
                    {currentPlace.name}
                  </p>
                  <p className="text-xs text-navy-300 mt-1 max-w-xs">
                    Official photograph updates coming soon
                  </p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <span className="rounded-full bg-navy-900/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-gold-400 border border-gold-400/30">
                  {currentPlace.category}
                </span>
                <span className="rounded-full bg-accent-600/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white">
                  {currentPlace.distanceFromVenue} from venue
                </span>
              </div>

              {/* Title on image bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-md">
                  {currentPlace.name}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm text-slate-200">
                  <MapPin className="h-4 w-4 text-gold-400 shrink-0" />
                  <span>{currentPlace.address}</span>
                </p>
              </div>
            </div>

            {/* Card Body Info */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Description */}
              <p className="text-base leading-relaxed text-navy-800 dark:text-slate-200 font-medium">
                {currentPlace.description}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl bg-navy-50/70 dark:bg-navy-800/60 p-4 border border-navy-100 dark:border-navy-700/50">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent-600/10 dark:bg-gold-500/10 p-2 text-accent-600 dark:text-gold-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-500 dark:text-slate-400 uppercase tracking-wider">
                      Approx. Travel Time
                    </p>
                    <p className="text-sm font-bold text-navy-900 dark:text-slate-100">
                      {currentPlace.approxTravelTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent-600/10 dark:bg-gold-500/10 p-2 text-accent-600 dark:text-gold-400">
                    <Bus className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-500 dark:text-slate-400 uppercase tracking-wider">
                      Transportation Options
                    </p>
                    <p className="text-sm font-bold text-navy-900 dark:text-slate-100">
                      {currentPlace.transportation}
                    </p>
                  </div>
                </div>
              </div>

              {/* How to reach & Visitor info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Navigation className="h-4 w-4 text-accent-600 dark:text-gold-400 mt-0.5 shrink-0" />
                  <p className="text-navy-700 dark:text-slate-300">
                    <strong className="text-navy-900 dark:text-slate-100">How to reach from venue:</strong> {currentPlace.howToReach}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-accent-600 dark:text-gold-400 mt-0.5 shrink-0" />
                  <p className="text-navy-700 dark:text-slate-300">
                    <strong className="text-navy-900 dark:text-slate-100">Visitor Info:</strong> {currentPlace.visitorInfo}
                  </p>
                </div>
              </div>

              {/* External Google Maps Button */}
              <div className="pt-2 flex justify-end">
                <a
                  href={currentPlace.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy-900 dark:bg-navy-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-800 dark:hover:bg-navy-700 transition-colors shadow"
                >
                  Open Directions in Google Maps
                  <ExternalLink className="h-3.5 w-3.5 text-gold-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous destination"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-navy-900/80 dark:bg-navy-800/90 text-white p-3 shadow-lg hover:bg-navy-900 hover:scale-110 transition-all border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next destination"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-navy-900/80 dark:bg-navy-800/90 text-white p-3 shadow-lg hover:bg-navy-900 hover:scale-110 transition-all border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Carousel Counter & Indicator */}
      <div className="mt-4 flex items-center justify-center gap-3 text-xs font-semibold text-navy-600 dark:text-slate-400">
        <span>
          Destination {currentIndex + 1} of {placesOfInterest.length}
        </span>
        <div className="flex gap-1.5">
          {placesOfInterest.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-6 bg-accent-600 dark:bg-gold-400' : 'w-2 bg-slate-300 dark:bg-navy-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
