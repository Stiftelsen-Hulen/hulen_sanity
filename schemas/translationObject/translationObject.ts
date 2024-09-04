export default {
  title: 'Translation Object',
  name: 'translationObject',
  type: 'document',
  description: 'Text contents with translation used on the website.',
  fields: [
    {
      type: 'string',
      title: 'Identifier',
      name: 'identifier',
      description:
        'Indentifier to the content. Do not change this unless you know what you are doing.',
    },
    {
      type: 'localeString',
      title: 'Content',
      name: 'content',
      description: 'The content with translations.',
    },
  ],
}
