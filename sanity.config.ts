/*
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
*/

import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemaTypes'
import {structure, defaultDocumentNode} from './structure'

export default defineConfig({
  name: 'default',
  title: 'sanity_t',

  projectId: '21ag6ivc',
  dataset: 'production',

  /*plugins: [structureTool(), visionTool()],*/

  plugins: [
    deskTool({structure,defaultDocumentNode})
  ],

  schema: {
    types: schemaTypes,
  },
})
