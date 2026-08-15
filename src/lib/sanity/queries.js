export const serviceProjection = `{
  _id,
  name,
  "slug": slug.current,
  previousSlugs,
  icon,
  category,
  popular,
  image,
  tagline,
  intro,
  sections[]{ "h": coalesce(title, h), "p": coalesce(text, p), icon },
  subServices[]{
    name,
    "slug": slug.current,
    previousSlugs,
    desc,
    intro,
    sections[]{ "h": coalesce(title, h), "p": coalesce(text, p), icon },
    covers,
    faqs[]{ "q": question, "a": answer },
    seo
  },
  faqs[]{ "q": question, "a": answer },
  seo
}`;

export const postProjection = `{
  _id,
  title,
  "slug": slug.current,
  previousSlugs,
  publishedAt,
  displayDate,
  "date": coalesce(displayDate, string::split(string(publishedAt), "T")[0]),
  tag,
  excerpt,
  image,
  body,
  seo
}`;

export const settingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]`;
export const homePageQuery = `*[_type == "homePage" && _id == "homePage"][0]`;
export const fixedPageQuery = `*[_type == "fixedPage" && pageKey == $pageKey][0]`;
export const servicesQuery = `*[_type == "service"] | order(name asc) ${serviceProjection}`;
export const postsQuery = `*[_type == "blogPost"] | order(coalesce(publishedAt, _createdAt) desc) ${postProjection}`;
export const redirectsQuery = `*[_type == "redirect"]{from, to, permanent}`;
export const testimonialsQuery = `*[_type == "testimonial" && featured != false] | order(_createdAt asc)`;
export const projectsQuery = `*[_type == "project" && featured != false] | order(_createdAt asc)`;
export const faqsQuery = `*[_type == "globalFaq" && featured != false] | order(_createdAt asc){ "q": question, "a": answer, group }`;
