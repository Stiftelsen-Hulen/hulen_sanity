export default {
  title: 'Tech Category',
  name: 'techCategory',
  type: 'object',
  fields: [
    {
      type: 'string',
      title: 'Category',
      name: 'category',
      description: 'For grouping equipment, name your category here. ',
    },
    {
      type: 'array',
      title: 'Entries',
      name: 'entries',
      description: 'Insert whatever you need here',
      of: [{ type: 'string' }],
    },
  ],
}
