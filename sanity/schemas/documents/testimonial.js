import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Customer name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'area', title: 'Area/property', type: 'string'}),
    defineField({name: 'rating', title: 'Rating', type: 'number', initialValue: 5, validation: (Rule) => Rule.min(1).max(5)}),
    defineField({name: 'service', title: 'Service', type: 'string'}),
    defineField({name: 'text', title: 'Review text', type: 'text', rows: 4, validation: (Rule) => Rule.required()}),
    defineField({name: 'featured', title: 'Show on homepage', type: 'boolean', initialValue: true})
  ],
  preview: {
    select: {title: 'name', subtitle: 'service'}
  }
})
