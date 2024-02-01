import { Rule } from "sanity";

export default {
  title: 'Join Us',
  name: 'joinUsPage',
  type: 'document',
  fields: [
   {
      type: "string", 
      name: "title", 
      title: 'title',
      description: 'title of object, for storage purposes only'
   },
    {
      type: 'localeString',
      name: 'pageTitle',
      title: 'Page Header',
      description: 'This is the top header of the page',
      validation: (rule: Rule) => rule.required(),
    },
    {
      description: 'The ingress of the page. The introductory text at the top',
      type: 'localeBlock',
      title: 'Ingress',
      name: 'field',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'array',
      title: 'Available Positions',
      description: 'Each available position',
      name: 'positions',
      of: [{type: 'positionEl'}],
    },
    {
      type: 'benefitsSection',
      name: 'benefitsSection',
      title: 'Benefits Section',
      validation: (rule: Rule) => rule.required(),
    }, {
      type: 'joinUsSection',
      name: 'joinSection',
      title: 'Join Section',
      validation: (rule: Rule) => rule.required(),
    }
  ],
}
