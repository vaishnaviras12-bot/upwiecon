import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { venueDetails, transportationOptions } from '../data/transportationData'
import { nearbyHotels, nearbyRestaurants } from '../data/nearbyAmenities'
import { ExternalLink } from 'lucide-react'

// Fix default leaflet icon paths in webpack/vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

export default function VenueMap() {
  const mapContainerRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return

    // Initialize Leaflet Map centered around venue
    const map = L.map(mapContainerRef.current, {
      center: [venueDetails.coordinates.lat, venueDetails.coordinates.lng],
      zoom: 13,
      scrollWheelZoom: false,
    })

    // Add OpenStreetMap Tile Layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map)

    mapInstanceRef.current = map

    // Custom Icon for Venue (Highlighted Gold Star Badge)
    const venueIcon = L.divIcon({
      className: 'custom-venue-pin',
      html: `
        <div style="background-color: #c8402f; color: white; padding: 6px 12px; border-radius: 20px; font-weight: bold; font-size: 12px; border: 2px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.4); white-space: nowrap; display: flex; align-items: center; gap: 4px;">
          ⭐ <span>UPWIECON 2027 Venue (WIT)</span>
        </div>
      `,
      iconSize: [210, 36],
      iconAnchor: [105, 18],
    })

    // Venue Marker
    const venueMarker = L.marker([venueDetails.coordinates.lat, venueDetails.coordinates.lng], { icon: venueIcon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: sans-serif; padding: 4px;">
          <h4 style="margin: 0 0 4px 0; color: #0a1629; font-size: 14px; font-weight: bold;">${venueDetails.name}</h4>
          <p style="margin: 0 0 8px 0; color: #4f76ae; font-size: 12px;">${venueDetails.address}</p>
          <a href="${venueDetails.googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: #c8402f; color: white; text-decoration: none; padding: 5px 10px; border-radius: 4px; font-size: 11px; font-weight: bold;">Open in Google Maps</a>
        </div>
      `)

    venueMarker.openPopup()

    // Add Transportation Markers (Blue Pin)
    transportationOptions.forEach((item) => {
      const transIcon = L.divIcon({
        className: 'custom-trans-pin',
        html: `
          <div style="background-color: #1e3a8a; color: white; padding: 4px 8px; border-radius: 12px; font-weight: bold; font-size: 11px; border: 1.5px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); white-space: nowrap;">
            🚆 ${item.name.split(' (')[0]}
          </div>
        `,
        iconSize: [130, 28],
        iconAnchor: [65, 14],
      })

      L.marker([item.coordinates.lat, item.coordinates.lng], { icon: transIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: sans-serif; padding: 4px;">
            <h4 style="margin: 0 0 4px 0; color: #0a1629; font-size: 13px; font-weight: bold;">${item.name}</h4>
            <p style="margin: 0 0 4px 0; color: #666; font-size: 11px;">${item.distance} from venue (~${item.travelTime})</p>
            <a href="${item.googleMapsDirections}" target="_blank" rel="noopener noreferrer" style="color: #c8402f; font-size: 11px; font-weight: bold; text-decoration: underline;">Get Directions</a>
          </div>
        `)
    })

    // Add Nearby Hotels & Stays Markers (Purple Pin)
    nearbyHotels.forEach((hotel) => {
      if (!hotel.coordinates) return

      const hotelIcon = L.divIcon({
        className: 'custom-hotel-pin',
        html: `
          <div style="background-color: #7c3aed; color: white; padding: 3px 7px; border-radius: 10px; font-weight: 600; font-size: 10px; border: 1px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.25); white-space: nowrap;">
            🏨 ${hotel.name.split(' by')[0].split(' Hotel')[0]}
          </div>
        `,
        iconSize: [120, 24],
        iconAnchor: [60, 12],
      })

      L.marker([hotel.coordinates.lat, hotel.coordinates.lng], { icon: hotelIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: sans-serif; padding: 4px; max-width: 220px;">
            <h4 style="margin: 0 0 4px 0; color: #0a1629; font-size: 13px; font-weight: bold;">${hotel.name}</h4>
            <p style="margin: 0 0 4px 0; color: #7c3aed; font-size: 11px; font-weight: 600;">⭐ ${hotel.rating} • ${hotel.distanceFromWIT} from WIT</p>
            <p style="margin: 0 0 6px 0; color: #555; font-size: 11px;">${hotel.address}</p>
            <a href="${hotel.directionsUrl}" target="_blank" rel="noopener noreferrer" style="color: #c8402f; font-size: 11px; font-weight: bold; text-decoration: underline;">Get Directions</a>
          </div>
        `)
    })

    // Add Nearby Dining Markers (Amber Pin)
    nearbyRestaurants.forEach((rest) => {
      if (!rest.coordinates) return

      const restIcon = L.divIcon({
        className: 'custom-rest-pin',
        html: `
          <div style="background-color: #d97706; color: white; padding: 3px 6px; border-radius: 10px; font-weight: 600; font-size: 10px; border: 1px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.25); white-space: nowrap;">
            🍽️ ${rest.name.split(' (')[0].split(' &')[0]}
          </div>
        `,
        iconSize: [110, 24],
        iconAnchor: [55, 12],
      })

      L.marker([rest.coordinates.lat, rest.coordinates.lng], { icon: restIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: sans-serif; padding: 4px; max-width: 200px;">
            <h4 style="margin: 0 0 4px 0; color: #0a1629; font-size: 13px; font-weight: bold;">${rest.name}</h4>
            <p style="margin: 0 0 4px 0; color: #d97706; font-size: 11px; font-weight: 600;">⭐ ${rest.rating} • ${rest.distanceFromWIT} from WIT</p>
            <a href="${rest.directionsUrl}" target="_blank" rel="noopener noreferrer" style="color: #c8402f; font-size: 11px; font-weight: bold; text-decoration: underline;">Get Directions</a>
          </div>
        `)
    })

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className="space-y-4">
      {/* Map Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-navy-50 dark:bg-navy-800/80 p-4 border border-navy-100 dark:border-navy-700">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-navy-800 dark:text-slate-200">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-accent-600 border border-white" />
            <span>Conference Venue (WIT)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-blue-900 border border-white" />
            <span>Transit Hubs (Railway / Airport / ISBT)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-purple-600 border border-white" />
            <span>Hotels & Stays</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-amber-600 border border-white" />
            <span>Dining & Eateries</span>
          </span>
        </div>

        <a
          href={venueDetails.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-600 dark:text-gold-400 hover:underline"
        >
          Open Interactive Venue in Google Maps
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Map Container */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-navy-700 shadow-md">
        <div ref={mapContainerRef} className="h-[450px] sm:h-[500px] w-full z-0" />
      </div>
    </div>
  )
}
