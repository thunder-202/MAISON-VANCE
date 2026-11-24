export type CaseStudyId =
  | 'villa-solis'
  | 'atelier-kengo'
  | 'maison-verre'
  | 'kurokawa-onsen';

export type ProjectCategory = 'hospitality' | 'architecture' | 'private-brands';

export interface CaseStudyMetric {
  val: string;
  lbl: string;
}

export interface CaseStudyGalleryItem {
  url: string;
  caption: string;
}

export interface CaseStudyData {
  id: CaseStudyId;
  category: string;
  location: string;
  year: string;
  title: string;
  summary: string;
  metrics: CaseStudyMetric[];
  philosophy: string;
  deliverables: string[];
  gallery: CaseStudyGalleryItem[];
}

export interface ProjectCardItem {
  id: CaseStudyId;
  number: string;
  category: ProjectCategory;
  categoryLabel: string;
  title: string;
  year: string;
  services: string;
  outcome: string;
  imageUrl: string;
  fallbackUrl: string;
  imageAlt: string;
  colSpanClass: string;
  aspectClass: string;
}

export interface PillarOption {
  id: string;
  badge: string;
  title: string;
  deliverableLabel: string;
  description: string;
  price: number;
  weeks: number;
  defaultActive: boolean;
}

export interface CadenceOption {
  id: string;
  title: string;
  subtitle: string;
  multiplier: number;
  label: string;
}

export const caseStudies: Record<CaseStudyId, CaseStudyData> = {
  'villa-solis': {
    id: 'villa-solis',
    category: 'Hospitality & Private Residency',
    location: 'Tramuntana, Mallorca',
    year: '2026',
    title: 'Villa Solis — Mallorca',
    summary:
      'Complete brand architecture, digital flagship, and private residency booking engine for an ultra-private limestone cliffside sanctuary in Mallorca.',
    metrics: [
      { val: '+185%', lbl: 'Direct Inquiries' },
      { val: '0.4s', lbl: 'First Contentful Paint' },
      { val: '99/100', lbl: 'Performance Score' },
    ],
    philosophy:
      'Drawing inspiration from local Marés sandstone and sun-bleached linen, we eliminated conventional hospitality widgets in favor of an unhurried editorial scroll. Prospective guests experience the architecture room by room before requesting a private stay.',
    deliverables: [
      'Brand Strategy & Naming',
      'Bespoke Digital Flagship',
      'Private Residency Booking Engine',
      'Editorial Photography Direction',
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fig 01. Infinity Limestone Pool & Balearic Horizon',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fig 02. South Courtyard & Travertine Colonnade',
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fig 03. Primary Suite & Hand-Troweled Lime Plaster',
      },
    ],
  },
  'atelier-kengo': {
    id: 'atelier-kengo',
    category: 'Architecture Practice',
    location: 'Copenhagen & Zürich',
    year: '2025',
    title: 'Søren Lindqvist Architects',
    summary:
      'An interactive digital monograph and spatial archive celebrating twenty years of Nordic timber, raw concrete, and civic cultural pavilions.',
    metrics: [
      { val: '4.2m', lbl: 'Avg. Session Duration' },
      { val: '99/100', lbl: 'Lighthouse Score' },
      { val: '+210%', lbl: 'International Commissions' },
    ],
    philosophy:
      'Architects require a portfolio that behaves like a Swiss museum catalog. We designed a tactile, grid-locked index with instantaneous filtering by material typology, allowing curators and private developers to inspect blueprints alongside finished photography.',
    deliverables: [
      'Digital Monograph System',
      'Interactive Typology Index',
      'Custom Editorial Typography',
      'Multi-language CMS',
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fig 01. Aarhus Coastal Pavilion — Timber & Cast Concrete',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fig 02. Daylight Atrium Study — Natural Oak Joinery',
      },
    ],
  },
  'maison-verre': {
    id: 'maison-verre',
    category: 'Private Brand & Collectible Design',
    location: 'Geneva, Switzerland',
    year: '2025',
    title: 'Objekt Vale — Geneva',
    summary:
      'A private collector salon and limited-edition furniture flagship showcasing monolithic carved stone and cast bronze pieces.',
    metrics: [
      { val: '3.4x', lbl: 'Avg. Commission Value' },
      { val: '100%', lbl: 'Edition Sell-Through' },
      { val: '0.3s', lbl: 'Page Transition' },
    ],
    philosophy:
      'Collectible design demands intimacy. Rather than an e-commerce cart, we created a private acquisition dossier flow where collectors can inspect provenance certificates, stone quarry origins, and request bespoke dimensions.',
    deliverables: [
      'Brand Identity & Monogram',
      'Private Collector Portal',
      'Provenance Dossier Generator',
      'Art Direction',
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fig 01. Monolith Plinth No. 04 in Honed Travertine',
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fig 02. Geneva Salon Exhibition Space',
      },
    ],
  },
  'kurokawa-onsen': {
    id: 'kurokawa-onsen',
    category: 'Hospitality & Wellness',
    location: 'Kyoto Prefecture, Japan',
    year: '2024',
    title: 'Kurokawa Forest Sanctuary',
    summary:
      'A serene, bilingual digital flagship for a twelve-pavilion cedar and hot-spring retreat nestled in the cedar forests north of Kyoto.',
    metrics: [
      { val: '94%', lbl: 'Seasonal Occupancy' },
      { val: '+140%', lbl: 'Direct Suite Bookings' },
      { val: '62%', lbl: 'Reduced OTA Dependency' },
    ],
    philosophy:
      'Guided by the Japanese aesthetic of Ma (negative space), the interface unfolds at a meditative pace. Seasonal photography automatically shifts between spring mist, summer moss, autumn maple, and winter snow.',
    deliverables: [
      'Bilingual EN/JP Flagship',
      'Seasonal Atmosphere Engine',
      'Private Onsen Suite Concierge',
      'Editorial Storytelling',
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fig 01. Cedar Pavilion & Private Moss Garden',
      },
      {
        url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=85',
        caption: 'Fig 02. Thermal Stone Bath overlooking the Ravine',
      },
    ],
  },
};

