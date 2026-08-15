const productionUrl = 'https://www.prohandymansg.com'

const cleanSlug = (slug) => (typeof slug === 'string' ? slug.replace(/^\/+|\/+$/g, '') : '')

const urlForDocument = (doc) => {
  const base = process.env.SANITY_STUDIO_PREVIEW_URL || productionUrl

  if (doc._type === 'homePage') return `${base}/`
  if (doc._type === 'fixedPage') return `${base}/${cleanSlug(doc.slug?.current || doc.pageKey)}`
  if (doc._type === 'blogPost') return `${base}/blog/${cleanSlug(doc.slug?.current)}`
  if (doc._type === 'service') return `${base}/services/${cleanSlug(doc.slug?.current)}`
  if (doc._type === 'project') return `${base}/#recent-projects`
  if (doc._type === 'testimonial') return `${base}/#customer-reviews`
  if (doc._type === 'globalFaq') return `${base}/#faq`

  return base
}

export function productionPreviewAction(context) {
  const {published, draft} = context
  const doc = draft || published

  return {
    label: 'Open preview',
    disabled: !doc,
    onHandle: () => {
      window.open(urlForDocument(doc), '_blank', 'noopener,noreferrer')
    }
  }
}
