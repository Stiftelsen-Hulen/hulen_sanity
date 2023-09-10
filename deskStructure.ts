import {getFilteredDocumentTypeListItems} from '@sanity/document-internationalization'
import {StructureBuilder} from 'sanity/lib/exports/desk'
import {Schema} from 'sanity'
import {Ti18nConfig} from '@sanity/document-internationalization/src/types'

export const deskStructure = (i18nConfig: Ti18nConfig, S: StructureBuilder, schema: Schema) => {
  const docTypeListItems = getFilteredDocumentTypeListItems({
    S,
    schema,
    config: i18nConfig
  })

  return S.list()
    .title('Content')
    .items([
      ...docTypeListItems
    ])
}


