import { Rule } from 'sanity'

export default {
  type: 'object',
  title: 'Join email form',
  name: 'joinEmailForm',
  fields: [
    {
      type: 'localeString',
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
