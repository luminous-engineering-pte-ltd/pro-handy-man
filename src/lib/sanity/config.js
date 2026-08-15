export const sanityProjectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID || import.meta.env.SANITY_STUDIO_PROJECT_ID || 'glbnoc37';

export const sanityDataset =
  import.meta.env.PUBLIC_SANITY_DATASET || import.meta.env.SANITY_STUDIO_DATASET || 'production';

export const sanityApiVersion = '2025-02-19';
export const productionUrl = 'https://www.prohandymansg.com';

export const hasSanityConfig = Boolean(sanityProjectId && sanityDataset);
