import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({name: 'businessName', title: 'Business name', type: 'string', initialValue: 'Pro Handy Man'}),
    defineField({name: 'brandName', title: 'Website brand name', type: 'string', initialValue: 'Pro Handyman SG'}),
    defineField({name: 'productionUrl', title: 'Production URL', type: 'url', initialValue: 'https://www.prohandymansg.com/'}),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'phoneHref', title: 'Phone link', type: 'string'}),
    defineField({name: 'whatsappHref', title: 'WhatsApp link', type: 'url'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'emailHref', title: 'Email link', type: 'string'}),
    defineField({name: 'area', title: 'Service area', type: 'string'}),
    defineField({name: 'navigation', title: 'Header navigation', type: 'array', of: [{type: 'linkItem'}]}),
    defineField({name: 'footerCompanyLinks', title: 'Footer company links', type: 'array', of: [{type: 'linkItem'}]}),
    defineField({name: 'footerDescription', title: 'Footer description', type: 'text', rows: 3}),
    defineField({name: 'globalCtaTitle', title: 'Global CTA title', type: 'string'}),
    defineField({name: 'globalCtaText', title: 'Global CTA text', type: 'text', rows: 3}),
    defineField({name: 'defaultSeo', title: 'Default SEO', type: 'seo'})
  ],
  preview: {
    prepare() {
      return {title: 'Site settings'}
    }
  }
})
