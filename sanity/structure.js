const singleton = (S, type, title) =>
  S.listItem()
    .title(title)
    .schemaType(type)
    .child(S.document().schemaType(type).documentId(type).title(title))

export const structure = (S) =>
  S.list()
    .title('Pro Handy Man CMS')
    .items([
      S.listItem()
        .title('Main Pages')
        .child(
          S.list()
            .title('Main Pages')
            .items([
              singleton(S, 'homePage', 'Homepage'),
              S.documentTypeListItem('fixedPage').title('About / Contact / Quote Pages')
            ])
        ),
      S.divider(),
      S.documentTypeListItem('service').title('Services & Sub-services'),
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.documentTypeListItem('project').title('Projects / Gallery'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('globalFaq').title('FAQs'),
      S.divider(),
      singleton(S, 'siteSettings', 'Navigation, Footer & Site Settings'),
      S.documentTypeListItem('redirect').title('Manual Redirects'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'siteSettings',
            'homePage',
            'fixedPage',
            'service',
            'blogPost',
            'project',
            'testimonial',
            'globalFaq',
            'redirect'
          ].includes(item.getId())
      )
    ])
