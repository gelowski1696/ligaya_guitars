export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Guitars', href: '#guitars' },
  { label: 'Craft', href: '#craftsmanship' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const supportPillars = [
  'Philippine brand',
  'Authentic instruments',
  'Setup included',
  '30-day returns via Lazada',
]

export const featuredProducts = [
  {
    id: 'supremo',
    series: 'Supremo Series',
    name: 'Supremo Classic S',
    price: 'From PHP 16,000',
    summary: 'A flagship HSS electric with roasted maple feel, stainless frets, and a fast, confident response.',
    description:
      'Built for players who want classic Strat comfort with upgraded hardware, articulate pickups, and a polished stage-ready setup.',
    specs: [
      'Alder body with roasted maple neck and fretboard',
      'LGY ST A5 Supreme HSS pickup set',
      'Stainless steel frets with bone nut',
      'Two-point tremolo with pro setup included',
    ],
    finishes: 'Ultraburst, black, and white tortoise finishes',
    shopUrl:
      'https://www.lazada.com.ph/products/ligaya-supremo-stratocaster-with-st-a5-supreme-pickups-v2-2025-i4650931020.html',
    gallery: [
      '/assets/products/supremo_2.jpg',
      '/assets/products/supremo_main.jpg',
      '/assets/products/supremo_3.jpg',
      '/assets/products/supremo_4.jpg',
    ],
  },
  {
    id: 'vintagevibe',
    series: 'VintageVibe Series',
    name: 'VintageVibe Pro HSS',
    price: 'From PHP 12,500',
    summary: 'A classic-look electric with modern specs, bright attack, and easy playability for everyday sessions.',
    description:
      'The VintageVibe brings sunburst attitude, Alnico response, and stainless fret durability into a format that feels familiar from day one.',
    specs: [
      'Poplar body with maple neck and fretboard',
      'Alnico 5 pickups with split-coil flexibility',
      'Twenty-two stainless steel frets',
      'Two-point tremolo and upgraded hardware',
    ],
    finishes: 'Sunburst, black, and pale green colorways',
    shopUrl:
      'https://www.lazada.com.ph/products/ligaya-guitars-vintagevibe-pro-stratocaster-hss-i4722195302.html',
    gallery: [
      '/assets/products/vintagevibe_2.jpg',
      '/assets/products/vintagevibe_main.png',
      '/assets/products/vintagevibe_3.jpg',
      '/assets/products/vintagevibe_5.jpg',
    ],
  },
  {
    id: 'virtuoso',
    series: 'V Series Acoustic-Electric',
    name: 'LGY V41-S',
    price: 'From PHP 10,500',
    summary: 'A warm, versatile acoustic-electric with a solid spruce top and an inviting unplugged voice.',
    description:
      'Designed for home practice, worship sets, and singer-songwriter sessions, with rich resonance and ready-to-play electronics.',
    specs: [
      'Solid spruce top with mahogany back and sides',
      'Rosewood fretboard and bridge',
      'LGY KLT18EQ preamp and piezo pickup',
      'Bone nut and saddle for improved sustain',
    ],
    finishes: 'Natural and sunburst acoustic finishes',
    shopUrl:
      'https://www.lazada.com.ph/products/lgy-v-series-v41-s-with-stainless-steel-frets-and-solid-top-i4316310917.html',
    gallery: [
      '/assets/products/acoustic_main.jpg',
      '/assets/products/acoustic_2.jpg',
      '/assets/products/acoustic_3.jpg',
      '/assets/products/acoustic_4.jpg',
    ],
  },
]

export const storyPoints = [
  {
    title: 'Made to feel welcoming',
    body: 'Ligaya means joy, and the catalog is shaped around guitars that feel exciting for beginners and still satisfying for seasoned players.',
  },
  {
    title: 'Built with practical upgrades',
    body: 'Roasted maple, stainless frets, solid tops, and reliable electronics show up where they improve real day-to-day playing.',
  },
  {
    title: 'Sold where customers already shop',
    body: 'The buying path stays simple through Ligaya storefronts and social channels, with shipping and returns handled through familiar platforms.',
  },
]

export const craftSteps = [
  {
    number: '01',
    title: 'Select the right tonewood',
    body: 'Every build starts with wood chosen for feel, response, and visual character rather than a one-size-fits-all formula.',
  },
  {
    number: '02',
    title: 'Shape for comfort',
    body: 'Bodies, necks, and fretboards are specced to make the first few minutes with the instrument feel natural and easy.',
  },
  {
    number: '03',
    title: 'Finish with restraint',
    body: 'Color, gloss, and hardware are balanced so the instruments look premium without losing the warmth of the materials.',
  },
  {
    number: '04',
    title: 'Ship after final setup',
    body: 'Each guitar is adjusted, checked, and prepared to arrive ready for real practice sessions instead of post-delivery troubleshooting.',
  },
]

export const craftCloseups = [
  {
    src: '/assets/products/supremo_5.jpg',
    label: 'Finish language',
    title: 'Warm gloss that still lets the wood speak.',
    body: 'The surface treatment feels premium without crossing into overly shiny, showroom-only styling.',
    position: 'center 54%',
  },
  {
    src: '/assets/products/vintagevibe_6.jpg',
    label: 'Hardware detail',
    title: 'Classic silhouettes with cleaner setup choices.',
    body: 'Bridges, pickups, and fretwork are chosen to feel familiar fast and stay dependable through regular playing.',
    position: 'center 46%',
  },
  {
    src: '/assets/products/acoustic_4.jpg',
    label: 'Acoustic character',
    title: 'Top grain and resonance that reward a closer look.',
    body: 'The acoustic line keeps the visual warmth of the instrument connected to the sound it is built to deliver.',
    position: 'center center',
  },
]

export const galleryItems = [
  {
    src: '/assets/products/supremo_2.jpg',
    title: 'Supremo in a home studio corner',
    note: 'Lead image',
    detail: 'A room-lit setup that makes the instrument feel lived-in instead of staged.',
    position: 'center 52%',
  },
  {
    src: '/assets/products/vintagevibe_5.jpg',
    title: 'VintageVibe under low light',
    note: 'Portrait frame',
    detail: 'A taller crop that leans into silhouette, finish, and the familiar outline of a first electric.',
    position: 'center 45%',
  },
  {
    src: '/assets/products/acoustic_main.jpg',
    title: 'Virtuoso in session',
    note: 'Wide scene',
    detail: 'The acoustic line brings a calmer, more intimate rhythm into the visual mix.',
    position: 'center center',
  },
  {
    src: '/assets/products/supremo_5.jpg',
    title: 'Finish and contour detail',
    note: 'Material study',
    detail: 'Close-up framing turns the finish, carve, and reflections into part of the brand story.',
    position: 'center 58%',
  },
  {
    src: '/assets/products/vintagevibe_6.jpg',
    title: 'Neck and hardware study',
    note: 'Precision crop',
    detail: 'A tighter image gives the lineup some editorial sharpness between the fuller room shots.',
    position: 'center 36%',
  },
  {
    src: '/assets/products/acoustic_3.jpg',
    title: 'Acoustic finish and grain',
    note: 'Detail frame',
    detail: 'The wood, edge lines, and finish warmth do the talking without needing heavy labels.',
    position: 'center center',
  },
]

export const promises = [
  'Authentic Ligaya instruments',
  'Nationwide delivery through Lazada',
  'Thirty-day returns support',
  'Direct contact through social and email',
]

export const trustPoints = [
  {
    title: 'Setup checked before dispatch',
    body: 'The guitars are prepared to feel playable on arrival, not shipped as a box of pending fixes.',
  },
  {
    title: 'Familiar checkout through Lazada',
    body: 'When someone is ready to buy, the handoff goes through a storefront customers already trust for payment, delivery, and returns.',
  },
  {
    title: 'Direct help still stays visible',
    body: 'Email, phone, and social routes stay present for players who want help choosing before they commit to a model.',
  },
]

export const conversionRoutes = [
  {
    label: 'Fastest path',
    title: 'Go straight to the Lazada store',
    body: 'Best for buyers who already know the model they want and just need the quickest checkout route.',
    href: 'https://www.lazada.com.ph/shop/ligaya-guitars/',
    cta: 'Shop on Lazada',
    external: true,
  },
  {
    label: 'Need help first',
    title: 'Message Ligaya before buying',
    body: 'Use the contact routes if you want help comparing electric and acoustic options or clarifying specs.',
    href: '#contact',
    cta: 'Talk to Ligaya',
    external: false,
  },
]

export const contactLinks = [
  {
    label: 'Shop the collection',
    value: 'Ligaya Guitars on Lazada',
    href: 'https://www.lazada.com.ph/shop/ligaya-guitars/',
  },
  {
    label: 'Instagram',
    value: '@ligayaguitars',
    href: 'https://www.instagram.com/ligayaguitars/',
  },
  {
    label: 'TikTok',
    value: '@ligayaguitars',
    href: 'https://www.tiktok.com/@ligayaguitars',
  },
  {
    label: 'Facebook',
    value: 'ligaya.guitars',
    href: 'https://www.facebook.com/ligaya.guitars/',
  },
]
