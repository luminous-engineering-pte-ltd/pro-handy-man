import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project / gallery item',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Current slug', type: 'slug', options: {source: 'title'}}),
    defineField({
      name: 'previousSlugs',
      title: 'Previous slugs',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Use this if project detail pages are added later.'
    }),
    defineField({name: 'category', title: 'Category', type: 'string'}),
    defineField({name: 'desc', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'image', title: 'Image', type: 'externalImage'}),
    defineField({name: 'featured', title: 'Show on homepage', type: 'boolean', initialValue: true}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'})
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'image.asset'}
  }
})
