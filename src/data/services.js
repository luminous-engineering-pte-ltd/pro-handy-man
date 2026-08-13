export const services = [
  { slug: 'general-repairs', name: 'General Repairs', icon: 'Wrench', category: 'Repair', popular: true, image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1400&q=80', subServices: [] },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    icon: 'Droplets',
    category: 'Wet Works',
    popular: true,
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'bidet-spray-installation', name: 'Bidet Spray Installation' },
      { slug: 'bottle-trap-installation', name: 'Bottle Trap Installation' },
      { slug: 'shower-head-hose-replacement', name: 'Shower Head & Hose Replacement' },
      { slug: 'toilet-choke-and-repair', name: 'Toilet Choke & Repair' },
      { slug: 'toilet-flush-system-installation', name: 'Toilet Flush System Installation' },
      { slug: 'toilet-seat-cover-replacement', name: 'Toilet Seat Cover Replacement' },
      { slug: 'water-heater-installation', name: 'Water Heater Installation' },
      { slug: 'water-pipe-leaking-repair', name: 'Water Pipe Leaking Repair' },
      { slug: 'shower-screen-repair-installation', name: 'Shower Screen Repair & Installation' }
    ]
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    icon: 'Zap',
    category: 'Electrical',
    popular: true,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'ceiling-fan-installation', name: 'Ceiling Fan Installation' },
      { slug: 'data-point-installation', name: 'Data Point Installation' },
      { slug: 'downlight-led-bulb-installation', name: 'Downlight & LED Bulb Installation' },
      { slug: 'electrical-switches-installation', name: 'Electrical Switches Installation' },
      { slug: 'exhaust-fan-installation', name: 'Exhaust Fan Installation' },
      { slug: 'flood-light-installation', name: 'Flood Light Installation' },
      { slug: 'house-rewiring-services', name: 'House Rewiring Services' },
      { slug: 'lighting-installation', name: 'Lighting Installation' },
      { slug: 'power-socket-installation', name: 'Power Socket Installation' },
      { slug: 'track-light-installation-services', name: 'Track Light Installation' },
      { slug: 'wall-light-installation', name: 'Wall Light Installation' }
    ]
  },
  {
    slug: 'painting',
    name: 'Painting',
    icon: 'PaintRoller',
    category: 'Finishing',
    popular: true,
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'house-painting-services', name: 'House Painting Services' },
      { slug: 'room-painting-services', name: 'Room Painting Services' },
      { slug: 'touch-up-and-patch-up-hole', name: 'Touch-Up & Patch-Up' },
      { slug: 'wall-crack-repair', name: 'Wall Crack Repair' }
    ]
  },
  {
    slug: 'furniture-assembly',
    name: 'Furniture Assembly',
    icon: 'Hammer',
    category: 'Installation',
    popular: true,
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'ikea-furniture-assembly', name: 'IKEA Furniture Assembly' },
      { slug: 'mirror-shelves-installation', name: 'Mirror & Shelves Installation' },
      { slug: 'pull-up-bar-installation', name: 'Pull-Up Bar Installation' },
      { slug: 'automated-laundry-rack-installation', name: 'Automated Laundry Rack Installation' },
      { slug: 'curtain-rod-track-installation', name: 'Curtain Rod & Track Installation' }
    ]
  },
  { slug: 'renovation', name: 'Renovation', icon: 'Home', category: 'Renovation', popular: false, image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80', subServices: [] },
  { slug: 'aircon-service', name: 'Aircon Service', icon: 'Wind', category: 'Maintenance', popular: true, image: 'https://images.unsplash.com/photo-1631545806609-bf63e6d3506b?auto=format&fit=crop&w=1400&q=80', subServices: [] },
  {
    slug: 'carpentry-service',
    name: 'Carpentry Service',
    icon: 'Ruler',
    category: 'Carpentry',
    popular: true,
    image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'drawer-repair', name: 'Drawer Repair' },
      { slug: 'kitchen-cabinet-repair-installation-services', name: 'Kitchen Cabinet Repair & Installation' },
      { slug: 'quartz-table-top-installation', name: 'Quartz Table Top Installation' },
      { slug: 'laminate-door-repair', name: 'Laminate Door Repair' }
    ]
  },
  { slug: 'drilling-service', name: 'Drilling Service', icon: 'Drill', category: 'Installation', popular: true, image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=80', subServices: [] },
  {
    slug: 'renovation-services',
    name: 'Renovation Services',
    icon: 'Building2',
    category: 'Renovation',
    popular: false,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'interior-renovations', name: 'Interior Renovations' },
      { slug: 'exterior-renovations', name: 'Exterior Renovations' },
      { slug: 'structural-renovations', name: 'Structural Renovations' },
      { slug: 'electrical-plumbing-renovations', name: 'Electrical & Plumbing Renovations' },
      { slug: 'painting-finishing', name: 'Painting & Finishing' },
      { slug: 'wall-crack-repair', name: 'Wall Crack Repair' },
      { slug: 'wall-plastering', name: 'Wall Plastering' }
    ]
  },
  {
    slug: 'reinstatement',
    name: 'Reinstatement Services',
    icon: 'Undo2',
    category: 'Commercial',
    popular: false,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'commercial-property-reinstatement', name: 'Commercial Property Reinstatement' },
      { slug: 'shop-reinstatement-services', name: 'Shop Reinstatement Services' },
      { slug: 'office-reinstatement-services', name: 'Office Reinstatement Services' },
      { slug: 'fb-shop-reinstatement-services', name: 'F&B Shop Reinstatement Services' },
      { slug: 'industrial-property-reinstatement', name: 'Industrial Property Reinstatement' },
      { slug: 'hdb-wall-reinstatement-hacking-permits', name: 'HDB Wall Reinstatement & Hacking Permits' }
    ]
  },
  {
    slug: 'hacking-dismantling-disposal',
    name: 'Hacking, Dismantling & Disposal',
    icon: 'HardHat',
    category: 'Removal',
    popular: false,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'wall-hacking-services', name: 'Wall Hacking Services' },
      { slug: 'floor-tile-removal-services', name: 'Floor & Tile Removal Services' },
      { slug: 'general-painting-touchup-services', name: 'General Painting & Touch-up Services' },
      { slug: 'ceiling-mould-removal-anti-mould-painting', name: 'Ceiling Mould Removal & Anti-Mould Painting' },
      { slug: 'false-ceiling-cornice-hacking', name: 'False Ceiling & Wall Cornice Hacking Services' },
      { slug: 'door-frame-removal-services', name: 'Door Frame & Door Removal Services' },
      { slug: 'bathroom-tiles-bathtub-hacking', name: 'Bathroom Tiles & Bathtub Hacking Services' },
      { slug: 'carpentry-cabinet-kitchen-dismantling', name: 'Built-in Carpentry, Cabinet & Kitchen Dismantling' }
    ]
  },
  {
    slug: 'window-repair',
    name: 'Window Repair',
    icon: 'PanelTop',
    category: 'Repair',
    popular: false,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'window-frame-repair', name: 'Window Frame Repair' },
      { slug: 'window-glass-replacement', name: 'Window Glass Replacement' },
      { slug: 'window-seal-replacement', name: 'Window Seal Replacement' },
      { slug: 'window-latch-repair', name: 'Window Latch Repair' },
      { slug: 'window-hinge-repair', name: 'Window Hinge Repair' },
      { slug: 'window-cleaning-maintenance', name: 'Window Cleaning & Maintenance' },
      { slug: 'sliding-window-repair', name: 'Sliding Window Repair' }
    ]
  },
  { slug: 'washing-machine-repair', name: 'Washing Machine Repair', icon: 'WashingMachine', category: 'Appliance', popular: false, image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1400&q=80', subServices: [] },
  { slug: 'mounting-service', name: 'TV & Mounting Service', icon: 'Tv', category: 'Installation', popular: true, image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1400&q=80', subServices: [] },
  { slug: 'fridge-repair', name: 'Fridge Repair', icon: 'Refrigerator', category: 'Appliance', popular: false, image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=1400&q=80', subServices: [] },
  {
    slug: 'dismantle-and-disposal',
    name: 'Dismantling & Disposal',
    icon: 'Recycle',
    category: 'Removal',
    popular: false,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'bed-frame-assembly-dismantle-disposal-service', name: 'Bed Frame Assembly, Dismantle & Disposal' },
      { slug: 'bunk-bed-assembly-dismantle-disposal-service', name: 'Bunk Bed Assembly, Dismantle & Disposal' },
      { slug: 'chair-assembly-dismantle-disposal-service', name: 'Chair Assembly, Dismantle & Disposal' },
      { slug: 'kitchen-cabinet-assembly-dismantle-disposal-service', name: 'Kitchen Cabinet Dismantle & Disposal' },
      { slug: 'wardrobe-assembly-dismantle-disposal-service', name: 'Wardrobe Assembly, Dismantle & Disposal' }
    ]
  },
  { slug: 'rubbish-chute-replacement', name: 'Rubbish Chute Replacement', icon: 'Trash2', category: 'Repair', popular: false, image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80', subServices: [] },
  {
    slug: 'flooring',
    name: 'Flooring',
    icon: 'Layers',
    category: 'Finishing',
    popular: false,
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'vinyl-flooring-installation', name: 'Vinyl Flooring Installation' },
      { slug: 'laminate-flooring-service', name: 'Laminate Flooring Service' },
      { slug: 'parquet-flooring-installation-repair', name: 'Parquet Flooring Installation & Repair' },
      { slug: 'flooring-tiles', name: 'Floor Tiles Installation' },
      { slug: 'carpet-flooring-installation-services', name: 'Carpet Flooring Installation' },
      { slug: 'epoxy-flooring', name: 'Epoxy Flooring' }
    ]
  },
  {
    slug: 'door-repair',
    name: 'Door Repair',
    icon: 'DoorOpen',
    category: 'Repair',
    popular: true,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'door-closer-installation', name: 'Door Closer Installation' },
      { slug: 'door-hinges-replacement', name: 'Door Hinges Replacement' },
      { slug: 'door-lock-installation', name: 'Door Lock Installation' },
      { slug: 'door-repair-toilet-door-repair', name: 'Toilet Door Repair' },
      { slug: 'door-stopper-installation', name: 'Door Stopper Installation' },
      { slug: 'floor-spring-installation', name: 'Floor Spring Installation' },
      { slug: 'glass-door-repair-hinges-replacement', name: 'Glass Door Repair & Hinge Replacement' },
      { slug: 'hdb-bomb-shelter-door-repair', name: 'HDB Bomb Shelter Door Repair' }
    ]
  },
  {
    slug: 'ceiling-partition',
    name: 'Ceiling & Partition',
    icon: 'PanelsTopLeft',
    category: 'Finishing',
    popular: false,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    subServices: [
      { slug: 'ceiling-repair', name: 'Ceiling Repair' },
      { slug: 'partition-and-ceiling-repair', name: 'Partition & Ceiling Repair' },
      { slug: 'partition-wall-installation', name: 'Partition Wall Installation' },
      { slug: 'plaster-ceiling-installation-services', name: 'Plaster Ceiling Installation' },
      { slug: 'roofing-services', name: 'Roofing Services' },
      { slug: 'waterproofing-services', name: 'Waterproofing Services' }
    ]
  }
];

export const categories = ['All', 'Popular', ...Array.from(new Set(services.map((service) => service.category)))];

export const allSubServices = services.flatMap((service) =>
  service.subServices.map((subService) => ({ ...subService, parentSlug: service.slug, parentName: service.name, category: service.category }))
);

export const getService = (slug) => services.find((service) => service.slug === slug);

export const getSubService = (serviceSlug, subServiceSlug) => {
  const service = getService(serviceSlug);
  if (!service) return null;
  const subService = service.subServices.find((item) => item.slug === subServiceSlug);
  return subService ? { ...subService, parentSlug: service.slug, parentName: service.name, category: service.category, image: service.image } : null;
};

export const servicePath = (service) => `/services/${service.slug}`;
export const subServicePath = (service, subService) => `/services/${service.slug}/${subService.slug}`;

export const serviceSummary = (service) =>
  `${service.name} support for Singapore homes, offices, shops, and property teams, delivered with tidy workmanship and clear communication.`;

export const subServiceSummary = (subService, service) =>
  `${subService.name} under our ${service.name} service, planned around your space, schedule, and property requirements in Singapore.`;
