import {defineField, defineType} from 'sanity'

export const fixedPage = defineType({
  name: 'fixedPage',
  title: 'Fixed page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageKey',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          {title: 'About', value: 'about'},
          {title: 'Contact', value: 'contact'},
          {title: 'Request Quote', value: 'request-quote'},
          {title: 'Services Index', value: 'services'},
          {title: 'Blog Index', value: 'blog'}
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({name: 'slug', title: 'Current slug', type: 'slug', options: {source: 'pageKey'}, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'previousSlugs',
      title: 'Previous slugs',
      type: 'array',
      of: [{type: 'string'}],
      description: 'When changing this URL, add the old slug here, publish, then wait for deployment to finish.'
    }),
    defineField({name: 'eyebrow', title: 'Hero eyebrow', type: 'string'}),
    defineField({name: 'title', title: 'Hero title', type: 'string'}),
    defineField({name: 'intro', title: 'Hero intro', type: 'text', rows: 4}),
    defineField({name: 'heroImage', title: 'Hero image', type: 'externalImage'}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'})
  ],
  preview: {
    select: {title: 'title', subtitle: 'pageKey'}
  }
})
