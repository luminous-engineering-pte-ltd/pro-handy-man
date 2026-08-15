import {writeFile} from 'node:fs/promises';
import {contact} from '../src/data/contact.js';
import {services} from '../src/data/services.js';
import {posts} from '../src/data/posts.js';
import {
  recentProjects,
  testimonials
} from '../src/data/homeSections.js';

const outputPath = new URL('../sanity-seed.ndjson', import.meta.url);

const idFor = (...parts) =>
  parts
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const slug = (current) => ({_type: 'slug', current});
const image = (url, alt) => ({_type: 'externalImage', url, alt});
const faq = (item) => ({_type: 'faqItem', question: item.q, answer: item.a});
const card = (item) => ({
  _type: 'sectionCard',
  icon: item.icon,
  title: item.h || item.title,
  text: item.p || item.text
});
const ptBlock = (text) => ({
  _type: 'block',
  style: 'normal',
  children: [{_type: 'span', text, marks: []}],
  markDefs: []
});

const docs = [];

docs.push({
  _id: 'siteSettings',
  _type: 'siteSettings',
  businessName: 'Pro Handy Man',
  brandName: 'Pro Handyman SG',
  productionUrl: 'https://www.prohandymansg.com/',
  ...contact,
  navigation: [
    {_type: 'linkItem', label: 'Home', href: '/'},
    {_type: 'linkItem', label: 'Services', href: '/services'},
    {_type: 'linkItem', label: 'About', href: '/about'},
    {_type: 'linkItem', label: 'Blog', href: '/blog'},
    {_type: 'linkItem', label: 'Contact', href: '/contact'}
  ],
  footerCompanyLinks: [
    {_type: 'linkItem', label: 'About', href: '/about'},
    {_type: 'linkItem', label: 'Services', href: '/services'},
    {_type: 'linkItem', label: 'Blog', href: '/blog'},
    {_type: 'linkItem', label: 'Request Quote', href: '/request-quote'},
    {_type: 'linkItem', label: 'Contact', href: '/contact'}
  ],
  footerDescription:
    'Professional handyman services for Singapore homes, offices, shops, and properties. Built for clear quoting, tidy work, and confident service discovery.',
  globalCtaTitle: 'Need handyman help?',
  globalCtaText: 'Share the task, property type, location, preferred timing, and photos if available.',
  defaultSeo: {
    _type: 'seo',
    metaTitle: 'Pro Handyman SG | Professional Handyman Services Singapore',
    metaDescription:
      'Premium handyman services in Singapore for homes, offices, shops, and properties. Explore repair, installation, maintenance, renovation, and reinstatement services.'
  }
});

docs.push({
  _id: 'homePage',
  _type: 'homePage',
  eyebrow: 'Professional Handyman Services Across Singapore',
  title: 'Repairs, installs, and property fixes handled with care.',
  intro:
    'Pro Handyman SG brings a premium service experience to everyday repairs, installations, maintenance, and property works for Singapore homes and commercial spaces.',
  primaryCta: {_type: 'linkItem', label: 'Get a Free Quote', href: '/request-quote'},
  secondaryCta: {_type: 'linkItem', label: 'Explore Services', href: '/services'},
  heroImage: image(
    'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1500&q=82',
    'Professional handyman working with tools in a home'
  ),
  trustBadges: ['Singapore-wide service requests', 'Residential and commercial', 'Clear quote workflow'],
  featureCards: [
    {_type: 'sectionCard', icon: 'ShieldCheck', title: 'Professional workflow', text: 'Structured quote requests and service pages help customers explain the job clearly.'},
    {_type: 'sectionCard', icon: 'Clock3', title: 'Fast to understand', text: 'Search, filters, and dynamic pages make a large service catalogue easy to navigate.'},
    {_type: 'sectionCard', icon: 'MapPin', title: 'Singapore focused', text: 'Designed around HDB, condos, offices, shops, and property needs across Singapore.'}
  ],
  propertyTypes: [
    {_type: 'sectionCard', title: 'Residential', text: 'HDB flats, condos, apartments, and landed homes.'},
    {_type: 'sectionCard', title: 'Commercial', text: 'Offices, retail shops, F&B spaces, and commercial properties.'},
    {_type: 'sectionCard', title: 'Property Support', text: 'Reinstatement, hacking, dismantling, and maintenance requests.'},
    {_type: 'sectionCard', title: 'Everyday Fixes', text: 'Doors, taps, lights, shelves, paint, appliances, and more.'}
  ],
  processSteps: ['Tell us what you need', 'Share photos or details', 'Review the quote', 'Schedule the job'],
  faqs: [
    faq({q: 'What services does Pro Handyman SG provide?', a: 'The website covers repair, plumbing, electrical, painting, furniture assembly, renovation, aircon, carpentry, drilling, reinstatement, disposal, flooring, door, ceiling, partition, appliance, and mounting services.'}),
    faq({q: 'How can I request a quote?', a: 'Use the request quote form and include the service, property type, location, preferred timing, and a short description of the work needed.'}),
    faq({q: 'Do you handle residential and commercial work?', a: 'The service range is presented for homes, offices, shops, commercial spaces, and property needs across Singapore.'}),
    faq({q: 'Do you list pricing online?', a: 'Pricing depends on the task scope, site condition, materials, access, and timing.'})
  ]
});

