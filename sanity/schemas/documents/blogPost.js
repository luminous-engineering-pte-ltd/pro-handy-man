import {defineArrayMember, defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Current slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'previousSlugs',
      title: 'Previous slugs',
      type: 'array',
      of: [{type: 'string'}],
      description: 'When changing this URL, add the old slug here, publish, then wait for deployment to finish.'
    }),
    defineField({name: 'publishedAt', title: 'Published date', type: 'datetime'}),
    defineField({name: 'displayDate', title: 'Display date', type: 'string'}),
    defineField({name: 'tag', title: 'Category/tag', type: 'string'}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'image', title: 'Featured image', type: 'externalImage'}),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'}
          ],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({name: 'href', type: 'url', title: 'URL'}),
                  defineField({name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true})
                ]
              }
            ]
          }
        }),
        defineArrayMember({type: 'externalImage'})
      ]
    }),
    defineField({name: 'seo', title: 'SEO', type: 'seo'})
  ],
  orderings: [{title: 'Newest first', name: 'publishedAtDesc', by: [{field: 'publishedAt', direction: 'desc'}]}],
  preview: {
    select: {title: 'title', subtitle: 'displayDate', media: 'image.asset'}
  }
})
