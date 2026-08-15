import {defineField, defineType} from 'sanity'

export const globalFaq = defineType({
  name: 'globalFaq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'group',
      title: 'Where this FAQ appears',
      type: 'string',
      options: {list: ['Homepage', 'Services', 'Contact', 'General']},
      initialValue: 'General'
    }),
    defineField({name: 'featured', title: 'Show on homepage', type: 'boolean', initialValue: true})
  ],
  preview: {
    select: {title: 'question', subtitle: 'group'}
  }
})
