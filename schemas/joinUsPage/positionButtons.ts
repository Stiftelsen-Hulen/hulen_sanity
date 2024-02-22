export default {
  title: 'Navigation button',
  name: 'joinUsNavButton',
  type: 'object',
  fields: [
    {
      type: 'localeString',
      name: 'label',
      description: 'The label of the button',
      title: 'Button Label',
    },
    {
      title: 'Section Url',
      type: 'string',
      name: 'section',
      description:
        'This need to EXACT match some section in the code and should not be changed without a developer and a bottle of whisky.',
    },
  ],
}
