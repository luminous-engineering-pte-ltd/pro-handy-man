# Pro Handy Man CMS Guide

Studio URL: https://pro-handy-man-cms.sanity.studio/

Production website: https://www.prohandymansg.com/

## Logging In

Go to the Studio URL and sign in with the Sanity account invited to the project. The client should be added in Sanity Manage as an Editor or Administrator.

## What Can Be Edited

Editable content includes the homepage hero, page SEO, service categories, sub-services, blog posts, testimonials, projects/gallery items, FAQs, navigation, footer text/links, global CTA text, contact details, images, slugs, and redirects.

Some page layouts and visual components still require a developer. The CMS edits the content inside the current design rather than redesigning the site.

## Publishing

Sanity has drafts and published documents. Drafts are saved but do not appear on the live site. Click Publish when the content is ready.

Publishing, updating, or deleting website-impacting documents should trigger a Vercel rebuild after the webhook is created. Wait for the deployment to finish before checking the live website.

## Preview

The Open preview button opens the current production URL for the document. It does not show unpublished draft content yet. Publish the document, wait for the Vercel rebuild, then use preview or open the live page.

## Slugs And Previous Slugs

Slug means the page URL. For example, a blog post slug of `small-home-repairs-singapore` creates:

`/blog/small-home-repairs-singapore`

When changing a URL:

1. Copy the old slug.
2. Change the Current slug.
3. Add the old slug to Previous slugs.
4. Publish the document.
5. Wait for deployment to finish.

This keeps old URLs from becoming 404 pages after the next rebuild.

## Images

Imported content keeps existing external image URLs working. For future edits, upload a new image in Sanity and add clear alt text for accessibility and SEO.

## Blog Posts

The client can create new blog posts from Blog Posts. Add a title, slug, date/tag, excerpt, image, body, and SEO fields. Publish the post and wait for Vercel to rebuild.

## Webhook Setup

In Sanity Manage, create a webhook:

- Name: Vercel production rebuild
- URL: `https://api.vercel.com/v1/integrations/deploy/prj_RfFjgvRYw1pXAqp3MbltEwQd2snr/5E8MiOXCrX`
- Method: POST
- Dataset: production
- Trigger on: Create, Update, Delete
- Drafts: do not trigger on drafts
- Filter:

```groq
_type in ["siteSettings", "homePage", "fixedPage", "service", "blogPost", "project", "testimonial", "globalFaq", "redirect"] && !(_id in path("drafts.**"))
```

## Environment Variables

Local `.env` and Vercel:

- `PUBLIC_SANITY_PROJECT_ID=glbnoc37`
- `PUBLIC_SANITY_DATASET=production`
- `SANITY_API_READ_TOKEN` if the dataset requires private reads
- `SANITY_DEPLOY_WEBHOOK_URL` for webhook documentation/scripts

Sanity Studio local/deploy:

- `SANITY_STUDIO_PROJECT_ID=glbnoc37`
- `SANITY_STUDIO_DATASET=production`
- `SANITY_STUDIO_PREVIEW_URL=https://www.prohandymansg.com`

## Invite The Client

Open Sanity Manage for project `glbnoc37`, invite the client email, and assign Editor or Administrator depending on whether they should manage users/settings.
