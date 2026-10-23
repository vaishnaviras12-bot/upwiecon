// Comprehensive directory of Uttarakhand tourist destinations.
// All destinations are mapped from WIT Dehradun (Prem Nagar / Sudhowala)
// with verified coordinates, road distance, and straight-line distance.

// ----------------------------------------------------------------------
// 1. LOCAL ASSETS: Dehradun & Immediate Places (src/assets/logos/place of interest/)
// ----------------------------------------------------------------------
import friImg from '../assets/logos/place of interest/fri dehradun.jpg'
import mahadevImg from '../assets/logos/place of interest/mahadev.jpeg'
import caveImg from '../assets/logos/place of interest/cave.jpeg'
import monasteryImg from '../assets/logos/place of interest/mindrolling-monastery-dehradun1.jpeg'
import malsiImg from '../assets/logos/place of interest/malsi deer park.jpeg'
import sahastradharaImg from '../assets/logos/place of interest/sahastradhara.jpeg'
import dhanaultiImg from '../assets/logos/place of interest/Mussoorie-Dhanaulti-Tour-Package.jpg'
import chakrataImg from '../assets/logos/place of interest/chakrata.jpg'

// ----------------------------------------------------------------------
// 2. LOCAL ASSETS: Uttarakhand Destinations (src/assets/tourism/)
// ----------------------------------------------------------------------
import bhadrajImg from '../assets/tourism/Bhadraj.jpeg'
import mussoorieImg from '../assets/tourism/mussoorie_view.jpg'
import rishikeshImg from '../assets/tourism/rishikesh_aarti.jpg'
import haridwarImg from '../assets/tourism/haridwar_ghat.jpg'
import surkandaImg from '../assets/tourism/Surkanda.jpeg'
import dhariDeviImg from '../assets/tourism/Dhari_devi.jpeg'
import yamunotriImg from '../assets/tourism/Yamunotri.jpeg'
import choptaImg from '../assets/tourism/chopta_himalayas.jpg'
import kartikSwamiImg from '../assets/tourism/Kartik-swami.jpeg'
import kedarnathImg from '../assets/tourism/Kedarnath-Temple.jpg'
import gangotriImg from '../assets/tourism/Gangotri.jpeg'
import valleyOfFlowersImg from '../assets/tourism/Valley_of_flowers.jpeg'
import hemkundImg from '../assets/tourism/Hemkund-sahib.jpeg'
import ranikhetImg from '../assets/tourism/Ranikhet.jpeg'
import badrinathImg from '../assets/tourism/Badrinath-temple.jpeg'
import almoraImg from '../assets/tourism/Almora.jpeg'
import jageshwarImg from '../assets/tourism/Jageshwar-dham.jpeg'
import kausaniImg from '../assets/tourism/Kasauni.jpeg'
import pithoragarhImg from '../assets/tourism/Pithoragarh.jpeg'
import munsiyariImg from '../assets/tourism/Munsiyari.jpeg'

// WIT Dehradun Reference Coordinates
export const WIT_COORDINATES = {
  name: "Govt. Women's Institute of Technology (WIT)",
  address: 'Chandanwadi, Prem Nagar, Sudhowala, Dehradun, Uttarakhand 248007',
  lat: 30.3478,
  lng: 77.9625,
}

// Haversine formula for straight-line distance calculation
export function calculateStraightLineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c * 10) / 10
}

/**
 * Raw destinations list.
 * Note: No regional/category segregation.
 * All entries include verified coordinates, road distance, and straight-line distance.
 */