[
  ['about', 'About Us', 'Premium flooring care, repairs, and property works for Singapore spaces.', 'Pro Handyman SG helps homeowners, tenants, offices, shops, and property teams plan flooring, repair, installation, restoration, and maintenance work with clarity.'],
  ['contact', 'Get In Touch', "Let's Transform Your Floor", 'Request a professional flooring quote for polishing, repair, varnishing, surface restoration, or related property works.'],
  ['request-quote', 'Free Quote Request', 'A better brief makes a better quote.', 'Share the service, location, timing, property type, and project notes.'],
  ['services', 'All Services', 'A complete handyman service directory for Singapore.', 'Search and filter every extracted service category and sub-service.'],
  ['blog', 'Blog', 'Home care tips and handyman guides.', 'Practical advice on repairs, maintenance, and improvements for Singapore homes.']
].forEach(([pageKey, eyebrow, title, intro]) => {
  docs.push({_id: `fixedPage-${pageKey}`, _type: 'fixedPage', pageKey, slug: slug(pageKey), previousSlugs: [], eyebrow, title, intro});
});

services.forEach((service, index) => {
  docs.push({
    _id: `service-${service.slug}`,
    _type: 'service',
    name: service.name,
    slug: slug(service.slug),
    previousSlugs: [],
    icon: service.icon,
    category: service.category,
    popular: service.popular,
    image: image(service.image, `${service.name} service in Singapore`),
    tagline: service.tagline,
    intro: service.intro,
    sections: (service.sections || []).map(card),
    subServices: (service.subServices || []).map((subService) => ({
      _type: 'object',
      name: subService.name,
      slug: slug(subService.slug),
      previousSlugs: [],
      desc: subService.desc,
      intro: subService.intro,
      sections: (subService.sections || []).map(card),
      covers: subService.covers || [],
      faqs: (subService.faqs || []).map(faq)
    })),
    faqs: (service.faqs || []).map(faq),
    orderRank: index
  });
});

posts.forEach((post) => {
  docs.push({
    _id: `blogPost-${post.slug}`,
    _type: 'blogPost',
    title: post.title,
    slug: slug(post.slug),
    previousSlugs: post.previousSlugs || [],
    displayDate: post.date,
    tag: post.tag,
    excerpt: post.excerpt,
    image: image(post.image, post.title),
    body: [
      ptBlock(post.excerpt),
      {_type: 'block', style: 'h2', children: [{_type: 'span', text: 'What to check first', marks: []}], markDefs: []},
      ptBlock('Look for recurring symptoms, moisture, loose fittings, worn hardware, cracking, noise, stains, or signs that the same issue is returning after quick fixes.'),
      {_type: 'block', style: 'h2', children: [{_type: 'span', text: 'When to ask for help', marks: []}], markDefs: []},
      ptBlock('If the work involves plumbing connections, electrical fittings, heavy mounting, ladders, glass, hacking, waterproofing, or built-in fixtures, a professional handyman can help scope the safest method and materials.')
    ]
  });
});

testimonials.forEach((item) => {
  docs.push({_id: `testimonial-${idFor(item.name)}`, _type: 'testimonial', ...item, featured: true});
});

recentProjects.forEach((item) => {
  docs.push({
    _id: `project-${idFor(item.title)}`,
    _type: 'project',
    title: item.title,
    slug: slug(idFor(item.title)),
    previousSlugs: [],
    category: item.category,
    desc: item.desc,
    image: image(item.img, `${item.title} completed by Pro Handyman SG`),
    featured: true
  });
});

await writeFile(outputPath, `${docs.map((doc) => JSON.stringify(doc)).join('\n')}\n`);
console.log(`Wrote ${docs.length} Sanity documents to ${outputPath.pathname}`);
