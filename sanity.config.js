import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'connectnext',

  projectId: '5wwaoaxj',
  dataset: 'testing',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