export const projectItems: ProjectCardItem[] = [
  {
    id: 'villa-solis',
    number: '01',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Private Residency',
    title: 'Villa Solis — Tramuntana',
    year: '2026',
    services: 'Brand Architecture • Digital Flagship • Direct Booking Engine',
    outcome: '+185% Direct Inquiries',
    imageUrl:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    fallbackUrl: 'https://placehold.co/1200x825/EDEAE3/181816?text=VILLA+SOLIS',
    imageAlt: 'Villa Solis Mallorca limestone pool and courtyard',
    colSpanClass: 'md:col-span-7',
    aspectClass: 'aspect-[16/11]',
  },
  {
    id: 'atelier-kengo',
    number: '02',
    category: 'architecture',
    categoryLabel: 'Architecture Practice',
    title: 'Søren Lindqvist Architects',
    year: '2025',
    services: 'Interactive Archive • Monograph Typography',
    outcome: '99/100 Lighthouse',
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://placehold.co/1000x1250/EDEAE3/181816?text=ATELIER+SOREN',
    imageAlt: 'Minimalist concrete and warm oak architectural interior',
    colSpanClass: 'md:col-span-5 md:mt-20',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 'maison-verre',
    number: '03',
    category: 'private-brands',
    categoryLabel: 'Private Brand & Collectible Design',
    title: 'Objekt Vale — Geneva',
    year: '2025',
    services: 'Private Collector Portal • Bespoke 3D Viewing',
    outcome: '3.4x Private Commission Value',
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://placehold.co/1000x1250/EDEAE3/181816?text=OBJEKT+VALE',
    imageAlt: 'Sculptural stone and bespoke collectible furniture piece',
    colSpanClass: 'md:col-span-5',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 'kurokawa-onsen',
    number: '04',
    category: 'hospitality',
    categoryLabel: 'Hospitality & Wellness',
    title: 'Kurokawa Forest Sanctuary',
    year: '2024',
    services: 'Multilingual Digital Flagship • Concierge Suite',
    outcome: '94% Seasonal Occupancy',
    imageUrl:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
    fallbackUrl:
      'https://placehold.co/1200x825/EDEAE3/181816?text=KUROKAWA+SANCTUARY',
    imageAlt: 'Serene timber and stone forest sanctuary architecture',
    colSpanClass: 'md:col-span-7 md:mt-20',
    aspectClass: 'aspect-[16/11]',
  },
];

export const pillarOptions: PillarOption[] = [
  {
    id: 'brand',
    badge: 'Foundation',
    title: 'Brand Architecture',
    deliverableLabel: 'Brand Architecture',
    description:
      'Visual identity system, bespoke typography pairing, editorial art direction, and monograph guidelines.',
    price: 6500,
    weeks: 3,
    defaultActive: true,
  },
  {
    id: 'flagship',
    badge: 'Core Build',
    title: 'Bespoke Web Flagship',
    deliverableLabel: 'Bespoke Web Flagship',
    description:
      'Handcrafted responsive frontend, custom motion choreography, CMS architecture, and sub-second optimization.',
    price: 10000,
    weeks: 5,
    defaultActive: true,
  },
  {
    id: 'concierge',
    badge: 'Commerce & Flow',
    title: 'Booking & Concierge',
    deliverableLabel: 'Booking & Concierge',
    description:
      'Private reservation suite, multi-currency payment integration, or bespoke client inquiry portal.',
    price: 4500,
    weeks: 2,
    defaultActive: false,
  },
  {
    id: 'editorial',
    badge: 'Visibility',
    title: 'Editorial Copy & SEO',
    deliverableLabel: 'Editorial Copy & SEO',
    description:
      'Brand narrative scripting, architectural project monographs, and technical search authority setup.',
    price: 3500,
    weeks: 2,
    defaultActive: false,
  },
];

export const cadenceOptions: CadenceOption[] = [
  {
    id: 'standard',
    title: 'Standard',
    subtitle: 'Measured & unhurried',
    multiplier: 1,
    label: 'Standard Atelier Cadence',
  },
  {
    id: 'accelerated',
    title: 'Accelerated (+20%)',
    subtitle: 'Dedicated sprint team',
    multiplier: 1.2,
    label: 'Accelerated Priority Track',
  },
  {
    id: 'seasonal',
    title: 'Seasonal (-10%)',
    subtitle: 'Flexible Q3/Q4 window',
    multiplier: 0.9,
    label: 'Seasonal Retainer Partnership',
  },
];

export const slotDates = ['Thu, Nov 26', 'Fri, Nov 27', 'Mon, Nov 30'];

export const slotTimes = [
  { value: '10:00 CET / 09:00 GMT', display: '10:00 CET • Morning' },
  { value: '16:30 CET / 15:30 GMT', display: '16:30 CET • Afternoon' },
];