const rawDestinations = [
  // 1. Forest Research Institute (FRI)
  {
    id: 'fri',
    name: 'Forest Research Institute (FRI)',
    district: 'Dehradun',
    coordinates: { lat: 30.3424, lng: 77.9997 },
    roadDistanceKm: 8,
    travelTime: '~15–20 minutes',
    image: friImg,
    imageSource: 'src/assets/logos/place of interest/fri dehradun.jpg',
    tagline: 'Colonial Greco-Roman architectural marvel amidst lush Himalayan cedar gardens',
    description:
      'Established in 1906, the Forest Research Institute (FRI) in Dehradun is an architectural masterpiece of Greco-Roman and Colonial design, grander than Buckingham Palace. Spanning 450 hectares beneath the Outer Himalayas, it houses six forestry museums, herbariums, and magnificent manicured lawns.',
    whyVisit:
      'A premier heritage landmark located on Chakrata Road just minutes from WIT campus. Visitors can explore the forestry museums, walk beneath century-old trees, and photograph iconic colonial colonnades.',
    keyAttractions: [
      'Six specialized forestry research museums (Silviculture, Timber, Pathology, Entomology)',
      'Magnificent Greco-Roman main building facade and central courtyards',
      'Botanical garden and extensive arboretum with rare Himalayan tree species',
      'Historic convocation hall and library',
    ],
    practicalInfo: {
      bestTimeToVisit: 'Open daily from 9:00 AM to 5:30 PM (museum entry ticket required)',
      elevation: '650 meters (2,132 ft)',
      nearestRailhead: 'Dehradun Railway Station (~5 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~30 km)',
      travelTip: 'Located along Chakrata Road towards Kaulagarh. Direct autos and cabs are readily available from Prem Nagar.',
    },
  },

  // 2. Tapkeshwar Mahadev Temple
  {
    id: 'tapkeshwar',
    name: 'Tapkeshwar Mahadev Temple',
    district: 'Dehradun',
    coordinates: { lat: 30.3542, lng: 78.0201 },
    roadDistanceKm: 10,
    travelTime: '~20–25 minutes',
    image: mahadevImg,
    imageSource: 'src/assets/logos/place of interest/mahadev.jpeg',
    tagline: 'Ancient riverside cave temple where sacred waters continuously drip upon the Shivalinga',
    description:
      'Situated inside a natural cave along the banks of the Asan river in Garhi Cantonment, Tapkeshwar Mahadev Temple is one of Dehradun’s oldest and most revered Shaivite shrines. In the sanctum, natural mineral water drops continuously fall from cave ceilings over the holy Shivalinga.',
    whyVisit:
      'Deeply spiritual atmosphere linked to Guru Dronacharya of the Mahabharata who is believed to have resided in this cave. Features natural sulfur springs and cool riverbed walkways.',
    keyAttractions: [
      'Natural cavern sanctum with perennial water droplets dripping over the Lingam',
      'Riverside temple complex and peaceful wooded gorge setting',
      'Sulphur water springs believed to hold therapeutic properties',
      'Vibrant Shivratri celebrations and festive fairs',
    ],
    practicalInfo: {
      bestTimeToVisit: 'Throughout the year; daily 6:00 AM to 7:00 PM',
      elevation: '680 meters (2,231 ft)',
      nearestRailhead: 'Dehradun Railway Station (~7 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~32 km)',
      travelTip: 'Easily reached via Garhi Cantt from Prem Nagar. Modest attire requested inside the cave sanctum.',
    },
  },

  // 3. Robber's Cave (Guchhupani)
  {
    id: 'robbers-cave',
    name: "Robber's Cave (Guchhupani)",
    district: 'Dehradun',
    coordinates: { lat: 30.3756, lng: 78.0594 },
    roadDistanceKm: 16,
    travelTime: '~35–40 minutes',
    image: caveImg,
    imageSource: 'src/assets/logos/place of interest/cave.jpeg',
    tagline: 'Exhilarating limestone gorge where visitors wade through knee-deep subterranean streams',
    description:
      'Robber’s Cave (locally called Guchhupani) is a unique 600-meter-long natural cave formed along a limestone cliff bed near Anarwala village. Cold, crystal-clear spring water flows continuously along the narrow canyon floor, flanked by towering vertical rock walls.',
    whyVisit:
      'Historic hideout of British-era bandits who used the subterranean stream network to evade capture. Visitors can wade barefoot or in rented slippers through knee-deep running mountain waters leading to a hidden waterfall.',
    keyAttractions: [
      'Wading through the 600-meter natural limestone canyon with cascading springs',
      'Hidden cave waterfall deep inside the gorge',
      'Geological formation where a disappearing stream re-emerges from underground fissures',
      'Cafes serving warm tea and snacks right outside the gorge',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June and September to November (avoid heavy monsoon spates)',
      elevation: '720 meters (2,362 ft)',
      nearestRailhead: 'Dehradun Railway Station (~10 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~35 km)',
      travelTip: 'Waterproof slippers and lockers are available on rent at the entry point.',
    },
  },

  // 4. Buddha Temple & Mindrolling Monastery
  {
    id: 'buddha-temple',
    name: 'Buddha Temple & Mindrolling Monastery',
    district: 'Dehradun',
    coordinates: { lat: 30.2678, lng: 78.0084 },
    roadDistanceKm: 16,
    travelTime: '~35–45 minutes',
    image: monasteryImg,
    imageSource: 'src/assets/logos/place of interest/mindrolling-monastery-dehradun1.jpeg',
    tagline: "One of India's largest Tibetan Buddhist monastic colleges with a 185-foot Great Stupa",
    description:
      'Founded in 1965 in Clement Town, Mindrolling Monastery is one of the six primary monasteries of the Nyingma school of Tibetan Buddhism. The complex is celebrated for its 185-foot Great Stupa of Buddha, serene landscaped gardens, monastic library, and hand-painted wall frescoes.',
    whyVisit:
      'An oasis of tranquility and architectural grandeur. The stupa walls are adorned with gold-leaf Buddhist murals, intricate mandalas, and relic chambers that offer deep spiritual serenity.',
    keyAttractions: [
      'The 185-ft Great Stupa of Buddha inaugurated by the 14th Dalai Lama',
      'Vibrant multi-tiered prayer halls featuring giant gilded statues of Lord Buddha and Guru Padmasambhava',
      'Tibetan handicraft shops, bookstores, and herbal medicine centers',
      'Landscaped gardens with prayer wheels and tranquil water features',
    ],
    practicalInfo: {
      bestTimeToVisit: 'Throughout the year; gardens open daily, stupa opens on Sundays',
      elevation: '630 meters (2,067 ft)',
      nearestRailhead: 'Dehradun Railway Station (~8 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~32 km)',
      travelTip: 'Directly reached via Shimla Bypass Road into Clement Town. Remove footwear before entering prayer halls.',
    },
  },

  // 5. Malsi Deer Park (Dehradun Zoo)
  {
    id: 'malsi-zoo',
    name: 'Malsi Deer Park (Dehradun Zoo)',
    district: 'Dehradun',
    coordinates: { lat: 30.3954, lng: 78.0706 },
    roadDistanceKm: 18,
    travelTime: '~35–40 minutes',
    image: malsiImg,
    imageSource: 'src/assets/logos/place of interest/malsi deer park.jpeg',
    tagline: 'Scenic zoological park at the Mussoorie foothills sheltering deer, leopards, and birdlife',
    description:
      'Situated along Mussoorie Road at the base of the Shivalik foothills, Malsi Deer Park (officially Dehradun Zoo) is a verdant nature reserve sheltering spotted deer, sambars, nilgai, peacocks, leopards, and an aviary of Himalayan birds.',
    whyVisit:
      'A peaceful stopover en route to Mussoorie, ideal for nature lovers, birdwatchers, and families seeking quiet wooded nature trails.',
    keyAttractions: [
      'Spotted deer herds, sambars, and Himalayan wildlife enclosures',
      'Walk-through aviaries housing vibrant regional pheasants, owls, and parakeets',
      'Botanical cactus garden and open-air wooden seating benches beneath sal forest',
      'Adventure play area and educational nature displays',
    ],
    practicalInfo: {
      bestTimeToVisit: 'Open Tuesday to Sunday (Closed Mondays), 9:00 AM to 5:00 PM',
      elevation: '800 meters (2,625 ft)',
      nearestRailhead: 'Dehradun Railway Station (~11 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~36 km)',
      travelTip: 'Located right on the main Dehradun-Mussoorie highway with ample parking.',
    },
  },

  // 6. Sahastradhara
  {
    id: 'sahastradhara',
    name: 'Sahastradhara (Thousand Fold Spring)',
    district: 'Dehradun',
    coordinates: { lat: 30.3872, lng: 78.1286 },
    roadDistanceKm: 24,
    travelTime: '~45–55 minutes',
    image: sahastradharaImg,
    imageSource: 'src/assets/logos/place of interest/sahastradhara.jpeg',
    tagline: 'Medicinal sulfur water springs, travertine drip caves, and scenic aerial ropeway',
    description:
      'Sahastradhara, meaning "Thousand Fold Spring", is famous for its therapeutic sulfur water streams that flow over terraced limestone ridges, forming natural stepping pools, limestone drip caves, and mineral-rich waterfalls along the Baldi River.',
    whyVisit:
      'Known for its sulfurous spring water baths believed to cure skin ailments. An aerial cable car ropeway carries visitors up to a hilltop amusement park commanding valley vistas.',
    keyAttractions: [
      'Natural sulfur spring pools and limestone drip stalactite formations',
      'Aerial ropeway ride connecting the river base to the mountain ridge top',
      'Baldi riverbed walking trails and cascading cool water pools',
      'Hillside amusement park and Joyland ropeway complex',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June and September to November',
      elevation: '780 meters (2,559 ft)',
      nearestRailhead: 'Dehradun Railway Station (~15 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~40 km)',
      travelTip: 'Drive east via Canal Road and Sahastradhara Road past IT Park.',
    },
  },

  // 7. Bhadraj Temple & Hill
  {
    id: 'bhadraj',
    name: 'Bhadraj Temple & Hill',
    district: 'Dehradun',
    coordinates: { lat: 30.4578, lng: 77.9358 },
    roadDistanceKm: 30,
    travelTime: '~1 hr 15 mins (road + trek)',
    image: bhadrajImg,
    imageSource: 'src/assets/tourism/Bhadraj.jpeg',
    tagline: 'Lord Balbhadra shrine perched on high western ridge commanding Doon Valley views',
    description:
      'Perched at an elevation of 2,200 meters at the westernmost extremity of the Mussoorie ridge, Bhadraj Temple is dedicated to Lord Balbhadra (Balram), elder brother of Lord Krishna. The hill commands breathtaking panoramic vistas of the Doon Valley, Dakpathar barrage, and the Jaunsar Bawar mountain range.',
    whyVisit:
      'Famous for its rolling grassy knolls that resemble alpine meadows, and an exhilarating day-trek beginning from Cloud’s End or Dudhli village through oak and rhododendron woodlands.',
    keyAttractions: [
      'Historic stone temple of Lord Balram adorned with milk offerings from local Gujjar herdsmen',
      'Panoramic ridge-top 360-degree views of Asan Valley, Shivaliks, and Himalayan snowlines',
      'Scenic 8 km hiking trail starting near Cloud’s End through pristine forests',
      'Annual Bhadraj religious fair celebrated with great fervour in mid-August',
    ],
    practicalInfo: {
      bestTimeToVisit: 'September to June (crisp skies and blooming flowers)',
      elevation: '2,200 meters (7,218 ft)',
      nearestRailhead: 'Dehradun Railway Station (~28 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~55 km)',
      travelTip: 'Carry water and light snacks as commercial shops along the upper ridge trail are sparse.',
    },
  },

  // 8. Mussoorie (Queen of the Hills)
  {
    id: 'mussoorie',
    name: 'Mussoorie (Queen of the Hills)',
    district: 'Dehradun',
    coordinates: { lat: 30.4598, lng: 78.0644 },
    roadDistanceKm: 38,
    travelTime: '~1 hr 20 min – 1 hr 40 min',
    image: mussoorieImg,
    imageSource: 'src/assets/tourism/mussoorie_view.jpg',
    tagline: 'Legendary colonial hill station with breathtaking views of the snow-clad Garhwal peaks',
    description:
      'Perched at 2,005 meters along a horseshoe mountain ridge, Mussoorie is one of India’s most celebrated hill retreats. Established during the British colonial era, the town features historic churches, the bustling Mall Road, cable car ropeways, and rolling pine-covered slopes.',
    whyVisit:
      'Commands dramatic vistas of the Doon Valley glittering below at night and snow-capped peaks of Kedarnath, Badrinath, and Bandarpunch rising to the north.',
    keyAttractions: [
      'The Mall Road, Camel’s Back Road, and colonial-era heritage libraries',
      'Kempty Falls and Bhatta Falls cascading down rocky mountain gorges',
      'Gun Hill viewpoint accessible via aerial cable car',
      'Lal Tibba—the highest point in Mussoorie located in tranquil Landour',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June (pleasant summer) and September to November (crisp mountain views)',
      elevation: '2,005 meters (6,578 ft)',
      nearestRailhead: 'Dehradun Railway Station (~34 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~60 km)',
      travelTip: 'Expect weekend tourist traffic on the Rajpur-Mussoorie climb; early morning departures are recommended.',
    },
  },

  // 9. Rishikesh
  {
    id: 'rishikesh',
    name: 'Rishikesh (Yoga Capital of the World)',
    district: 'Dehradun / Tehri',
    coordinates: { lat: 30.0869, lng: 78.2676 },
    roadDistanceKm: 58,
    travelTime: '~1 hr 30 min – 1 hr 45 min',
    image: rishikeshImg,
    imageSource: 'src/assets/tourism/rishikesh_aarti.jpg',
    tagline: 'Sacred riverbanks of Maa Ganga, soul-stirring evening Aarti, and world capital of yoga',
    description:
      'Where the holy River Ganga emerges from the Himalayan foothills onto the northern plains, Rishikesh is revered globally as the Yoga Capital of the World. A hub of ashrams, Vedic studies, meditation retreats, and white-water river adventures.',
    whyVisit:
      'Unforgettable spiritual aura highlighted by the grand sunset Ganga Aarti at Triveni Ghat and Parmarth Niketan, alongside suspension footbridges Ram Jhula and Lakshman Jhula.',
    keyAttractions: [
      'Grand evening Ganga Aarti at Triveni Ghat and Parmarth Niketan with synchronized chanting',
      'Iconic suspension footbridges: Ram Jhula and the new Janki Setu',
      'The Beatles Ashram (Chaurasi Kutia) featuring historic meditation huts and graffiti murals',
      'Grade III and IV white-water river rafting from Shivpuri and Marine Drive',
    ],
    practicalInfo: {
      bestTimeToVisit: 'September to April (ideal climate for spiritual exploration and river sports)',
      elevation: '372 meters (1,220 ft)',
      nearestRailhead: 'Yog Nagari Rishikesh (YNRK) / Rishikesh Station',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~21 km from Rishikesh)',
      travelTip: 'Evening Ganga Aarti starts around 6:00 PM; arrive at least 30 minutes early to secure ghat seating.',
    },
  },

  // 10. Dhanaulti
  {
    id: 'dhanaulti',
    name: 'Dhanaulti Eco Park',
    district: 'Tehri Garhwal',
    coordinates: { lat: 30.406, lng: 78.229 },
    roadDistanceKm: 62,
    travelTime: '~2 hrs – 2 hrs 15 min',
    image: dhanaultiImg,
    imageSource: 'src/assets/logos/place of interest/Mussoorie-Dhanaulti-Tour-Package.jpg',
    tagline: 'Quiet mountain sanctuary enveloped in towering Deodar and Rhododendron forests',
    description:
      'Situated at an elevation of 2,286 meters along the Mussoorie-Chamba highway, Dhanaulti offers a tranquil, peaceful alternative to bustling hill stations, characterized by dense alpine deodar forests and mountain air.',
    whyVisit:
      'Home to the Amber and Dhara Eco Parks developed by the forest department, offering nature trails, adventure rope activities, and panoramic vistas of the snow-clad peaks.',
    keyAttractions: [
      'Twin Eco Parks (Amber & Dhara) with winding trails beneath towering deodars',
      'Apple orchard farms and quiet pine-scented forest trails',
      'Adventure sports: Burma bridge, flying fox, and mountain rappelling',
      'Peaceful stopover point before ascending Surkanda Devi Temple',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June (refreshing) and October to February (snow experiences)',
      elevation: '2,286 meters (7,500 ft)',
      nearestRailhead: 'Dehradun Railway Station (~55 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~82 km)',
      travelTip: 'Wear warm layers as temperatures in Dhanaulti are substantially cooler than Dehradun.',
    },
  },

  // 11. Haridwar
  {
    id: 'haridwar',
    name: 'Haridwar (Gateway to the Gods)',
    district: 'Haridwar',
    coordinates: { lat: 29.9457, lng: 78.1642 },
    roadDistanceKm: 66,
    travelTime: '~1 hr 45 min – 2 hours',
    image: haridwarImg,
    imageSource: 'src/assets/tourism/haridwar_ghat.jpg',
    tagline: 'Ancient pilgrimage city where millions gather at sacred Har Ki Pauri for Ganga Aarti',
    description:
      'Haridwar is one of India’s seven holiest cities (Sapta Puri). Legend holds that drops of the nectar of immortality (Amrit) fell here. Pilgrims from across the globe gather at Har Ki Pauri ghat to take a holy dip in the sacred waters of Maa Ganga.',
    whyVisit:
      'The world-famous evening Ganga Aarti at Har Ki Pauri is a breathtaking visual spectacle of thousands of floating brass lamps, sounding conch shells, and sacred mantras echoing across the river.',
    keyAttractions: [
      'World-famous Har Ki Pauri ghat and the sacred Brahmakund',
      'Mansa Devi Temple atop Bilwa Parvat (accessible via ropeway or walking path)',
      'Chandi Devi Temple on Neel Parvat across the river',
      'Traditional Ayurvedic centers and bustling heritage bazaars',
    ],
    practicalInfo: {
      bestTimeToVisit: 'October to March (pleasant winter climate); avoid monsoon peak crowd dates',
      elevation: '314 meters (1,030 ft)',
      nearestRailhead: 'Haridwar Junction (HW) — major Indian Railways hub',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~40 km)',
      travelTip: 'Well connected to Dehradun via NH-34 and NH-7 expressway; regular train and bus services available.',
    },
  },

  // 12. Surkanda Devi Temple
  {
    id: 'surkanda-devi',
    name: 'Surkanda Devi Temple',
    district: 'Tehri Garhwal',
    coordinates: { lat: 30.4079, lng: 78.2891 },
    roadDistanceKm: 67,
    travelTime: '~2 hrs 15 min',
    image: surkandaImg,
    imageSource: 'src/assets/tourism/Surkanda.jpeg',
    tagline: 'High-altitude Shaktipeeth temple offering 360-degree panoramic Himalayan vista',
    description:
      'Situated at an elevation of 2,756 meters near Kaddukhal, Surkanda Devi is one of the prominent Shaktipeeths of the Garhwal Himalayas. The temple is surrounded by dense forests of deodar and rhododendron, commanding breathless views of snow-clad peaks.',
    whyVisit:
      'An invigorating 2.5 km uphill trek (or modern ropeway cable car ride from Kaddukhal base) leads to this sanctified peak where Goddess Sati’s head is believed to have fallen.',
    keyAttractions: [
      'Historic Shaktipeeth shrine and sacred sanctum',
      'Modern aerial ropeway ride operating from Kaddukhal base station',
      'Sweeping 360-degree views of Chaukhamba, Kedarnath, and Badrinath peaks',
      'Picturesque deodar forest trail trek',
    ],
    practicalInfo: {
      bestTimeToVisit: 'April to June (pleasant) and September to November (crisp mountain views)',
      elevation: '2,756 meters (9,042 ft)',
      nearestRailhead: 'Dehradun Railway Station (~85 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~100 km)',
      travelTip: 'The ropeway is operational from Kaddukhal base for visitors who prefer not to walk the uphill trail.',
    },
  },

  // 13. Chakrata & Tiger Falls
  {
    id: 'chakrata',
    name: 'Chakrata & Tiger Falls',
    district: 'Dehradun',
    coordinates: { lat: 30.7016, lng: 77.8697 },
    roadDistanceKm: 82,
    travelTime: '~2 hrs 45 min – 3 hours',
    image: chakrataImg,
    imageSource: 'src/assets/logos/place of interest/chakrata.jpg',
    tagline: 'Pristine colonial cantonment retreat and the thunderous 312-foot Tiger Falls',
    description:
      'Perched at 2,118 meters amidst the Jaunsar-Bawar tribal region of Dehradun district, Chakrata is a tranquil British-era cantonment town framed by towering deodar forests, apple orchards, and rugged mountain valleys.',
    whyVisit:
      'Home to Tiger Falls (Kerao Pachad), one of the highest direct-drop waterfalls in India at 312 feet, surrounded by wild nature without commercial crowds.',
    keyAttractions: [
      'Tiger Falls (312-ft waterfall with natural plunge pool and trek)',
      'Chilmiri Neck—sunset viewpoint commanding views of Bandarpoonch peaks',
      'Deoban (Devban)—dense ancient cedar forest at 2,865 meters',
      'Budher Caves (Miola Caves) with ancient limestone stalactite formations',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June for pleasant weather; September to November for clear views',
      elevation: '2,118 meters (6,949 ft)',
      nearestRailhead: 'Dehradun Railway Station (~80 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~110 km)',
      travelTip: 'Drive west via Vikas Nagar and Kalsi along the scenic Yamuna Valley highway.',
    },
  },

  // 14. Tehri Lake & Dam
  {
    id: 'tehri-dam',
    name: 'Tehri Lake & Dam',
    district: 'Tehri Garhwal',
    coordinates: { lat: 30.3783, lng: 78.4806 },
    roadDistanceKm: 110,
    travelTime: '~3 hrs 30 min',
    image: null,
    imageSource: null,
    tagline: "Asia's tallest dam and massive emerald reservoir hosting international water sports",
    description:
      'Built at the confluence of the Bhagirathi and Bhilangna rivers, Tehri Dam is one of the world’s tallest hydroelectric dams (260.5 meters high). The resulting massive reservoir forms Tehri Lake, an emerald water haven developed into India’s premier inland water sports destination.',
    whyVisit:
      'Witness engineering on a gigantic scale while enjoying jet skiing, speed boating, banana boat rides, paragliding, and floating houseboats surrounded by soaring Himalayan foothills.',
    keyAttractions: [
      'Tehri Dam viewpoint overlooking the massive rock-and-earth-fill dam wall',
      'Water sports center: jet skis, motorboats, water zorbing, and kayaking',
      'Over-water paragliding landing directly onto lake floating docks',
      'Luxury floating houseboats and lakeview eco-resorts at New Tehri',
    ],
    practicalInfo: {
      bestTimeToVisit: 'October to May for water sports and clear sunny weather',
      elevation: '1,750 meters (5,741 ft)',
      nearestRailhead: 'Rishikesh Railway Station (~75 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~90 km)',
      travelTip: 'Can be combined in a loop route via Mussoorie, Dhanaulti, and Chamba.',
    },
  },

  // 15. Srinagar, Garhwal
  {
    id: 'srinagar-garhwal',
    name: 'Srinagar, Garhwal',
    district: 'Pauri Garhwal',
    coordinates: { lat: 30.2224, lng: 78.7844 },
    roadDistanceKm: 150,
    travelTime: '~4 hrs 30 min',
    image: null,
    imageSource: null,
    tagline: 'Historic royal capital of Garhwal kingdom along the banks of the Alaknanda',
    description:
      'The historic capital of the Garhwal Kingdom from 1506 until 1804, Srinagar is nestled in a wide, picturesque valley along the Alaknanda River. Today it is the premier educational and cultural hub of Garhwal, housing HNB Garhwal Central University.',
    whyVisit:
      'Rich in architectural heritage with the ancient Kamleshwar Mahadev Temple (where Lord Rama is believed to have worshipped Lord Shiva) and Kilkileshwar Mahadev, alongside scenic river promenades.',
    keyAttractions: [
      'Ancient Kamleshwar Mahadev Temple with sacred lotus rituals',
      'Kilkileshwar Mahadev established by Adi Shankaracharya',
      'Scenic Alaknanda river valley and suspension bridge walks',
      'Gateway stopover for Char Dham pilgrims ascending towards Kedarnath and Badrinath',
    ],
    practicalInfo: {
      bestTimeToVisit: 'October to April; easily accessible throughout the year along NH-58',
      elevation: '560 meters (1,837 ft)',
      nearestRailhead: 'Rishikesh Railway Station (~105 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~125 km)',
      travelTip: 'Major town with extensive lodging, fuel, banks, and healthcare facilities along NH-58.',
    },
  },

  // 16. Dhari Devi Temple
  {
    id: 'dhari-devi',
    name: 'Dhari Devi Temple',
    district: 'Pauri Garhwal',
    coordinates: { lat: 30.2526, lng: 78.8415 },
    roadDistanceKm: 165,
    travelTime: '~4 hrs 45 min',
    image: dhariDeviImg,
    imageSource: 'src/assets/tourism/Dhari_devi.jpeg',
    tagline: 'Guardian deity of Uttarakhand on the waters of the sacred Alaknanda River',
    description:
      'Perched on an elevated platform directly over the waters of the Alaknanda River between Srinagar and Rudraprayag, Dhari Devi Temple is deeply revered as the protector and guardian deity of Char Dham pilgrims and the entire state of Uttarakhand.',
    whyVisit:
      'Revered as a manifestation of Goddess Kali, the idol is famously said to transform appearance throughout the day—appearing as a young girl in the morning, a woman in the afternoon, and an elderly woman by dusk.',
    keyAttractions: [
      'Darshan of Maa Dhari Devi over the emerald Alaknanda River',
      'Panoramic river gorge views and Himalayan footbridge walk',
      'Spiritual blessings for safe travels across the high Himalayas',
    ],
    practicalInfo: {
      bestTimeToVisit: 'Throughout the year; especially auspicious during Navratri and October–April',
      elevation: '560 meters (1,837 ft)',
      nearestRailhead: 'Rishikesh Railway Station (~115 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~130 km)',
      travelTip: 'Located along NH-58 near Kalyasaur; easily accessible en route between Srinagar and Rudraprayag.',
    },
  },

  // 17. Yamunotri Temple
  {
    id: 'yamunotri',
    name: 'Yamunotri Temple',
    district: 'Uttarkashi',
    coordinates: { lat: 31.0142, lng: 78.4601 },
    roadDistanceKm: 180,
    travelTime: '~5 hrs 30 min (drive to Janki Chatti) + trek',
    image: yamunotriImg,
    imageSource: 'src/assets/tourism/Yamunotri.jpeg',
    tagline: 'Source of the sacred Yamuna River and first shrine of the Char Dham pilgrimage',
    description:
      'Nestled at an elevation of 3,291 meters beneath the shadow of the imposing Kalind mountain, Yamunotri is the revered seat of Goddess Yamuna and the westernmost shrine in the sacred Char Dham circuit.',
    whyVisit:
      'Famed for Surya Kund—a natural boiling-hot sulfur water spring where pilgrims cook rice and potatoes in cloth bags as prasadam—and the sacred Divya Shila rock slab worshipped before entering the temple.',
    keyAttractions: [
      'The sacred black marble deity of Goddess Yamuna in the high Himalayan shrine',
      'Surya Kund boiling thermal spring and Divya Shila rock monument',
      'Scenic 6 km trail from Janki Chatti along the foaming Yamuna gorge',
      'Towering views of Bandarpunch mountain peaks and glacial cascades',
    ],
    practicalInfo: {
      bestTimeToVisit: 'May to June and September to October (temple opens on Akshaya Tritiya, closes around Diwali)',
      elevation: '3,291 meters (10,797 ft)',
      nearestRailhead: 'Dehradun Railway Station (~180 km to Janki Chatti)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~205 km to Janki Chatti)',
      travelTip: 'Motorable road ends at Janki Chatti; from there, complete the 6 km route on foot, pony, or doli.',
    },
  },

  // 18. Chopta & Tungnath
  {
    id: 'chopta',
    name: 'Chopta & Tungnath',
    district: 'Rudraprayag',
    coordinates: { lat: 30.4879, lng: 79.1834 },
    roadDistanceKm: 210,
    travelTime: '~6 hrs 30 min – 7 hours',
    image: choptaImg,
    imageSource: 'src/assets/tourism/chopta_himalayas.jpg',
    tagline: "The 'Mini Switzerland of Uttarakhand' and world's highest Shiva temple at Tungnath",
    description:
      'Chopta is a high-altitude alpine meadow (bugyal) situated at 2,680 meters, enveloped by dense pine, deodar, and rhododendron forests. It serves as the base for the trek to Tungnath—the highest of the Panch Kedar temples (3,680m)—and onward to the Chandrashila peak summit (4,000m).',
    whyVisit:
      'Offers arguably the most spectacular panorama of Himalayan snow giants anywhere in Uttarakhand, including Nanda Devi, Trishul, Chaukhamba, and Kedar Dome.',
    keyAttractions: [
      'Chopta bugyal meadows carpeted in alpine blossoms in spring and snow in winter',
      'Tungnath Temple—over 1,000 years old and the highest Shiva temple on Earth',
      'Chandrashila peak summit trek (4,000m) commanding breathtaking 360-degree vistas',
      'Deoria Tal—emerald lake reflecting Chaukhamba peaks in mirror-like waters',
    ],
    practicalInfo: {
      bestTimeToVisit: 'April to June (rhododendron blossoms) and September to November (crystal clear views)',
      elevation: '2,680 meters at Chopta; 3,680 meters at Tungnath',
      nearestRailhead: 'Rishikesh Railway Station (~200 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~215 km)',
      travelTip: 'A paved stone path (3.5 km) connects Chopta base to Tungnath. Carry warm clothing and trekking shoes.',
    },
  },

  // 19. Kartik Swami Temple
  {
    id: 'kartik-swami',
    name: 'Kartik Swami Temple',
    district: 'Rudraprayag',
    coordinates: { lat: 30.3847, lng: 79.1684 },
    roadDistanceKm: 215,
    travelTime: '~6 hrs 30 min + trek',
    image: kartikSwamiImg,
    imageSource: 'src/assets/tourism/Kartik-swami.jpeg',
    tagline: 'Spectacular ridge-top temple dedicated to Lord Kartikeya amidst rolling clouds',
    description:
      'Perched atop a dramatic rocky ridge at an altitude of 3,050 meters near Kanakchauri village, Kartik Swami is the only temple dedicated to Lord Kartikeya (Murugan) in the Garhwal Himalayas. The temple trail runs through fragrant rhododendron woods onto an eagle’s nest viewpoint.',
    whyVisit:
      'Offers one of the most stunning 360-degree Himalayan vistas in northern India, overlooking Chaukhamba, Trishul, Nanda Devi, and Bandarpunch peaks, alongside thousands of brass devotional bells gifted by pilgrims along the stone ridge pathway.',
    keyAttractions: [
      'Scenic 3 km nature trek from Kanakchauri base village through alpine forest',
      'Awe-inspiring sunrise and sunset views over the Greater Himalayan range',
      'Thousands of brass temple bells strung along the final knife-edge stone ridge',
      'Deep mythological significance linked to Lord Kartikeya offering his bones to Lord Shiva',
    ],
    practicalInfo: {
      bestTimeToVisit: 'October to December and March to May for cloudless mountain views',
      elevation: '3,050 meters (10,006 ft)',
      nearestRailhead: 'Rishikesh Railway Station (~170 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~185 km)',
      travelTip: 'Start early morning from Kanakchauri to witness sunrise over the snow peaks before clouds roll in.',
    },
  },

  // 20. Jim Corbett National Park
  {
    id: 'jim-corbett',
    name: 'Jim Corbett National Park',
    district: 'Nainital / Pauri',
    coordinates: { lat: 29.53, lng: 78.7747 },
    roadDistanceKm: 220,
    travelTime: '~5 hrs 30 min – 6 hours',
    image: null,
    imageSource: null,
    tagline: "India's oldest national park and premier Royal Bengal tiger conservation haven",
    description:
      'Established in 1936 as Hailey National Park and later renamed in honor of legendary hunter-turned-conservationist Jim Corbett, this iconic sanctuary covers 520 sq km of dense sal forests, riverine grasslands, and the pristine Ramganga River.',
    whyVisit:
      'One of India’s finest tiger reserves, hosting the highest density of wild tigers in the world alongside Asian elephants, Indian leopards, gharials, and over 600 species of birds.',
    keyAttractions: [
      'Jeep and canter safaris through famous ecotourism zones (Dhikala, Bijrani, Jhirna, Dhela)',
      'Historic Dhikala forest rest house deep inside the core jungle grasslands',
      'Ramganga river walks and Corbett Waterfall',
      'Corbett Heritage Museum at Kaladhungi showcasing Jim Corbett’s life and writings',
    ],
    practicalInfo: {
      bestTimeToVisit: 'November to June (Dhikala zone opens November 15; Jhirna is open year-round)',
      elevation: '385 to 1,100 meters (1,260 to 3,600 ft)',
      nearestRailhead: 'Ramnagar Railway Station (RMR) (~12 km from park gates)',
      nearestAirport: 'Pantnagar Airport (~80 km) / Jolly Grant Airport (~200 km)',
      travelTip: 'Book official forest department jungle safari permits well in advance online.',
    },
  },

  // 21. Kedarnath Dham
  {
    id: 'kedarnath',
    name: 'Kedarnath Dham',
    district: 'Rudraprayag',
    coordinates: { lat: 30.7352, lng: 79.0669 },
    roadDistanceKm: 240,
    travelTime: '~7 hrs drive to Gaurikund + 16 km trek / helicopter',
    image: kedarnathImg,
    imageSource: 'src/assets/tourism/Kedarnath-Temple.jpg',
    tagline: 'Ancient Jyotirlinga shrine set against the towering snow-covered Kedarnath peak',
    description:
      'Perched at an altitude of 3,584 meters near the Mandakini River source, Kedarnath is one of the twelve sacred Jyotirlingas of Lord Shiva and the most revered temple of the Panch Kedar. Built from gigantic grey stone slabs over a thousand years ago, it survived the catastrophic 2013 floods miraculously shielded by the massive Bhim Shila boulder.',
    whyVisit:
      'An unparalleled pilgrimage experience combining immense devotion with dramatic high-altitude Himalayan grandeur beneath the 6,940-meter Kedarnath peak.',
    keyAttractions: [
      'The sacred 8th-century stone temple and the miraculous protective Bhim Shila rock',
      'Mandakini River valley mountain trail from Gaurikund base',
      'Bhairavnath Temple viewpoint commanding sweeping aerial views of Kedarnath valley',
      'Helicopter shuttle services operating from Phata, Guptkashi, and Sirsi',
    ],
    practicalInfo: {
      bestTimeToVisit: 'May to June and September to October (temple open from Akshaya Tritiya to Bhai Dooj)',
      elevation: '3,584 meters (11,759 ft)',
      nearestRailhead: 'Rishikesh Railway Station (~215 km to Gaurikund base)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~235 km to Gaurikund base)',
      travelTip: 'Biometric Char Dham registration is mandatory. Carry heavy winter woolens even in summer.',
    },
  },

  // 22. Gangotri Temple
  {
    id: 'gangotri',
    name: 'Gangotri Temple',
    district: 'Uttarkashi',
    coordinates: { lat: 30.9947, lng: 78.9398 },
    roadDistanceKm: 245,
    travelTime: '~7 hrs 30 min – 8 hours',
    image: gangotriImg,
    imageSource: 'src/assets/tourism/Gangotri.jpeg',
    tagline: 'High Himalayan seat of Goddess Ganga along the roaring Bhagirathi River',
    description:
      'Located at an altitude of 3,100 meters amidst towering deodar and pine forests, Gangotri is the sacred source shrine of the holy River Ganga (originating 19 km further up at the Gaumukh glacier). The white granite temple was constructed by the Gorkha general Amar Singh Thapa in the early 18th century.',
    whyVisit:
      'Pilgrims gather on the granite stone ghats along the turquoise Bhagirathi River to offer prayers at Bhagirath Shila, where King Bhagirath is believed to have meditated to bring Ganga down from heaven.',
    keyAttractions: [
      'The sacred 18th-century white granite temple of Goddess Ganga',
      'Bhagirath Shila where King Bhagirath performed intense penance',
      'Surya Kund waterfall and Gauri Kund where the river carves through rock chasms',
      'Base point for the famous Gaumukh–Tapovan high altitude glacier trek',
    ],
    practicalInfo: {
      bestTimeToVisit: 'May to June and September to October (shrine closes in November for winter)',
      elevation: '3,100 meters (10,170 ft)',
      nearestRailhead: 'Dehradun / Rishikesh Railway Station (~240 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~265 km)',
      travelTip: 'Well connected by motorable road right up to the temple gate via Uttarkashi and Harsil.',
    },
  },

  // 23. Nainital
  {
    id: 'nainital',
    name: 'Nainital (Lake District)',
    district: 'Nainital',
    coordinates: { lat: 29.3919, lng: 79.4542 },
    roadDistanceKm: 280,
    travelTime: '~6 hrs 30 min – 7 hours',
    image: null,
    imageSource: null,
    tagline: 'Enchanting emerald lake ringed by seven wooded hills in the heart of Kumaon',
    description:
      'Set around the eye-shaped, emerald-green Naini Lake, Nainital is the premier lake resort of the Kumaon region. Ringed by seven lush wooded hills (Ayarpata, Deopatha, Handi-Bandi, Cheena Peak, Alma, Laria-Kanta, and Sher-Ka-Danda), it boasts a pleasant subtropical mountain climate.',
    whyVisit:
      'Enjoy scenic yachting and paddle boating on the lake, visit the revered Naina Devi Shaktipeeth on the northern shore, stroll along the vibrant Mall Road, and ride the aerial ropeway up to Snow View point.',
    keyAttractions: [
      'Boating on the emerald Naini Lake and evening strolls on Mall Road',
      'Maa Naina Devi Shaktipeeth temple on the lakeside promenade',
      'Snow View Point (accessible via aerial ropeway cable car)',
      'High Altitude Zoo housing snow leopards, Tibetan wolves, and Himalayan black bears',
      'Naina Peak (China Peak)—highest vantage point at 2,615 meters',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June (pleasant summer) and September to November (autumn foliage)',
      elevation: '2,084 meters (6,837 ft)',
      nearestRailhead: 'Kathgodam Railway Station (KGM) (~35 km)',
      nearestAirport: 'Pantnagar Airport (~70 km) / Delhi Airport (~300 km)',
      travelTip: 'Park vehicles at designated multi-tier parking lots outside the town during peak summer weekends.',
    },
  },

  // 24. Auli
  {
    id: 'auli',
    name: 'Auli Ski Resort & Bugyal',
    district: 'Chamoli',
    coordinates: { lat: 30.5283, lng: 79.5658 },
    roadDistanceKm: 295,
    travelTime: '~8 hrs 30 min – 9 hours',
    image: null,
    imageSource: null,
    tagline: "India's premier skiing destination facing the majestic Nanda Devi peak",
    description:
      'Perched at altitudes ranging from 2,500 to 3,050 meters in Chamoli district, Auli is internationally acclaimed as India’s premier winter sports and ski destination. Vast slopes of powder snow are framed by coniferous and oak forests with unobstructed views of Nanda Devi, Kamet, and Dunagiri.',
    whyVisit:
      'Features one of the longest and highest aerial passenger ropeways in Asia (4 km from Joshimath to Auli), alongside modern ski lifts, certified instructor schools, and the world’s highest man-made lake.',
    keyAttractions: [
      'World-class ski slopes, chair lifts, and international skiing championships',
      'The 4 km Joshimath-Auli Cable Car ropeway offering breathtaking Himalayan vistas',
      'Gorson Bugyal alpine meadow trek (3 km uphill from Auli)',
      'Artificial lake built to provide snow guns for extended skiing seasons',
    ],
    practicalInfo: {
      bestTimeToVisit: 'December to March for skiing; May to November for green bugyals and mountain views',
      elevation: '2,500 to 3,050 meters (8,200 to 10,000 ft)',
      nearestRailhead: 'Rishikesh Railway Station (~255 km to Joshimath base)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~275 km)',
      travelTip: 'During heavy snowfall in winter, reach Auli by taking the ropeway directly from Joshimath.',
    },
  },

  // 25. Valley of Flowers National Park
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers National Park',
    district: 'Chamoli',
    coordinates: { lat: 30.728, lng: 79.6053 },
    roadDistanceKm: 310,
    travelTime: '~9 hrs drive to Govindghat + trek',
    image: valleyOfFlowersImg,
    imageSource: 'src/assets/tourism/Valley_of_flowers.jpeg',
    tagline: 'UNESCO World Heritage alpine wonderland carpeted in over 500 species of wild Himalayan blooms',
    description:
      'Nestled high in the West Himalayan biosphere, the Valley of Flowers is a world-renowned UNESCO World Heritage site discovered by mountaineer Frank S. Smythe in 1931. Over 500 varieties of exotic wild alpine blossoms transform this 87 sq km valley into a vibrant living carpet during monsoon months.',
    whyVisit:
      'Walk alongside crystal-clear glacial streams through fields of blue poppies, Himalayan bellflowers, brahma kamal, and orchids, surrounded by glistening snow-clad amphitheater mountains.',
    keyAttractions: [
      'UNESCO World Heritage alpine wildflower meadows in full bloom (July–September)',
      'The grave of Joan Margaret Legge—a botanist from Kew Gardens who rests in the valley',
      'Pushpawati River gorge and cascading glacial waterfalls',
      'Rare Himalayan wildlife: musk deer, snow leopard, red fox, and Asiatic black bear',
    ],
    practicalInfo: {
      bestTimeToVisit: 'July to mid-September (valley opens June 1, closes October 31 annually)',
      elevation: '3,352 to 3,658 meters (11,000 to 12,000 ft)',
      nearestRailhead: 'Rishikesh Railway Station (~275 km to Govindghat)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~295 km)',
      travelTip: 'Trek base is at Ghangaria (10 km from Govindghat / Pulna); overnight camping inside the park is strictly prohibited.',
    },
  },

  // 26. Hemkund Sahib
  {
    id: 'hemkund-sahib',
    name: 'Hemkund Sahib',
    district: 'Chamoli',
    coordinates: { lat: 30.7011, lng: 79.5786 },
    roadDistanceKm: 310,
    travelTime: '~9 hrs drive to Govindghat + trek',
    image: hemkundImg,
    imageSource: 'src/assets/tourism/Hemkund-sahib.jpeg',
    tagline: 'Sacred star-shaped Sikh Gurudwara and glacial lake at 4,329 meters surrounded by seven snow peaks',
    description:
      'Perched beside a pristine glacial tarn at an astounding altitude of 4,329 meters, Gurudwara Sri Hemkund Sahib is the highest Sikh pilgrimage shrine on Earth. Ringed by seven snow-clad mountain peaks (the Saptrishi peaks) and blooming with sacred Brahma Kamal flowers.',
    whyVisit:
      'Associated with the tenth Sikh Guru, Guru Gobind Singh Ji, who is described in the Dasam Granth as having meditated here in his previous life. Pilgrims take a holy dip in the freezing emerald waters of the glacial lake before offering prayers inside the iconic star-shaped Gurudwara.',
    keyAttractions: [
      'Iconic star-shaped Gurudwara architecture designed to withstand heavy snow loads',
      'Pristine crystal-clear glacial lake fed by melting glaciers from Hathi Parvat',
      'Sacred Lakshman Temple situated adjacent to the Gurudwara on the lakeside',
      'Rare Brahma Kamal and Blue Poppy flowers blooming along the high rocky slopes',
    ],
    practicalInfo: {
      bestTimeToVisit: 'June to mid-October (shrine opens around late May and closes by mid-October)',
      elevation: '4,329 meters (14,202 ft)',
      nearestRailhead: 'Rishikesh Railway Station (~275 km to Govindghat)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~295 km)',
      travelTip: 'Ascent from Ghangaria (6 km, 1,200m elevation gain) is steep; pony, palki, and helicopter options are available.',
    },
  },

  // 27. Ranikhet
  {
    id: 'ranikhet',
    name: "Ranikhet (Queen's Meadow)",
    district: 'Almora',
    coordinates: { lat: 29.6434, lng: 79.4322 },
    roadDistanceKm: 315,
    travelTime: '~7 hrs 30 min',
    image: ranikhetImg,
    imageSource: 'src/assets/tourism/Ranikhet.jpeg',
    tagline: "Serene cantonment town with premier high-altitude golf course and Himalayan vistas",
    description:
      'Ranikhet (Queen’s Meadow) is an idyllic, unspoiled hill station and military cantonment town established by the British in 1869, home to the Kumaon Regiment of the Indian Army. Characterized by pine-shaded boulevards, colonial stone bungalows, and fruit orchards.',
    whyVisit:
      'Famous for its high-altitude 9-hole golf course (one of the highest in Asia), historical regiment museums, apple orchards, and sweeping views of western Himalayan peaks.',
    keyAttractions: [
      'Upat Golf Course—scenic 9-hole links set amidst pine meadows',
      'Kumaon Regimental Centre (KRC) Museum showcasing military history and war honors',
      'Chaubatia Gardens—extensive orchards of apples, apricots, and peaches',
      'Jhula Devi Temple adorned with thousands of pilgrimage bells',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June and September to November (clear crisp views)',
      elevation: '1,869 meters (6,132 ft)',
      nearestRailhead: 'Kathgodam Railway Station (~75 km)',
      nearestAirport: 'Pantnagar Airport (~115 km) / Jolly Grant Airport (~310 km)',
      travelTip: 'Well connected via Almora and Ramnagar highways. Respect military cantonment signage.',
    },
  },

  // 28. Mukteshwar
  {
    id: 'mukteshwar',
    name: 'Mukteshwar',
    district: 'Nainital',
    coordinates: { lat: 29.4722, lng: 79.6478 },
    roadDistanceKm: 330,
    travelTime: '~8 hours',
    image: null,
    imageSource: null,
    tagline: 'Quiet orchard ridge offering 180-degree Himalayan vistas and the Chauli Ki Jali cliffs',
    description:
      'Situated at 2,171 meters on an elevated ridgeline in the Kumaon hills, Mukteshwar derives its name from an ancient 350-year-old Shiva temple. Surrounded by fruit orchards of apples, plums, and apricots with breathtaking vistas of the Trishul, Nanda Devi, and Panchachuli ranges.',
    whyVisit:
      'Celebrated for Chauli Ki Jali—dramatic overhanging rock cliffs popular for rock climbing and rappelling—and unhurried nature walks through oak and coniferous forests.',
    keyAttractions: [
      'Historic Mukteshwar Dham Shiva temple atop a panoramic hillock',
      'Chauli Ki Jali natural cliff formations and overhanging rock perches',
      'Breathtaking sunrise and sunset views over the Greater Himalayan snowline',
      'Fruit orchards, organic farming estates, and scenic mountain trails',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June and September to November',
      elevation: '2,171 meters (7,122 ft)',
      nearestRailhead: 'Kathgodam Railway Station (~65 km)',
      nearestAirport: 'Pantnagar Airport (~95 km)',
      travelTip: 'Drive up via Bhowali from Kathgodam. Mountain nights can be chilly even in summer.',
    },
  },

  // 29. Badrinath Dham
  {
    id: 'badrinath',
    name: 'Badrinath Dham',
    district: 'Chamoli',
    coordinates: { lat: 30.7433, lng: 79.4938 },
    roadDistanceKm: 335,
    travelTime: '~9 hrs 30 min – 10 hours',
    image: badrinathImg,
    imageSource: 'src/assets/tourism/Badrinath-temple.jpeg',
    tagline: 'Revered seat of Lord Badri Vishal between the Nar and Narayana mountain ranges',
    description:
      'Perched at an altitude of 3,133 meters along the banks of the sacred Alaknanda River, Badrinath is the premier shrine of both the All-India Char Dham and the Uttarakhand Chhota Char Dham. Dedicated to Lord Vishnu (Badri Vishal) meditating in padmasana beneath a jujube tree.',
    whyVisit:
      'The vividly painted 50-foot temple facade set against the pyramid-shaped Neelkanth mountain peak is an iconic spiritual sight. Pilgrims bathe in the thermal sulfur waters of Tapt Kund before taking darshan.',
    keyAttractions: [
      'The sacred Badrinath Temple sanctum with the 1-meter black stone (Saligram) idol of Lord Vishnu',
      'Tapt Kund natural hot sulfur spring pool along the Alaknanda riverbed',
      'Mana Village—the last official Indian village on the border, featuring Vyas Gufa and Ganesh Gufa',
      'Bhim Pul—a natural stone boulder bridge across the roaring Saraswati river gorge',
    ],
    practicalInfo: {
      bestTimeToVisit: 'May to June and September to October (temple opens around Akshaya Tritiya, closes around Diwali)',
      elevation: '3,133 meters (10,279 ft)',
      nearestRailhead: 'Rishikesh Railway Station (~295 km)',
      nearestAirport: 'Jolly Grant Airport, Dehradun (~315 km)',
      travelTip: 'Unlike Kedarnath, Badrinath has a direct motorable highway right to the temple town.',
    },
  },

  // 30. Almora
  {
    id: 'almora',
    name: 'Almora (Cultural Heart of Kumaon)',
    district: 'Almora',
    coordinates: { lat: 29.5971, lng: 79.6591 },
    roadDistanceKm: 340,
    travelTime: '~8 hrs 30 min',
    image: almoraImg,
    imageSource: 'src/assets/tourism/Almora.jpeg',
    tagline: 'Ancient capital of the Chand dynasty renowned for heritage temples and Kumaoni culture',
    description:
      'Perched on a 5 km horse-saddle shaped ridge between the Kosi and Suyal rivers, Almora was founded in 1568 as the royal capital of the Chand dynasty. It remains the cultural and artistic heart of the Kumaon region, celebrated for unique handicrafts, traditional wood-carved facades, and Bal Mithai sweets.',
    whyVisit:
      'Offers a rich cultural immersion into Kumaon’s heritage, alongside historic shrines like Nanda Devi Temple and the Kasar Devi Temple on Crank’s Ridge—famed for its unique geomagnetic field.',
    keyAttractions: [
      'Kasar Devi Temple on Crank’s Ridge (visited by Swami Vivekananda, Bob Dylan, and Timothy Leary)',
      'Historic 1,000-year-old Katarmal Sun Temple featuring intricate stone carvings',
      'Heritage Lala Bazaar with cobblestone pathways and traditional Kumaoni architecture',
      'Bright End Corner commanding panoramic Himalayan sunrise and sunset views',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June and September to November (mild sunny days and clear views)',
      elevation: '1,646 meters (5,400 ft)',
      nearestRailhead: 'Kathgodam Railway Station (~85 km)',
      nearestAirport: 'Pantnagar Airport (~125 km) / Jolly Grant Airport (~335 km)',
      travelTip: 'Sample authentic Bal Mithai and Singauri sweets from heritage confectioneries in Lala Bazaar.',
    },
  },

  // 31. Jageshwar Dham
  {
    id: 'jageshwar',
    name: 'Jageshwar Dham',
    district: 'Almora',
    coordinates: { lat: 29.6499, lng: 79.8538 },
    roadDistanceKm: 375,
    travelTime: '~9 hrs 30 min',
    image: jageshwarImg,
    imageSource: 'src/assets/tourism/Jageshwar-dham.jpeg',
    tagline: 'Spiritual complex of 124 ancient stone temples nestled amidst towering deodars',
    description:
      'Located in a tranquil forest valley along the Jata Ganga river, Jageshwar Dham is a holy complex of 124 ancient stone temples constructed between the 7th and 14th centuries by the Katyuri kings. Revered as one of the twelve sacred Jyotirlingas (Nageshvara Jyotirlinga).',
    whyVisit:
      'An architectural and spiritual masterpiece where towering ancient deodar trees form a natural cathedral around intricately sculpted stone shrines.',
    keyAttractions: [
      'Complex of 124 preserved ancient stone temples (Maha Mrityunjaya, Tarun Jageshwar, Dandeshwar)',
      'Archaeological Museum housing preserved sculptures from the 9th to 13th centuries',
      'Tranquil deodar forest walks along the sacred Jata Ganga stream',
      'Maha Mrityunjaya Temple—the oldest shrine in the complex with ancient Nagari inscriptions',
    ],
    practicalInfo: {
      bestTimeToVisit: 'Throughout the year; particularly pleasant from March to June and September to November',
      elevation: '1,870 meters (6,135 ft)',
      nearestRailhead: 'Kathgodam Railway Station (~120 km)',
      nearestAirport: 'Pantnagar Airport (~155 km)',
      travelTip: 'Located 35 km northeast of Almora town along well-paved roads.',
    },
  },

  // 32. Kausani
  {
    id: 'kausani',
    name: 'Kausani',
    district: 'Bageshwar',
    coordinates: { lat: 29.8543, lng: 79.5967 },
    roadDistanceKm: 380,
    travelTime: '~9 hrs 30 min – 10 hours',
    image: kausaniImg,
    imageSource: 'src/assets/tourism/Kasauni.jpeg',
    tagline: "The 'Switzerland of India' offering a 300 km unbroken panorama of Himalayan snow peaks",
    description:
      'Situated at an elevation of 1,890 meters atop a narrow mountain ridge, Kausani was famously dubbed the "Switzerland of India" by Mahatma Gandhi during his stay in 1929. The town overlooks the fertile Someshwar valley and commands a 300 km uninterrupted panorama of Himalayan snow giants.',
    whyVisit:
      'Witness the breathtaking transformation of Trishul, Nanda Devi, and Panchachuli peaks turning from gleaming silver to molten gold during sunrise and sunset.',
    keyAttractions: [
      'Unbroken 300 km panorama of Nanda Devi, Trishul, and Panchachuli peaks',
      'Anasakti Ashram (Gandhi Ashram) where Mahatma Gandhi wrote his commentary on Anasakti Yoga',
      'Kausani Tea Estate—sprawling emerald tea gardens producing premium organic orthodox tea',
      'Sumitranandan Pant Gallery honoring the legendary Hindi poet born in Kausani',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June and September to November (golden sunrise and clear views)',
      elevation: '1,890 meters (6,200 ft)',
      nearestRailhead: 'Kathgodam Railway Station (~135 km)',
      nearestAirport: 'Pantnagar Airport (~170 km)',
      travelTip: 'Wake up before dawn to witness the iconic sunrise over Trishul and Nanda Devi from hotel balconies.',
    },
  },

  // 33. Pithoragarh
  {
    id: 'pithoragarh',
    name: 'Pithoragarh (Little Kashmir)',
    district: 'Pithoragarh',
    coordinates: { lat: 29.5829, lng: 80.2182 },
    roadDistanceKm: 470,
    travelTime: '~12–13 hours',
    image: pithoragarhImg,
    imageSource: 'src/assets/tourism/Pithoragarh.jpeg',
    tagline: "Picturesque Soar Valley town crowned by snow peaks and the gateway to Kailash Mansarovar",
    description:
      'Nestled in the center of the western half of the Soar Valley, Pithoragarh is often called "Little Kashmir" for its lush green plateau framed by snow-clad peaks. It serves as the historic gateway for pilgrims travelling on the ancient Kailash Mansarovar and Adi Kailash trails.',
    whyVisit:
      'Boasts ancient hill forts, cavernous underground temples, and panoramic vistas of the snow-clad peaks of Nanda Devi East, Trishul, and Panchachuli.',
    keyAttractions: [
      'Pithoragarh Fort atop a hillock overlooking the valley',
      'Kapileshwar Mahadev natural cave temple dedicated to Lord Shiva',
      'Chandak Hill viewpoint and Mostamanu temple plateau',
      'Gateway to Milam Glacier and high-altitude trekking routes',
    ],
    practicalInfo: {
      bestTimeToVisit: 'April to June and September to November',
      elevation: '1,627 meters (5,338 ft)',
      nearestRailhead: 'Tanakpur Railway Station (~150 km) or Kathgodam (~210 km)',
      nearestAirport: 'Naini Saini Airport (Pithoragarh) / Pantnagar Airport (~240 km)',
      travelTip: 'Scenic route through Ghat and Champawat. Ideal base for eastern Kumaon exploration.',
    },
  },

  // 34. Munsiyari
  {
    id: 'munsiyari',
    name: 'Munsiyari (Gateway to Johar Valley)',
    district: 'Pithoragarh',
    coordinates: { lat: 30.0667, lng: 80.2333 },
    roadDistanceKm: 540,
    travelTime: '~14–15 hours',
    image: munsiyariImg,
    imageSource: 'src/assets/tourism/Munsiyari.jpeg',
    tagline: 'High-altitude border hamlet offering front-row views of the iconic Panchachuli Five Peaks',
    description:
      'Perched at an elevation of 2,298 meters at the base of the Great Himalayan range, Munsiyari (meaning "place with snow") is an awe-inspiring mountain hamlet on the banks of the Goriganga River. Famed as the traditional gateway to the ancient Johar trading valley and Milam Glacier.',
    whyVisit:
      'Offers dramatic, front-row, close-up vistas of the majestic Panchachuli (Five Challis) peaks that seem almost within arm’s reach, with unforgettable sunrise views.',
    keyAttractions: [
      'Unsurpassed close-up panoramic views of the five Panchachuli peaks',
      'Birthi Falls—cascading 126-meter waterfall along the mountain approach highway',
      'Khaliya Top high alpine meadow trek (3,500m) commanding 360-degree Himalayan views',
      'Tribal Heritage Museum celebrating the indigenous Shauka (Bhotia) trading community',
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to June (rhododendrons) and September to November (crisp mountain views and snow peaks)',
      elevation: '2,298 meters (7,540 ft)',
      nearestRailhead: 'Kathgodam Railway Station (~275 km)',
      nearestAirport: 'Pantnagar Airport (~310 km) / Naini Saini Airport (~130 km)',
      travelTip: 'Start early from Almora or Pithoragarh due to long mountain road driving times.',
    },
  },
]

// Calculate straight-line distance from WIT and sort by road distance (nearest first)
export const uttarakhandDestinations = rawDestinations
  .map((dest) => {
    const straightLine = calculateStraightLineDistance(
      WIT_COORDINATES.lat,
      WIT_COORDINATES.lng,
      dest.coordinates.lat,
      dest.coordinates.lng
    )
    return {
      ...dest,
      straightLineDistanceKm: straightLine,
    }
  })
  .sort((a, b) => a.roadDistanceKm - b.roadDistanceKm)
