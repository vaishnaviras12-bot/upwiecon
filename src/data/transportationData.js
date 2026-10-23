export const venueDetails = {
  name: "Govt. Women's Institute of Technology (WIT)",
  institution: "Veer Madho Singh Bhandari Uttarakhand Technical University (VMSBUTU)",
  address: "Chandanwadi, Prem Nagar, Sudhowala, Dehradun, Uttarakhand 248001, India",
  coordinates: { lat: 30.3478, lng: 77.9625 },
  googleMapsUrl: "https://maps.google.com/?q=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun"
}

export const transportationOptions = [
  {
    id: "railway",
    category: "Nearest Railway Station",
    name: "Dehradun Railway Station (DDN)",
    address: "Haridwar Road, Lakkhi Bagh, Dehradun, Uttarakhand 248001",
    distance: "~14 km",
    travelTime: "~35–45 minutes",
    coordinates: { lat: 30.3175, lng: 78.0336 },
    options: ["Prepaid Taxi / Cab (Ola/Uber)", "Auto-rickshaw / Vikram (Route No. 5 to Prem Nagar)", "Local City Bus"],
    howToReach: "Take a direct taxi or cab from DDN station via Chakrata Road directly to Prem Nagar / Sudhowala. Alternatively, local auto/Vikram (Route 5) connects railway station to Prem Nagar.",
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&origin=Dehradun+Railway+Station&destination=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun"
  },
  {
    id: "airport",
    category: "Nearest Airport",
    name: "Jolly Grant Airport, Dehradun (DED)",
    address: "Dehradun - Rishikesh Highway, Jolly Grant, Bhaniawala, Dehradun, Uttarakhand 248102",
    distance: "~42 km",
    travelTime: "~1 hr 15 min – 1 hr 30 min",
    coordinates: { lat: 30.1897, lng: 78.1803 },
    options: ["Airport Taxi / Cab (Prepaid / Ola / Uber)", "Airport Bus to Dehradun ISBT + Local Cab"],
    howToReach: "Prepaid taxis are available outside the terminal directly to WIT / UTU Campus, Sudhowala via Haridwar Bypass and Ballupur Chowk.",
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&origin=Jolly+Grant+Airport+Dehradun&destination=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun"
  },
  {
    id: "isbt",
    category: "Bus Stand / ISBT",
    name: "Dehradun ISBT (Inter-State Bus Terminus)",
    address: "Haridwar Bypass Road, Majra, Dehradun, Uttarakhand 248002",
    distance: "~13 km",
    travelTime: "~25–35 minutes",
    coordinates: { lat: 30.2863, lng: 77.9972 },
    options: ["Direct Taxi / Cab", "Auto-rickshaw / E-rickshaw", "City Bus via Ballupur / Prem Nagar"],
    howToReach: "Frequent inter-state buses connect Delhi, Chandigarh, Jaipur to Dehradun ISBT. From ISBT, take a cab or auto via Shimla Bypass / Ballupur Chowk to Prem Nagar.",
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&origin=Dehradun+ISBT&destination=Govt+Womens+Institute+of+Technology+Sudhowala+Dehradun"
  }
]
