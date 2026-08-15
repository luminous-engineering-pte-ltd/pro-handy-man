import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/schemas/index.js'
import {structure} from './sanity/structure.js'
import {productionPreviewAction} from './sanity/plugins/productionPreviewAction.jsx'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || 'glbnoc37'
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'pro-handy-man-cms',
  title: 'Pro Handy Man CMS',
  projectId,
  dataset,
  plugins: [
    structureTool({structure})
  ],
  document: {
    actions: (prev) => [...prev, productionPreviewAction]
  },
  schema: {
    types: schemaTypes
  }
})
