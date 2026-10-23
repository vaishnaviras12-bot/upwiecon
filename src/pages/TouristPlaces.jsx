import { useState, useEffect, useRef } from 'react'
import {
  Compass,
  MapPin,
  Search,
  Navigation,
  ExternalLink,
  ChevronRight,
  Mountain,
  Train,
  Plane,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowLeft,
  Clock,
  Car,
} from 'lucide-react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import {
  uttarakhandDestinations,
  WIT_COORDINATES,
} from '../data/uttarakhandTourism'

export default function TouristPlaces() {
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  // Geolocation Directions State
  const [geoLoading, setGeoLoading] = useState(false)
  const [geoError, setGeoError] = useState('')
  const [customOrigin, setCustomOrigin] = useState('')

  // Leaflet map refs
  const mapContainerRef = useRef(null)
  const mapInstanceRef = useRef(null)

  // Filter destinations based on search query (preserving numerical distance order)
  const filteredDestinations = uttarakhandDestinations.filter((d) => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return (
      d.name.toLowerCase().includes(q) ||
      d.district.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.tagline.toLowerCase().includes(q)
    )
  })

  // Handle Geolocation Click
  const handleCurrentLocationDirections = (destination) => {
    if (!destination) return
    setGeoLoading(true)
    setGeoError('')

    if (!navigator.geolocation) {
      setGeoLoading(false)
      setGeoError(
        'Geolocation is not supported by your browser. Please enter your starting city below.'
      )
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeoLoading(false)
        const { latitude, longitude } = position.coords
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(
          destination.name + ', ' + destination.district + ', Uttarakhand'
        )}`
        window.open(mapsUrl, '_blank', 'noopener,noreferrer')
      },
      (error) => {
        setGeoLoading(false)
        let msg =
          'Could not access current location. Please enter your starting city below.'
        if (error.code === error.PERMISSION_DENIED) {
          msg =
            'Location permission was denied. You can enter your starting city below or open Google Maps directly.'
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          msg =
            'Location information is currently unavailable. Please enter your starting city below.'
        } else if (error.code === error.TIMEOUT) {
          msg = 'Location request timed out. Please enter your starting city below.'
        }
        setGeoError(msg)
      },
      { timeout: 10000, enableHighAccuracy: true }
    )
  }

  // Handle Manual Origin Directions
  const handleManualDirections = (e, destination) => {
    e.preventDefault()
    if (!customOrigin.trim() || !destination) return
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      customOrigin.trim()
    )}&destination=${encodeURIComponent(
      destination.name + ', ' + destination.district + ', Uttarakhand'
    )}`
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  }

  // Initialize/Update Leaflet map when selected destination changes
  useEffect(() => {
    if (!selectedDestination || !mapContainerRef.current) return

    // Clean up previous map if exists
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    const { lat, lng } = selectedDestination.coordinates
    const map = L.map(mapContainerRef.current, {
      center: [lat, lng],
      zoom: 12,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map)

    const destIcon = L.divIcon({
      className: 'custom-dest-pin',
      html: `
        <div style="background-color: #c8402f; color: white; padding: 6px 12px; border-radius: 20px; font-weight: bold; font-size: 11px; border: 2px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.4); white-space: nowrap; display: flex; align-items: center; gap: 4px;">
          📍 <span>${selectedDestination.name}</span>
        </div>
      `,
      iconSize: [180, 32],
      iconAnchor: [90, 16],
    })

    L.marker([lat, lng], { icon: destIcon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: sans-serif; padding: 4px;">
          <h4 style="margin: 0 0 4px 0; font-size: 13px; font-weight: bold;">${selectedDestination.name}</h4>
          <p style="margin: 0 0 4px 0; font-size: 11px; color: #666;">${selectedDestination.district}, Uttarakhand</p>
          <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: bold; color: #1e3a8a;">~${selectedDestination.roadDistanceKm} km by road from WIT</p>
          <a href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            WIT_COORDINATES.name + ' ' + WIT_COORDINATES.address
          )}&destination=${encodeURIComponent(
            selectedDestination.name + ', ' + selectedDestination.district + ', Uttarakhand'
          )}" target="_blank" rel="noopener noreferrer" style="color: #c8402f; font-weight: bold; font-size: 11px; text-decoration: underline;">Get Directions from WIT</a>
        </div>`
      )
      .openPopup()

    mapInstanceRef.current = map

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [selectedDestination])

  return (
    <PageLayout title="Tourist Places — Uttarakhand">
      <PageHero
        eyebrow="Explore Uttarakhand"
        title="Tourist Destinations & Pilgrimages"
        subtitle="Ordered by road distance from WIT Dehradun (Prem Nagar / Sudhowala) across Dehradun and Uttarakhand"
      />

      <section className="mx-auto max-w-8xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* MOBILE SELECTOR / TOGGLE */}
        <div className="mb-6 flex flex-col gap-3 lg:hidden">
          <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-3 shadow-sm">
            <span className="text-xs font-bold text-navy-800 dark:text-slate-200">
              {selectedDestination
                ? `Viewing: ${selectedDestination.name} (~${selectedDestination.roadDistanceKm} km)`
                : 'Showing: Uttarakhand Overview'}
            </span>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-navy-900 dark:bg-navy-800 px-3 py-1.5 text-xs font-bold text-white hover:bg-navy-800"
            >
              <Compass className="h-3.5 w-3.5 text-gold-400" />
              <span>{mobileSidebarOpen ? 'Close Menu' : 'Browse Destinations'}</span>
            </button>
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT ON DESKTOP */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* ================= LEFT SIDEBAR (4 cols) ================= */}
          <aside
            className={`space-y-4 rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-4 sm:p-5 shadow-sm lg:col-span-4 lg:sticky lg:top-28 lg:max-h-[calc(100vh-130px)] lg:overflow-y-auto ${
              mobileSidebarOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            {/* Sidebar Title & Distance Reference */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-navy-800 pb-3">
              <div>
                <div className="flex items-center gap-2 text-accent-600 dark:text-gold-400">
                  <Compass className="h-5 w-5" />
                  <h3 className="font-display text-base font-bold text-navy-900 dark:text-slate-100">
                    Destinations Directory
                  </h3>
                </div>
                <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                  Ordered nearest first by road distance from WIT Dehradun
                </p>
              </div>

              {selectedDestination && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDestination(null)
                    setGeoError('')
                    setCustomOrigin('')
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600 dark:text-gold-400 hover:underline shrink-0"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Overview</span>
                </button>
              )}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search destinations by name or district..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-navy-700 bg-navy-50/50 dark:bg-navy-800/60 py-2 pl-9 pr-3 text-xs text-navy-900 dark:text-slate-100 placeholder-slate-400 focus:border-accent-600 dark:focus:border-gold-400 focus:outline-none"
              />
            </div>

            {/* Count indicator */}
            <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 px-0.5">
              <span>
                {filteredDestinations.length} destination
                {filteredDestinations.length === 1 ? '' : 's'}
              </span>
              <span className="text-[10px] text-accent-600 dark:text-gold-400 font-semibold">
                Sorted by distance from WIT
              </span>
            </div>

            {/* Single Continuous Destination List */}
            <div className="space-y-2 max-h-[560px] overflow-y-auto pr-1">
              {filteredDestinations.map((d) => {
                const isSelected = selectedDestination?.id === d.id
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => {
                      setSelectedDestination(d)
                      setGeoError('')
                      setCustomOrigin('')
                      setMobileSidebarOpen(false)
                      window.scrollTo({ top: 380, behavior: 'smooth' })
                    }}
                    className={`flex w-full items-center justify-between rounded-xl p-3 text-left transition-all ${
                      isSelected
                        ? 'border-2 border-accent-600 dark:border-gold-400 bg-accent-50/60 dark:bg-gold-500/10 shadow-sm'
                        : 'border border-slate-200/80 dark:border-navy-800 bg-white dark:bg-navy-850 hover:border-slate-300 dark:hover:border-navy-700 hover:bg-slate-50 dark:hover:bg-navy-800'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      {/* Destination Thumbnail or Fallback Icon */}
                      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-navy-100 dark:bg-navy-800 flex items-center justify-center border border-slate-200/60 dark:border-navy-700">
                        {d.image ? (
                          <img
                            src={d.image}
                            alt={d.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center p-1">
                            <Mountain className="h-4 w-4 text-slate-400" />
                            <span className="text-[8px] font-bold uppercase text-slate-400">Photo Soon</span>
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1 pr-2">
                        <div className="flex items-center justify-between gap-1">
                          <p
                            className={`font-display text-xs font-bold truncate ${
                              isSelected
                                ? 'text-accent-700 dark:text-gold-400'
                                : 'text-navy-900 dark:text-slate-100'
                            }`}
                          >
                            {d.name}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-1 mt-0.5">
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                            {d.district}
                          </span>
                          <span
                            className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-bold text-accent-700 dark:text-gold-300 bg-accent-50 dark:bg-gold-500/15 shrink-0"
                            title={`~${d.roadDistanceKm} km by road from WIT`}
                          >
                            ~{d.roadDistanceKm} km
                          </span>
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isSelected
                          ? 'text-accent-600 dark:text-gold-400 translate-x-0.5'
                          : 'text-slate-400'
                      }`}
                    />
                  </button>
                )
              })}

              {filteredDestinations.length === 0 && (
                <div className="py-8 text-center text-xs text-slate-400">
                  No destinations match your search.
                </div>
              )}
            </div>
          </aside>

          {/* ================= RIGHT MAIN CONTENT AREA (8 cols) ================= */}
          <main className="lg:col-span-8 space-y-8">
            {/* ---------------- A. OVERVIEW STATE (When no destination selected) ---------------- */}
            {!selectedDestination && (
              <div className="space-y-10">
                {/* Hero Feature Box */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-navy-700 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 p-8 sm:p-10 text-white shadow-lg">
                  <div className="relative z-10 max-w-2xl space-y-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/20 px-3 py-1 text-xs font-bold text-gold-400 border border-gold-400/30">
                      <Mountain className="h-3.5 w-3.5" />
                      Starting from WIT Dehradun • Devbhoomi Uttarakhand
                    </span>
                    <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                      Experience Uttarakhand Beyond the Conference
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      All tourist destinations are listed in a single, continuous directory sorted by
                      road distance from the conference venue at <strong>Women’s Institute of Technology (WIT), Suddhowala, Dehradun</strong>.
                      Select any destination to view verified travel distances, photography, visitor guidance, and interactive turn-by-turn navigation.
                    </p>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-accent-600/20 blur-3xl"
                  />
                </div>

                {/* Quick Highlights: Nearest Destinations from WIT */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-navy-900 dark:text-slate-100">
                        Nearest Attractions to WIT Dehradun (&lt; 40 km)
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Convenient morning or evening visits within short driving distance from the venue
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {uttarakhandDestinations
                      .filter((d) => d.roadDistanceKm <= 40)
                      .slice(0, 6)
                      .map((dest) => (
                        <div
                          key={dest.id}
                          onClick={() => {
                            setSelectedDestination(dest)
                            setGeoError('')
                            setCustomOrigin('')
                            window.scrollTo({ top: 350, behavior: 'smooth' })
                          }}
                          className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className="relative h-44 w-full overflow-hidden bg-navy-100 dark:bg-navy-800">
                            {dest.image ? (
                              <img
                                src={dest.image}
                                alt={dest.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                            ) : (
                              <div className="flex h-full w-full flex-col items-center justify-center bg-navy-800 text-white">
                                <Mountain className="h-8 w-8 text-gold-400" />
                                <span className="mt-1 text-xs text-slate-300">Photo Pending</span>
                              </div>
                            )}
                            <div className="absolute top-3 left-3 rounded-md bg-navy-950/85 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-gold-400 border border-white/10">
                              ~{dest.roadDistanceKm} km by road
                            </div>
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-display text-base font-bold text-navy-900 dark:text-slate-100 group-hover:text-accent-600 dark:group-hover:text-gold-400 transition-colors">
                              {dest.name}
                            </h4>
                            <p className="text-xs text-navy-600 dark:text-slate-300 line-clamp-2">
                              {dest.description}
                            </p>
                            <div className="pt-2 flex items-center justify-between text-xs font-bold text-accent-600 dark:text-gold-400">
                              <span>View Itinerary & Map</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Popular Statewide Pilgrimages & Mountain Retreats */}
                <div>
                  <h3 className="mb-4 font-display text-xl font-bold text-navy-900 dark:text-slate-100">
                    Iconic Pilgrimages & Himalayan Retreats
                  </h3>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {uttarakhandDestinations
                      .filter((d) => d.roadDistanceKm > 40 && d.image)
                      .slice(0, 6)
                      .map((dest) => (
                        <div
                          key={dest.id}
                          onClick={() => {
                            setSelectedDestination(dest)
                            setGeoError('')
                            setCustomOrigin('')
                            window.scrollTo({ top: 350, behavior: 'smooth' })
                          }}
                          className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className="relative h-44 w-full overflow-hidden bg-navy-100 dark:bg-navy-800">
                            <img
                              src={dest.image}
                              alt={dest.name}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute top-3 left-3 rounded-md bg-navy-950/85 backdrop-blur-sm px-2.5 py-1 text-[11px] font-bold text-gold-400 border border-white/10">
                              ~{dest.roadDistanceKm} km from WIT
                            </div>
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-display text-base font-bold text-navy-900 dark:text-slate-100 group-hover:text-accent-600 dark:group-hover:text-gold-400 transition-colors">
                              {dest.name}
                            </h4>
                            <p className="text-xs text-navy-600 dark:text-slate-300 line-clamp-2">
                              {dest.description}
                            </p>
                            <div className="pt-2 flex items-center justify-between text-xs font-bold text-accent-600 dark:text-gold-400">
                              <span>Explore Details</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- B. DETAIL VIEW (When destination is selected) ---------------- */}
            {selectedDestination && (
              <div className="space-y-8 animate-fadeIn">
                {/* Header Action Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-4 shadow-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDestination(null)
                      setGeoError('')
                      setCustomOrigin('')
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-700 dark:text-slate-200 hover:text-accent-600 dark:hover:text-gold-400 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Directory</span>
                  </button>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent-600/10 dark:bg-gold-500/10 px-3 py-1 text-xs font-bold text-accent-600 dark:text-gold-400 border border-accent-600/20">
                      ~{selectedDestination.roadDistanceKm} km by road from WIT
                    </span>
                    <span className="rounded-full bg-slate-100 dark:bg-navy-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {selectedDestination.district} District
                    </span>
                  </div>
                </div>

                {/* Hero Showcase Photo & Title Banner */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-navy-700 bg-navy-950 text-white shadow-md">
                  <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                    {selectedDestination.image ? (
                      <img
                        src={selectedDestination.image}
                        alt={selectedDestination.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 p-8 text-center">
                        <Mountain className="h-16 w-16 text-gold-400 mb-3" />
                        <h3 className="font-display text-2xl font-bold">{selectedDestination.name}</h3>
                        <p className="mt-1 text-xs text-slate-400">
                          Official photograph announcement pending in asset directory
                        </p>
                      </div>
                    )}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span>{selectedDestination.district}, Uttarakhand</span>
                        <span>•</span>
                        <span>Road: ~{selectedDestination.roadDistanceKm} km from WIT</span>
                        <span>•</span>
                        <span>Straight-line: ~{selectedDestination.straightLineDistanceKm} km</span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                        {selectedDestination.name}
                      </h2>
                      <p className="text-sm text-slate-200 max-w-2xl">
                        {selectedDestination.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description & Why Visit */}
                <div className="rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 sm:p-8 shadow-sm space-y-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100 mb-2">
                      About the Destination
                    </h3>
                    <p className="text-sm leading-relaxed text-navy-700 dark:text-slate-300">
                      {selectedDestination.description}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gold-500/10 dark:bg-gold-500/5 border border-gold-500/20 p-5">
                    <h4 className="font-display text-sm font-bold text-navy-900 dark:text-gold-300 mb-1 flex items-center gap-2">
                      <Compass className="h-4 w-4 text-gold-500" />
                      What Makes This Destination Special
                    </h4>
                    <p className="text-xs sm:text-sm text-navy-800 dark:text-slate-200 leading-relaxed">
                      {selectedDestination.whyVisit}
                    </p>
                  </div>

                  {/* Key Attractions */}
                  <div>
                    <h4 className="font-display text-sm font-bold text-navy-900 dark:text-slate-100 mb-3">
                      Key Highlights & Things to Do:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-navy-700 dark:text-slate-300">
                      {selectedDestination.keyAttractions.map((att, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{att}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Practical Visitor Guide Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-4 shadow-sm space-y-1">
                    <div className="flex items-center gap-2 text-accent-600 dark:text-gold-400 mb-1">
                      <Car className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Distance & Travel</span>
                    </div>
                    <p className="text-xs font-semibold text-navy-900 dark:text-slate-100">
                      ~{selectedDestination.roadDistanceKm} km ({selectedDestination.travelTime})
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-4 shadow-sm space-y-1">
                    <div className="flex items-center gap-2 text-accent-600 dark:text-gold-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Best Season</span>
                    </div>
                    <p className="text-xs font-semibold text-navy-900 dark:text-slate-100">
                      {selectedDestination.practicalInfo.bestTimeToVisit}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-4 shadow-sm space-y-1">
                    <div className="flex items-center gap-2 text-accent-600 dark:text-gold-400 mb-1">
                      <Mountain className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Elevation</span>
                    </div>
                    <p className="text-xs font-semibold text-navy-900 dark:text-slate-100">
                      {selectedDestination.practicalInfo.elevation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-4 shadow-sm space-y-1">
                    <div className="flex items-center gap-2 text-accent-600 dark:text-gold-400 mb-1">
                      <Train className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Nearest Railhead</span>
                    </div>
                    <p className="text-xs font-semibold text-navy-900 dark:text-slate-100">
                      {selectedDestination.practicalInfo.nearestRailhead}
                    </p>
                  </div>
                </div>

                {/* Travel Tip Note */}
                <div className="rounded-xl bg-navy-50 dark:bg-navy-800/60 p-4 border border-navy-100 dark:border-navy-700 text-xs text-navy-700 dark:text-slate-300 flex items-start gap-2">
                  <Compass className="h-4 w-4 text-accent-600 dark:text-gold-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-navy-900 dark:text-slate-100">Traveler Guidance: </strong>
                    {selectedDestination.practicalInfo.travelTip}
                  </span>
                </div>

                {/* GOOGLE MAPS & DIRECTIONS SECTION */}
                <div className="rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 sm:p-8 shadow-sm space-y-6">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900 dark:text-slate-100">
                      Map & Travel Directions
                    </h3>
                    <p className="mt-1 text-xs text-navy-600 dark:text-slate-300">
                      Plan your journey from WIT Dehradun, your current location, or any starting city in India.
                    </p>
                  </div>

                  {/* Action Buttons: WIT Origin vs Current Location vs Direct Maps */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
                        WIT_COORDINATES.name + ', ' + WIT_COORDINATES.address
                      )}&destination=${encodeURIComponent(
                        selectedDestination.name + ', ' + selectedDestination.district + ', Uttarakhand'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 dark:bg-navy-800 hover:bg-navy-800 px-5 py-3 text-xs font-bold text-white shadow-sm transition-all"
                    >
                      <Navigation className="h-4 w-4 text-gold-400" />
                      <span>Directions from WIT Dehradun</span>
                      <ExternalLink className="h-3 w-3 text-gold-400" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCurrentLocationDirections(selectedDestination)}
                      disabled={geoLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-600 hover:bg-accent-700 px-5 py-3 text-xs font-bold text-white shadow-sm transition-all disabled:opacity-60"
                    >
                      <Navigation className={`h-4 w-4 ${geoLoading ? 'animate-spin' : ''}`} />
                      <span>
                        {geoLoading
                          ? 'Detecting Location...'
                          : 'Get Directions from Current Location'}
                      </span>
                    </button>

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        selectedDestination.name + ', ' + selectedDestination.district + ', Uttarakhand'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 px-5 py-3 text-xs font-bold text-navy-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-navy-700 transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Geo error or fallback note */}
                  {geoError && (
                    <div className="rounded-xl bg-amber-50 dark:bg-amber-950/40 p-4 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                      <span>{geoError}</span>
                    </div>
                  )}

                  {/* Manual Origin Input Fallback Form */}
                  <form
                    onSubmit={(e) => handleManualDirections(e, selectedDestination)}
                    className="pt-4 border-t border-slate-100 dark:border-navy-800 space-y-2"
                  >
                    <label className="block text-xs font-bold text-navy-900 dark:text-slate-100">
                      Or calculate directions from another starting point:
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        placeholder="Enter starting city (e.g., Delhi, Chandigarh, Lucknow, Mumbai...)"
                        value={customOrigin}
                        onChange={(e) => setCustomOrigin(e.target.value)}
                        className="flex-1 rounded-xl border border-slate-200 dark:border-navy-700 bg-navy-50/50 dark:bg-navy-800/50 px-4 py-2.5 text-xs text-navy-900 dark:text-slate-100 placeholder-slate-400 focus:border-accent-600 dark:focus:border-gold-400 focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={!customOrigin.trim()}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-navy-900 dark:bg-navy-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-800 disabled:opacity-50"
                      >
                        <span>Calculate Route</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </form>

                  {/* Interactive Map Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 shadow-inner">
                    <div ref={mapContainerRef} className="h-[360px] sm:h-[420px] w-full z-0" />
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </section>
    </PageLayout>
  )
}
