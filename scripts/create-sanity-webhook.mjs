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

console.log('Create this webhook in Sanity Manage:');
console.log(`Project: ${projectId}`);
console.log(`Dataset: ${dataset}`);
console.log('Name: Vercel production rebuild');
console.log(`URL: ${hookUrl}`);
console.log('Method: POST');
console.log('Trigger on: Create, Update, Delete');
console.log('Drafts: Off / exclude drafts');
console.log(`Filter: _type in [${filterTypes.map((type) => `"${type}"`).join(', ')}] && !(_id in path("drafts.**"))`);
