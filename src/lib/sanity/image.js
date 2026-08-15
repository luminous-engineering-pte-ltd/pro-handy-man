import {createImageUrlBuilder} from '@sanity/image-url';
import {sanityClient} from './client.js';

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function imageUrl(image, options = {}) {
  if (!image) return '';
  if (image.asset && builder) {
    let url = builder.image(image.asset).auto('format');
    if (options.width) url = url.width(options.width);
    if (options.height) url = url.height(options.height);
    if (options.quality) url = url.quality(options.quality);
    return url.url();
  }
  return image.url || '';
}

export function imageAlt(image, fallback = '') {
  return image?.asset?.alt || image?.alt || fallback;
}
