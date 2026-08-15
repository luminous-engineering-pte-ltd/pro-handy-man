import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      validation: (Rule) =>
        Rule.max(70).warning('Best practice: keep titles around 50-60 characters.')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.max(170).warning('Best practice: keep descriptions around 120-160 characters.')
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Leave blank to use the live URL generated from the current slug.'
    }),
    defineField({
      name: 'ogImage',
      title: 'Social sharing image',
      type: 'externalImage'
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      initialValue: false
    })
  ],
  options: {
    collapsible: true,
    collapsed: false
  }
})
