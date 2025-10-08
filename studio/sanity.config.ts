import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { lucideIconPicker } from 'sanity-plugin-lucide-icon-picker'

export default defineConfig({
  name: 'studio',
  title: 'studio',

  projectId: 'c2fvhdju',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), lucideIconPicker()],

  schema: {
    types: schemaTypes,
  },
})
