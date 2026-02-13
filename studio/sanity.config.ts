import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {iconPicker} from 'sanity-plugin-icon-picker'
// import { lucideIconPicker } from 'sanity-plugin-lucide-icon-picker'

export default defineConfig({
  name: 'studio',
  title: 'studio',

  projectId: 'c2fvhdju',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), iconPicker()],

  schema: {
    types: schemaTypes,
  },
})
