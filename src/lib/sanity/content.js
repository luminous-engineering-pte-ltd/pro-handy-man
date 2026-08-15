import {contact as localContact} from '@/data/contact.js';
import {posts as localPosts} from '@/data/posts.js';
import {services as localServices} from '@/data/services.js';
import {recentProjects as localProjects, testimonials as localTestimonials} from '@/data/homeSections.js';
import {imageUrl} from './image.js';
import {sanityFetch} from './client.js';
import {
  faqsQuery,
  fixedPageQuery,
  homePageQuery,
  postsQuery,
  projectsQuery,
  redirectsQuery,
  servicesQuery,
  settingsQuery,
  testimonialsQuery
} from './queries.js';

const normalizeImage = (image, fallback = '') => imageUrl(image, {width: 1600, quality: 82}) || fallback;
const normalizeSeoImage = (seo) => (seo?.ogImage ? normalizeImage(seo.ogImage) : undefined);

export function resolveSeo(seo = {}, fallback = {}) {
  seo = seo || {};
  fallback = fallback || {};

  return {
    title: seo.metaTitle || fallback.title,
    description: seo.metaDescription || fallback.description,
    canonical: seo.canonicalUrl || fallback.canonical,
    image: normalizeSeoImage(seo) || fallback.image,
    noIndex: seo.noIndex || false
  };
}

export async function getSiteSettings() {
  const settings = await sanityFetch(settingsQuery, {}, null);
  if (!settings) return {contact: localContact};

  return {
    ...settings,
    contact: {
      phone: settings.phone || localContact.phone,
      phoneHref: settings.phoneHref || localContact.phoneHref,
      whatsappHref: settings.whatsappHref || localContact.whatsappHref,
      email: settings.email || localContact.email,
      emailHref: settings.emailHref || localContact.emailHref,
      area: settings.area || localContact.area
    }
  };
}

const normalizeService = (service) => ({
  ...service,
  image: normalizeImage(service.image, service.image),
  subServices: (service.subServices || []).map((subService) => ({
    ...subService,
    slug: subService.slug,
    sections: subService.sections || [],
    faqs: subService.faqs || []
  }))
});

export async function getServices() {
  const services = await sanityFetch(servicesQuery, {}, null);
  if (!services?.length) return localServices;
  return services.map(normalizeService);
}

export async function getPosts() {
  const posts = await sanityFetch(postsQuery, {}, null);
  if (!posts?.length) return localPosts;
  return posts.map((post) => ({
    ...post,
    date: post.displayDate || post.date || '',
    image: normalizeImage(post.image, post.image)
  }));
}

export async function getHomePage() {
  return sanityFetch(homePageQuery, {}, null);
}

export async function getFixedPage(pageKey) {
  return sanityFetch(fixedPageQuery, {pageKey}, null);
}

export async function getHomeCollections() {
  const [testimonials, projects, faqs] = await Promise.all([
    sanityFetch(testimonialsQuery, {}, null),
    sanityFetch(projectsQuery, {}, null),
    sanityFetch(faqsQuery, {}, null)
  ]);

  return {
    testimonials: testimonials?.length ? testimonials : localTestimonials,
    projects: projects?.length
      ? projects.map((project) => ({...project, img: normalizeImage(project.image, project.img)}))
      : localProjects,
    faqs
  };
}

export async function getRedirects() {
  const [manualRedirects, services, posts] = await Promise.all([
    sanityFetch(redirectsQuery, {}, []),
    getServices(),
    getPosts()
  ]);

  const redirects = [...(manualRedirects || [])];

  posts.forEach((post) => {
    (post.previousSlugs || []).forEach((slug) => {
      redirects.push({from: `/blog/${slug}`, to: `/blog/${post.slug}`, permanent: true});
    });
  });

  services.forEach((service) => {
    (service.previousSlugs || []).forEach((slug) => {
      redirects.push({from: `/services/${slug}`, to: `/services/${service.slug}`, permanent: true});
    });
    (service.subServices || []).forEach((subService) => {
      (subService.previousSlugs || []).forEach((slug) => {
        redirects.push({
          from: `/services/${service.slug}/${slug}`,
          to: `/services/${service.slug}/${subService.slug}`,
          permanent: true
        });
      });
    });
  });

  return redirects.filter((redirect) => redirect.from && redirect.to && redirect.from !== redirect.to);
}
