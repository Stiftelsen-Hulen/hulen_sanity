export default {
  title: 'Tech Info',
  description: 'Put all ya bits, bobs and thingamajiggs that bands need to know exist here',
  name: 'techInfo',
  type: 'document',
  fields: [
    {
      type: 'localeString',
      name: 'header',
      title: 'Page header',
      description: 'The big bold letters at the top',
    },
    {
      type: 'string',
      name: 'email',
      title: 'Concact mail',
      description: 'The EXACT mail you want to be spammed to',
    },
    {
      type: 'localeString',
      name: 'emailDescription',
      title: 'Email preface',
      description:
        'The text after the nice bold letters and before the email. The email will be below.',
    },
    {
      type: 'array',
      title: 'Categories',
      name: 'categories',
      of: [{type: 'techCategory'}],
      options: {
        modal: {type: 'dialog', width: '80%'}, //Makes the modal type a popover
      },
    },
  ],
}
