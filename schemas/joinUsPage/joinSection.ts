import {Rule} from 'sanity'

export default {
  title: 'Join us section',
  type: 'object',
  name: 'joinUsSection',
  fields: [
    {
      title: 'Header',
      name: 'header',
      type: 'localeString',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'image',
      name: 'icon',
      title: 'Icon',
      description: 'The icon to display. Please only upload svg icons here',
    },
    {
      type: 'localeBlock',
      name: 'content',
      title: 'Content',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'emailPreface',
      title: 'Preface before email',
      description: 'Preface before email. Excluded from locale text',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Contact adress',
      name: 'email',
      type: 'string',
      description: 'Contact adress. Only put in the mail here',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
