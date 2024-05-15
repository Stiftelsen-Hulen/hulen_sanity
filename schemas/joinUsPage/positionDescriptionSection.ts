import { Rule } from 'sanity'

export default {
  title: 'Position Description section',
  type: 'object',
  name: 'positionPreface',
  description: 'Introduction before positions',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeBlock',
      name: 'content',
      title: 'Content',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'image',
      image: 'icon',
      name: 'descImage',
      description: 'The icon to display. Please only upload svg icons here',
    },
  ],
}
