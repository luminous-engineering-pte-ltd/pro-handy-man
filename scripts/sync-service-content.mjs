import fs from 'node:fs';
import path from 'node:path';

const referencePath = path.resolve('..', 'handyman', 'src', 'data', 'services.js');
const outputPath = path.resolve('src', 'data', 'serviceContent.js');

const source = fs.readFileSync(referencePath, 'utf8')
  .replace(/^import[\s\S]*?;\s*/, '')
  .replaceAll('export const ', 'const ');

const iconNames = [
  'Wrench',
  'Droplets',
  'Zap',
  'PaintRoller',
  'Hammer',
  'Home',
  'Wind',
  'Blinds',
  'Refrigerator',
  'Trash2',
  'Tv',
  'Drill',
  'WashingMachine',
  'Recycle',
  'DoorOpen',
  'Layers',
  'PanelTop',
  'Building2',
  'ShieldCheck'
];

const evaluator = new Function(`
  ${iconNames.map((name) => `const ${name} = '${name}';`).join('\n')}
  ${source}
  return { SERVICES, SUBSERVICES };
`);

const cleanText = (value) => {
  if (typeof value === 'string') {
    return value
      .replaceAll('Pro Handyman SG.Com', 'Pro Handyman SG')
      .replaceAll('Pro Handyman SG.com', 'Pro Handyman SG')
      .replaceAll('\u2014', '-')
      .replaceAll('\u2013', '-')
      .replaceAll('\u00e2\u20ac\u201d', '-')
      .replaceAll('\u00e2\u20ac\u201c', '-')
      .replaceAll('\u00e2\u20ac\u02dc', "'")
      .replaceAll('\u00e2\u20ac\u2122', "'")
      .replaceAll('\u00e2\u20ac\u0153', '"')
      .replaceAll('\u00e2\u20ac\u009d', '"')
      .replaceAll('\u00c3\u00a7', 'c')
      .replaceAll('\u00c2', '');
  }

  if (Array.isArray(value)) {
    return value.map(cleanText);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => key !== 'icon' && key !== 'subServices')
        .map(([key, item]) => [key === 'img' ? 'image' : key, cleanText(item)])
    );
  }

  return value;
};

const { SERVICES: services, SUBSERVICES: subServices } = evaluator();
const serviceContent = {};
const subServiceContent = {};

for (const service of services) {
  serviceContent[service.slug] = cleanText(service);
}

for (const subService of subServices) {
  const cleaned = cleanText(subService);
  const { parent, ...content } = cleaned;
  subServiceContent[`${subService.parent}/${subService.slug}`] = {
    parentSlug: subService.parent,
    ...content
  };
}

const banner = '// Generated from ../handyman/src/data/services.js. Re-run scripts/sync-service-content.mjs after reference content changes.\n';
const body = [
  `export const serviceContent = ${JSON.stringify(serviceContent, null, 2)};`,
  '',
  `export const subServiceContent = ${JSON.stringify(subServiceContent, null, 2)};`,
  ''
].join('\n');

fs.writeFileSync(outputPath, banner + body, 'utf8');
