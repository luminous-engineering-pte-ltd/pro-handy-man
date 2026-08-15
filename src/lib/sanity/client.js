import {createClient} from '@sanity/client';
import {hasSanityConfig, sanityApiVersion, sanityDataset, sanityProjectId} from './config.js';

const token = import.meta.env.SANITY_API_READ_TOKEN;

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      token,
      useCdn: token ? false : true,
      perspective: 'published'
    })
  : null;

export async function sanityFetch(query, params = {}, fallback = null) {
  if (!sanityClient) return fallback;

  try {
    return await sanityClient.fetch(query, params);
  } catch (error) {
    console.warn('[sanity] Falling back to local content:', error.message);
    return fallback;
  }
}
