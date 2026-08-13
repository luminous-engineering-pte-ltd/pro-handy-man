export const posts = [
  {
    slug: 'pool-renovation-singapore',
    title: 'Pool Renovation Singapore: The Complete Guide to Restoring Your Condo Swimming Pool',
    date: '27 Jul 2026',
    tag: 'Pool Renovation',
    excerpt: 'Cracked tiles, cloudy water, worn-out decking? Learn when pool renovation is worth it, what professional pool repair involves, and how regular swimming pool maintenance protects the space.',
    image: 'https://horizons-cdn.hostinger.com/d8d8a46e-62f9-45a3-ada1-9e371d25612a/ceb343080527f10b9f703260032a0a1e.jpg'
  },
  {
    slug: 'small-home-repairs-singapore',
    title: '7 Small Home Repairs Every Singapore Homeowner Should Not Ignore',
    date: '15 Jul 2026',
    tag: 'Home Care',
    excerpt: 'From dripping taps to loose door hinges, learn which small repairs can turn into costly problems and how a handyman can help you stay ahead.',
    image: 'https://images.hostinger.com/2b5a7906-a509-4576-9367-fe9cb4ba81cd.png'
  },
  {
    slug: 'leaking-tap-hdb-flat',
    title: 'How to Fix a Leaking Tap in Your HDB Flat',
    date: '02 Jul 2026',
    tag: 'Plumbing',
    excerpt: 'A leaking tap wastes water and money. Here are the common causes and when it is time to call a professional plumber in Singapore.',
    image: 'https://images.hostinger.com/80427395-22f5-45dd-a62c-896cc5b0d3f0.png'
  },
  {
    slug: 'lighting-for-singapore-home',
    title: 'Choosing the Right Lighting for Your Singapore Home',
    date: '20 Jun 2026',
    tag: 'Electrical',
    excerpt: 'Warm or cool, downlights or feature fittings? Practical tips for lighting that is safe, useful, and suited to your room.',
    image: 'https://images.hostinger.com/e7189761-6630-4cf3-a107-6935877571b2.png'
  },
  {
    slug: 'repainting-hdb-flat',
    title: 'A Beginner Guide to Repainting Your HDB Flat',
    date: '05 Jun 2026',
    tag: 'Painting',
    excerpt: 'Planning a repaint? Learn how to pick colours, prep your walls, and get a spotless, long-lasting finish without the mess.',
    image: 'https://images.hostinger.com/d7a5ebd7-6383-4a59-b779-fd9c8175d550.png'
  },
  {
    slug: 'flat-pack-furniture-handyman',
    title: 'Flat-Pack Furniture: DIY or Hire a Handyman?',
    date: '22 May 2026',
    tag: 'Assembly',
    excerpt: 'Wardrobes, beds, and desks can be trickier than they look. Here is when it pays to bring in a professional for a secure, safe build.',
    image: 'https://images.hostinger.com/7de273e2-6012-4d63-816e-a1374bb6ba67.png'
  },
  {
    slug: 'small-renovation-ideas-condo',
    title: 'Small Renovation Ideas to Refresh Your Condo',
    date: '08 May 2026',
    tag: 'Renovation',
    excerpt: 'You do not need a full overhaul to transform your space. Discover practical makeover ideas for Singapore condos and flats.',
    image: 'https://images.hostinger.com/1e41c22d-fd6b-49af-bcfb-64b9be3b9913.png'
  }
];

export const getPost = (slug) => posts.find((post) => post.slug === slug);
