// All data below is sourced directly from https://nielit.ac.in/upwiecon2026/
// Do not alter facts, dates, names, or figures — only presentation/layout.

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'Submission', path: '/submission' },
  { label: 'Special Session', path: '/special-session' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Committees', path: '/committees' },
  { label: 'Venue', path: '/venue' },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Registration', path: '/registration' },
  { label: 'Call for Paper', path: '/call-for-paper' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'STAR Project Competition', path: '/star-project' },
  { label: 'Sustain-a-thon 2026', path: '/sustain-a-thon' },
]

export const hero = {
  dateLine: '19-20 November 2026',
  title: 'UPWIECON 2026',
  subtitle: '3rd IEEE Uttar Pradesh Section Women in Engineering',
  tagline: 'International Conference on Electrical Electronics and Computer Engineering',
  ctas: [
    { label: 'Register Now', href: '/registration' },
    { label: 'Submit Paper', href: '/call-for-paper' },
  ],
  highlights: [
    {
      title: 'IEEE Xplore',
      body: 'The presented paper will be published on the IEEE Xplore subject to the IEEE Standards and quality check.',
    },
    {
      title: 'Women in Engineering',
      body: 'Empowering women in STEM through networking and collaboration',
    },
    {
      title: 'Global Platform',
      body: 'International conference bringing together researchers worldwide',
    },
  ],
}

export const about = {
  paragraphs: [
    'UPWIECON 2026 brings together women technologists, researchers, industry leaders, policymakers, and students on a common platform to celebrate innovation, leadership, and inclusion in engineering and technology.',
    'Designed to foster knowledge exchange and mentorship, UPWIECON focuses on emerging technologies, entrepreneurship, skilling, and societal impact, while amplifying women’s voices and contributions in STEM.',
    'Through keynotes, technical sessions, panel discussions, and networking opportunities, the conference aims to inspire collaboration, build capacity, and create sustainable pathways for women to lead and shape the future of technology globally.',
    'The IEEE Uttar Pradesh Section Women in Engineering International Conference on Electrical, Computer and Electronics Engineering (UPWIECON 2026) is a top-level International Conference covering broad topics in the areas of Electrical, Computer and Electronics Engineering.',
    'Organized by NIELIT Noida, India, UPWIECON is the flagship Conference of IEEE UP Section WIE Affinity Group, providing an excellent platform for researchers to present their work and connect with the global research community.',
  ],
  stats: [
    { value: '2nd', label: 'IEEE UP Section WIE Conference' },
    { value: 'Global', label: 'Research Platform' },
  ],
  ieeeUpSection: {
    established: '1992',
    body: [
      'Uttar Pradesh Section is located in Region 10 and is represented at the India Council. The Section was formed on 11 May 1992, having previously been a sub-section under the Delhi Section since 28 December 1970.',
      'IEEE UP Section interfaces with industries and academia through various technical and humanitarian activities, organizing events throughout the year to foster innovation and collaboration.',
    ],
  },
}

export const objectives = [
  {
    title: 'Networking Opportunities for Women',
    body: 'Bringing together professionals from diverse backgrounds, providing ample opportunities for networking and collaboration in the engineering community.',
  },
  {
    title: 'Knowledge Sharing',
    body: 'Invited talks from eminent personalities across the globe offering valuable insights into the latest advancements in engineering fields.',
  },
  {
    title: 'Professional Development',
    body: 'Pre-conference tutorials and workshops providing attendees with opportunities to enhance their skills and knowledge in cutting-edge technologies.',
  },
  {
    title: 'Research Presentation',
    body: 'Featured referred paper presentations by female presenters, allowing participants to share research findings with a global audience of experts.',
  },
  {
    title: 'Empowerment in Social and Personal Roles',
    body: 'The conference inspires women to embrace their independence, assertiveness, and leadership in both their personal lives and within their communities, fostering a culture of empowerment and inclusion.',
  },
]

// Sponsor / partner logo filenames as referenced on the source site.
// Source images are not accessible from this environment — replace the
// placeholder files in src/assets/images/sponsors/ with the real assets.
export const sponsors = ['Msbte', 'Partner 2', 'ANRF', 'POWERGRID']

export const partnersCount = 17 // Partner 1 ... Partner 17 shown on source site

export const importantDates = [
  { label: 'Paper Submission Opens', date: '1st March 2026' },
  { label: 'Rolling Acceptance (Round 1)', date: '1st March 2026' },
  { label: 'Rolling Acceptance (Round 2)', date: '11th March 2026' },
  { label: 'Rolling Acceptance (Round 3)', date: '23rd March 2026' },
  { label: 'Rolling Acceptance (Round 4)', date: '02nd April 2026' },
  { label: 'Final Submission Deadline', date: '31st August 2026' },
  { label: 'Notice of Acceptance', date: '15th September 2026' },
  { label: 'Early Bird Registration', date: '1st September 2026' },
  { label: 'Camera Ready Submission', date: '31st October 2026' },
  { label: 'Conference Date', date: '19th – 20th November 2026', isFinal: true },
]

export const importantDatesNote =
  'Papers accepted in Round 1, 2 and 3 of Rolling Acceptance will be asked to pay registration fee early.'

export const venue = {
  name: 'INDIA EXPO CENTRE & MART',
  address:
    'Plot No. 23-25 & 27-29, Knowledge Park-II, Gautam Buddha Nagar, Greater Noida - 201306',
  phone: '(+91) 9650339961 / 9910719256',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64466.72926827137!2d77.44967196808709!3d28.46156567521656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1d95ad7e3df%3A0xd205216f488558f3!2sINDIA%20EXPO%20CENTRE%20%26%20MART!5e0!3m2!1sen!2sin!4v1770354809196!5m2!1sen!2sin',
  transportation: [
    {
      title: 'Nearest Airport',
      body: 'Indira Gandhi International Airport (IGI), New Delhi — Approximately 50 km from venue. Prepaid taxis, Uber, and Ola cabs available.',
    },
    {
      title: 'Railway Station',
      body: 'Hazrat Nizamuddin Railway Station, New Delhi — Approximately 45 km from venue. Metro, taxis, and cab services available.',
    },
  ],
  weather: {
    title: 'November Weather',
    body: 'The weather in Greater Noida is pleasant and cool in November',
    low: '14°C',
    high: '27°C',
    note: 'Comfortable temperatures for outdoor activities',
  },
  placesOfInterest: [
    'India Gate, New Delhi',
    'Akshardham Temple',
    'Okhla Bird Sanctuary',
    'Worlds of Wonder (Amusement Park)',
    'DLF Mall of India',
    'Taj Mahal, Agra (190 km)',
  ],
}

export const footerContact = {
  email: 'ieeeconference@nielit.ac.in',
  phones: ['(+91) 9650339961', '9910719256'],
}

export const copyright = 'Copyright © 2026 NIELIT. All Rights Reserved.'
export const footerCredit = 'Designed, Developed, and Maintained by NIELIT HQ'
