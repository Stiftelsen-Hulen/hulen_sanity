import {Rule} from 'sanity'

export default {
  title: 'Position',
  name: 'positionEl',
  type: 'object',
  fields: [
    {
      type: 'localeString',
      name: 'title',
      description:
        'The title of the position. Note that this will also be used to render navigation buttons and must be unique',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      description: 'Which category to put the position in, either night shift or normal shift',
      options: {
        list: [
          {title: 'Night Shift', value: 'night_shift'},
          {title: 'Outside regular hours', value: 'outside_regular'},
        ],
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'localeBlock',
      desciption: 'Description of a position. Feel free to pour your heart out',
      name: 'description',
      title: 'Description',
      validation: (rule: Rule) => rule.required(),
    },
    {
      type: 'image',
      name: 'descImage',
      title: 'Decorative Image',
      description:
        'While you can put an image into the above description, it is easier controlled to but it here',
    },
  ],
  preview: {
    select: {
        title: 'title.en',
    }
  }
}
