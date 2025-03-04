// ./structure.js (.ts)
import {TranslationsTab, defaultDocumentLevelConfig} from 'sanity-plugin-transifex'

// note: context includes `currentUser` and the client
export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems()
    ])


export const defaultDocumentNode = (S, {schemaType}) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === schemaType) {
    return S.document().views([
      S.view.form(),
       S.view.component(TranslationsTab).title('Transifex').options(defaultDocumentLevelConfig)
 ])
 }
}
