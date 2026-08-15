import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Service name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Current slug', type: 'slug', options: {source: 'name'}, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'previousSlugs',
      title: 'Previous slugs',
      type: 'array',
      of: [{type: 'string'}],
      description: 'When changing this URL, add the old slug here, publish, then wait for deployment to finish.'
    }),
    defineField({name: 'icon', title: 'Icon name', type: 'string'}),
    defineField({name: 'category', title: 'Category', type: 'string'}),
    defineField({name: 'popular', title: 'Popular service', type: 'boolean', initialValue: false}),
    defineField({name: 'image', title: 'Image', type: 'externalImage'}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'intro', title: 'Intro', type: 'text', rows: 4}),
    defineField({name: 'sections', title: 'What to expect cards', type: 'array', of: [{type: 'sectionCard'}]}),
    defineField({
      name: 'subServices',
      title: 'Sub-services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'slug', title: 'Current slug', type: 'slug', options: {source: 'name'}, validation: (Rule) => Rule.required()}),
            defineField({
              name: 'previousSlugs',
              title: 'Previous slugs',
              type: 'array',
              of: [{type: 'string'}],
              description: 'When changing this URL, add the old sub-service slug here.'
            }),
            defineField({name: 'desc', title: 'Card description', type: 'text', rows: 3}),
            defineField({name: 'intro', title: 'Page intro', type: 'text', rows: 4}),
            defineField({name: 'sections', title: 'Service scope cards', type: 'array', of: [{type: 'sectionCard'}]}),
            defineField({name: 'covers', title: 'Included work', type: 'array', of: [{type: 'string'}]}),
            defineField({name: 'faqs', title: 'FAQs', type: 'array', of: [{type: 'faqItem'}]}),
            defineField({name: 'seo', title: 'SEO', type: 'seo'})
          ],
          preview: {
            select: {title: 'name', subtitle: 'slug.current'}
          }
        }
      ]
    }),
    defineField({name: 'faqs', title: 'FAQs', type: 'array', of: [{type: 'faqItem'}]}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'})
  ],
  orderings: [{title: 'Service name', name: 'nameAsc', by: [{field: 'name', direction: 'asc'}]}],
  preview: {
    select: {title: 'name', subtitle: 'category', media: 'image.asset'}
  }
})
