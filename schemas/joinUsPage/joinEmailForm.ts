import { Rule } from 'sanity'

export default {
  type: 'object',
  title: 'Join email form',
  name: 'joinEmailForm',
  fieldsets: [{ name: 'joinFormLabels', title: 'Email Form\'s Input Labels' }],
  fields: [
    {
      type: 'string',
      name: 'emailFormTitle',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'emailFormLabel',
      validation: (rule: Rule) => rule.required(),

    },
    {
      type: 'localeString',
      name: 'nameFormLabel',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'ageFormLabel',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'jobFormLabel',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeString',
      name: 'relevantInfoFormLabel',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
