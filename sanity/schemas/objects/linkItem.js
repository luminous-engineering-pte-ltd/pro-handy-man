import {defineField, defineType} from 'sanity'

export const linkItem = defineType({
  name: 'linkItem',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'href',
      title: 'URL/path',
      type: 'string',
      description: 'Use site paths like /services or full external URLs.',
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {title: 'label', subtitle: 'href'}
  }
})
