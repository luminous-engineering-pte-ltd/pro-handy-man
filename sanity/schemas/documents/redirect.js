import {defineField, defineType} from 'sanity'

export const redirect = defineType({
  name: 'redirect',
  title: 'Manual redirect',
  type: 'document',
  fields: [
    defineField({
      name: 'from',
      title: 'Old path',
      type: 'string',
      description: 'Example: /old-page',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'to',
      title: 'New path',
      type: 'string',
      description: 'Example: /new-page',
      validation: (Rule) => Rule.required()
    }),
    defineField({name: 'permanent', title: 'Permanent redirect', type: 'boolean', initialValue: true})
  ],
  preview: {
    select: {title: 'from', subtitle: 'to'}
  }
})
