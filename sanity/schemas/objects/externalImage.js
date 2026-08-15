import {defineField, defineType} from 'sanity'

export const externalImage = defineType({
  name: 'externalImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'asset',
      title: 'Upload image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          validation: (Rule) => Rule.required().warning('Alt text helps accessibility and SEO.')
        })
      ]
    }),
    defineField({
      name: 'url',
      title: 'Existing image URL',
      type: 'url',
      description: 'Preserves imported external images until a new Sanity image is uploaded.'
    }),
    defineField({
      name: 'alt',
      title: 'Alt text for existing image URL',
      type: 'string',
      validation: (Rule) => Rule.required().warning('Alt text helps accessibility and SEO.')
    })
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset'
    },
    prepare({title, media}) {
      return {title: title || 'Image', media}
    }
  }
})
