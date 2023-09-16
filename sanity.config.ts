import {defineConfig, Rule} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {documentI18n} from '@sanity/document-internationalization'
import {Ti18nConfig} from '@sanity/document-internationalization/src/types'
import {deskStructure} from './deskStructure'

export const supportedLanguages = [
  {id: 'en', title: 'English', },
  {id: 'no', title: 'Norwegian', isDefault: true},
]
supportedLanguages.find(l => l.isDefault)
const i18nConfig: Ti18nConfig = {
  languages: supportedLanguages
}

const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations'
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
    validation: (rule: Rule) => rule.required()
  }))
}

const localeBlock = {
  title: 'Localized BlockContent',
  name: 'localeBlock',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations'
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [{type: 'block'}],
    fieldset: lang.isDefault ? null : 'translations',
    validation: (rule: Rule) => rule.required()
  }))
}


export default defineConfig({
  name: 'default',
  title: 'hulen_sanity_studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: 'production',

  plugins: [deskTool(
    {
      structure: (S, {schema}) => deskStructure(i18nConfig, S, schema)
    }
  ), visionTool(), documentI18n(i18nConfig)],

  schema: {
    types: [localeString,localeBlock, ...schemaTypes]
  }
})
