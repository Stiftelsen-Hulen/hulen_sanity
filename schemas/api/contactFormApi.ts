import { Rule } from 'sanity'

export default {
  type: 'document',
  title: 'Join Email Form Api',
  name: 'joinEmailFormApi',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'title',
      description: 'title of object, for storage purposes only',
    },
    {
      type: 'object',
      name: 'emailResponseStatus',
      title: 'Email Response Status',
      validation: (rule: Rule) => rule.required(),
      fields: [
        {
          type: 'localeString',
          name: 'success',
          title: 'Sent Email Success',
        },
        {
          type: 'localeString',
          name: 'error',
          title: 'Sent Email Failure',
        }

      ]
    },
  ]
}