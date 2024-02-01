import {Rule} from 'sanity'

export default {
  title: 'Benefits section',
  type: 'object',
  name: 'benefitsSection',
  description: 'List out the benefits of Hulen here',
  fields: [
    {title: 'Header', name: 'header', type: 'localeString', validation: (rule: Rule) => rule.required()},
    {
      type: 'image',
      image: 'icon',
      name: 'descImage',
      description: 'The icon to display. Please only upload svg icons here',
    },
    {
      type: 'localeBlock',
      name: 'content',
      title: 'Content',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
