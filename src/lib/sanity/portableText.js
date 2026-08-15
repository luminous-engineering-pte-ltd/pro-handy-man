import {toHTML} from '@portabletext/to-html';
import {imageAlt, imageUrl} from './image.js';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export function portableTextToHtml(blocks = []) {
  if (!Array.isArray(blocks) || blocks.length === 0) return '';

  return toHTML(blocks, {
    components: {
      types: {
        externalImage: ({value}) => {
          const src = imageUrl(value, {width: 1400, quality: 82});
          if (!src) return '';
          return `<figure class="my-8 overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white shadow-soft"><img src="${escapeHtml(src)}" alt="${escapeHtml(imageAlt(value))}" class="w-full object-cover" loading="lazy" /></figure>`;
        }
      },
      block: {
        h2: ({children}) => `<h2 class="font-display text-3xl font-extrabold leading-tight text-ink">${children}</h2>`,
        h3: ({children}) => `<h3 class="font-display text-2xl font-extrabold leading-tight text-ink">${children}</h3>`,
        normal: ({children}) => `<p>${children}</p>`
      },
      marks: {
        link: ({children, value}) => {
          const href = value?.href || '#';
          const target = value?.blank ? ' target="_blank" rel="noopener noreferrer"' : '';
          return `<a href="${escapeHtml(href)}"${target} class="font-bold text-brass underline underline-offset-4">${children}</a>`;
        }
      }
    }
  });
}
