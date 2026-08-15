import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({name: 'eyebrow', title: 'Hero eyebrow', type: 'string'}),
    defineField({name: 'title', title: 'Hero title', type: 'string'}),
    defineField({name: 'intro', title: 'Hero intro', type: 'text', rows: 3}),
    defineField({name: 'primaryCta', title: 'Primary CTA', type: 'linkItem'}),
    defineField({name: 'secondaryCta', title: 'Secondary CTA', type: 'linkItem'}),
    defineField({name: 'heroImage', title: 'Hero image', type: 'externalImage'}),
    defineField({name: 'trustBadges', title: 'Trust badges', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'featureCards', title: 'Feature cards', type: 'array', of: [{type: 'sectionCard'}]}),
    defineField({name: 'propertyTypes', title: 'Property types', type: 'array', of: [{type: 'sectionCard'}]}),
    defineField({name: 'processSteps', title: 'Process steps', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'faqs', title: 'Homepage FAQs', type: 'array', of: [{type: 'faqItem'}]}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'})
  ],
  preview: {
    prepare() {
      return {title: 'Homepage'}
    }
  }
})
