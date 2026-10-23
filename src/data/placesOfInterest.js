// Dynamically import all images from src/assets/logos/place of interest/
const placeImageModules = import.meta.glob('../assets/logos/place of interest/*', { eager: true })

/**
 * Resilient image resolver:
 * Matches loaded image modules against destination keywords.
 * Returns the resolved image URL (module.default) or null if not found.
 */
function resolveLocalImage(keywords) {
  for (const [filePath, moduleObj] of Object.entries(placeImageModules)) {
    const fileName = filePath.split('/').pop().toLowerCase()
    const isMatch = keywords.every((kw) => fileName.includes(kw.toLowerCase()))
    if (isMatch) {
      return moduleObj.default || moduleObj
    }
  }
  return null
}

export const placesOfInterest = [
  {
    id: "fri",
    name: "Forest Research Institute (FRI)",
    category: "Dehradun",
    image: resolveLocalImage(['fri']),
    description: "An architectural wonder of Greco-Roman style surrounded by sprawling lush green lawns and six forestry research museums.",
    address: "Kaulagarh Road, Dehradun, Uttarakhand 248006",
    distanceFromVenue: "~8 km",
    approxTravelTime: "~15–20 minutes",
    transportation: "Taxi / Cab / Auto-rickshaw",
    howToReach: "Drive east via Chakrata Road towards Kaulagarh Road. Direct cabs and autos are easily available from Prem Nagar.",
    visitorInfo: "Open daily from 9:00 AM to 5:30 PM. Entry ticket required for museum halls.",
    coordinates: { lat: 30.3424, lng: 77.9997 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Forest+Research+Institute+Dehradun"
  },
  {
    id: "buddha-temple",
    name: "Buddha Temple & Mindrolling Monastery",
    category: "Dehradun",
    image: resolveLocalImage(['monastery']) || resolveLocalImage(['mindrolling']),
    description: "One of India's largest Buddhist centers featuring the 185-foot Great Stupa, serene gardens, and vibrant Tibetan wall murals.",
    address: "Clement Town, Dehradun, Uttarakhand 248002",
    distanceFromVenue: "~16 km",
    approxTravelTime: "~35–45 minutes",
    transportation: "Taxi / Cab / City Bus",
    howToReach: "Head south via Shimla Bypass Road directly into Clement Town.",
    visitorInfo: "Open to visitors daily. Main stupa opens on Sundays. Modest attire requested.",
    coordinates: { lat: 30.2678, lng: 78.0084 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Mindrolling+Monastery+Clement+Town+Dehradun"
  },
  {
    id: "robbers-cave",
    name: "Robber's Cave (Guchhupani)",
    category: "Dehradun",
    image: resolveLocalImage(['cave']) || resolveLocalImage(['cave']),
    description: "A natural river cave gorge where visitors can wade through refreshing cold stream waters surrounded by limestone walls.",
    address: "Anarwala, Dehradun, Uttarakhand 248003",
    distanceFromVenue: "~16 km",
    approxTravelTime: "~35–40 minutes",
    transportation: "Taxi / Cab / Auto",
    howToReach: "Travel via Garhi Cantt / Rajpur Road towards Anarwala village.",
    visitorInfo: "Open 7:00 AM to 6:00 PM. Waterproof slippers available on rent near entry.",
    coordinates: { lat: 30.3756, lng: 78.0594 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Robber's+Cave+Dehradun"
  },
  {
    id: "sahastradhara",
    name: "Sahastradhara (Thousand Fold Spring)",
    category: "Dehradun",
    image: resolveLocalImage(['sahastradhara']),
    description: "Famous medicinal sulfur springs and picturesque waterfalls with ropeway cable car rides and hill views.",
    address: "Sahastradhara Road, Dehradun, Uttarakhand 248013",
    distanceFromVenue: "~24 km",
    approxTravelTime: "~45–55 minutes",
    transportation: "Taxi / Cab / Auto",
    howToReach: "Take Canal Road to Sahastradhara Road via IT Park Dehradun.",
    visitorInfo: "Best visited during day hours. Ropeway ride available to hilltop park.",
    coordinates: { lat: 30.3872, lng: 78.1286 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Sahastradhara+Dehradun"
  },
  {
    id: "tapkeshwar",
    name: "Tapkeshwar Mahadev Temple",
    category: "Dehradun",
    image: resolveLocalImage(['mahadev']) || resolveLocalImage(['mahadev']),
    description: "Historic cave temple dedicated to Lord Shiva, where natural water droplets continuously fall over the Shivalinga.",
    address: "Tapkeshwar Colony, Garhi Cantt, Dehradun, Uttarakhand 248003",
    distanceFromVenue: "~10 km",
    approxTravelTime: "~20–25 minutes",
    transportation: "Taxi / Cab / Auto",
    howToReach: "Drive through Garhi Cantt via Prem Nagar road. Taxi/cab is direct and fast.",
    visitorInfo: "Open daily from 6:00 AM to 7:00 PM. Located in a scenic river valley.",
    coordinates: { lat: 30.3542, lng: 78.0201 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Tapkeshwar+Temple+Dehradun"
  },
  {
    id: "malsi-deer-park",
    name: "Malsi Deer Park (Dehradun Zoo)",
    category: "Dehradun",
    image: resolveLocalImage(['malsi']),
    description: "Serene zoological park nestled at Mussoorie foothills featuring spotted deer, peacock aviaries, and mountain trails.",
    address: "Mussoorie Road, Malsi, Dehradun, Uttarakhand 248009",
    distanceFromVenue: "~18 km",
    approxTravelTime: "~35–40 minutes",
    transportation: "Taxi / Cab / Auto",
    howToReach: "Head north on Rajpur Road leading towards Mussoorie highway.",
    visitorInfo: "Closed on Mondays. Open Tuesday–Sunday from 9:00 AM to 5:00 PM.",
    coordinates: { lat: 30.3954, lng: 78.0706 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Malsi+Deer+Park+Dehradun"
  },
  {
    id: "mussoorie",
    name: "Mussoorie (Queen of the Hills)",
    category: "Nearby Destination",
    image: resolveLocalImage(['mussoorie.']),
    description: "Famous hill station offering stunning Himalayan mountain vistas, Mall Road, Kempty Falls, and Gun Hill ropeway.",
    address: "Mussoorie, Dehradun District, Uttarakhand 248179",
    distanceFromVenue: "~38 km",
    approxTravelTime: "~1 hr 20 min – 1 hr 40 min",
    transportation: "Taxi / Cab is most direct option",
    howToReach: "Take Rajpur Road north through Malsi onto the winding Mussoorie hill road.",
    visitorInfo: "Ideal weekend or afternoon excursion. Wear warm light jacket for hill altitude.",
    coordinates: { lat: 30.4598, lng: 78.0644 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Mussoorie+Uttarakhand"
  },
  {
    id: "rishikesh",
    name: "Rishikesh (Yoga Capital of the World)",
    category: "Nearby Destination",
    image: resolveLocalImage(['rishikesh']),
    description: "Spiritual sanctuary on the banks of Holy Ganga known for Triveni Ghat Ganga Aarti, Laxman Jhula, and river rafting.",
    address: "Rishikesh, Dehradun District, Uttarakhand 249201",
    distanceFromVenue: "~58 km",
    approxTravelTime: "~1 hr 45 min",
    transportation: "Taxi / Cab / Intercity Bus",
    howToReach: "Drive east via Dehradun-Rishikesh Highway (NH 7) passing Jolly Grant Airport.",
    visitorInfo: "Don't miss the evening Ganga Aarti at Triveni Ghat (~6:00 PM).",
    coordinates: { lat: 30.0869, lng: 78.2676 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Rishikesh+Uttarakhand"
  },
  {
    id: "haridwar",
    name: "Haridwar (Gateway to the Gods)",
    category: "Nearby Destination",
    image: resolveLocalImage(['haridwar']),
    description: "Ancient holy city famous worldwide for Har Ki Pauri ghat, spiritual rituals, and grand evening Ganga Aarti.",
    address: "Haridwar, Uttarakhand 249401",
    distanceFromVenue: "~66 km",
    approxTravelTime: "~2 hours",
    transportation: "Taxi / Cab / Intercity Train or Bus",
    howToReach: "Drive via Haridwar Bypass Highway (NH 34). Regular intercity buses and trains available.",
    visitorInfo: "Har Ki Pauri is most vibrant during sunset Aarti (~6:30 PM).",
    coordinates: { lat: 29.9457, lng: 78.1642 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Haridwar+Uttarakhand"
  },
  {
    id: "dhanaulti",
    name: "Dhanaulti Eco Park & Peak Views",
    category: "Nearby Destination",
    image: resolveLocalImage(['dhanaulti']),
    description: "Quiet mountain retreat enveloped in lofty Deodar, Oak, and Rhododendron forests with snow-capped mountain views.",
    address: "Dhanaulti, Tehri Garhwal District, Uttarakhand 249180",
    distanceFromVenue: "~62 km",
    approxTravelTime: "~2 hrs 15 min",
    transportation: "Taxi / Private Cab",
    howToReach: "Drive up past Mussoorie on Mussoorie-Dhanaulti road.",
    visitorInfo: "Visit Amber and Dhara Eco Parks. Great for peaceful nature walks.",
    coordinates: { lat: 30.406, lng: 78.229 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Dhanaulti+Uttarakhand"
  },
  {
    id: "chakrata",
    name: "Chakrata & Tiger Falls",
    category: "Nearby Destination",
    image: resolveLocalImage(['chakrata']),
    description: "Unspoiled hill station known for 312-ft Tiger Falls, coniferous forests, and peaceful mountain wilderness.",
    address: "Chakrata, Dehradun District, Uttarakhand 248123",
    distanceFromVenue: "~82 km",
    approxTravelTime: "~2 hrs 45 min",
    transportation: "Taxi / Private Vehicle",
    howToReach: "Drive west via Vikas Nagar along Yamuna Valley road.",
    visitorInfo: "Foreign nationals require military cantonment permission for certain inner sectors.",
    coordinates: { lat: 30.7016, lng: 77.8697 },
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun&destination=Chakrata+Uttarakhand"
  }
]
