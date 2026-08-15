import {defineField, defineType} from 'sanity'

export const sectionCard = defineType({
  name: 'sectionCard',
  title: 'Content card',
  type: 'object',
  fields: [
    defineField({name: 'icon', title: 'Icon name', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'text', title: 'Text', type: 'text', rows: 3})
  ],
  preview: {
    select: {title: 'title', subtitle: 'text'}
  }
})
