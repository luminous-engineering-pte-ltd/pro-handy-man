import {getCliClient} from 'sanity/cli';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || 'glbnoc37';
const dataset = process.env.PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';
const hookUrl =
  process.env.SANITY_DEPLOY_WEBHOOK_URL ||
  'https://api.vercel.com/v1/integrations/deploy/prj_RfFjgvRYw1pXAqp3MbltEwQd2snr/5E8MiOXCrX';

const filterTypes = [
  'siteSettings',
  'homePage',
  'fixedPage',
  'service',
  'blogPost',
  'project',
  'testimonial',
  'globalFaq',
  'redirect'
];
const filter = `_type in [${filterTypes.map((type) => `"${type}"`).join(', ')}] && !(_id in path("drafts.**"))`;
const body = {
  type: 'document',
  name: 'Vercel production rebuild',
  url: hookUrl,
  dataset,
  description: 'Triggers Vercel rebuilds when website-impacting Sanity documents are published, updated, or deleted.',
  rule: {
    on: ['create', 'update', 'delete'],
    filter,
    projection: '{_id, _type, slug}'
  },
  apiVersion: 'v2025-02-19',
  httpMethod: 'POST',
  includeDrafts: false,
  includeAllVersions: false,
  isDisabledByUser: false
};

const printSettings = () => {
  console.log('Sanity webhook settings:');
  console.log(`Project: ${projectId}`);
  console.log(`Dataset: ${dataset}`);
  console.log(`Name: ${body.name}`);
  console.log(`URL: ${hookUrl}`);
  console.log('Method: POST');
  console.log('Trigger on: Create, Update, Delete');
  console.log('Drafts: Off / exclude drafts');
  console.log(`Filter: ${filter}`);
};

try {
  const client = getCliClient({apiVersion: '2025-02-19'});
  const existing = await client.request({url: `/hooks/projects/${projectId}`, method: 'GET'});
  const match = existing.find((hook) => hook.name === body.name || hook.url === hookUrl);

  if (match) {
    console.log(`Webhook already exists: ${match.id || match._id || body.name}`);
    printSettings();
  } else {
    const created = await client.request({
      url: `/hooks/projects/${projectId}`,
      method: 'POST',
      body
    });
    console.log(`Created webhook: ${created.id || created._id || body.name}`);
    printSettings();
  }
} catch (error) {
  console.error(`Unable to create webhook automatically: ${error.message}`);
  printSettings();
  process.exitCode = 1;
}
