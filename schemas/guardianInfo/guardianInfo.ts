export default {
  type: 'document',
  name: 'guardianInfo',
  title: 'Guardian Info',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'title',
      description: 'title of object, for storage purposes only',
    }, {
      type: 'localeString',
      name: 'header',
      title: 'Page header',
      description: 'The big bold letters at the top',
    }, {
      type: 'localeBlock',
      name: 'intro',
      title: 'Introduction text',
      description: 'The text below the big bold letters at the top'
    }, {
      type: 'localeString',
      name: 'subHeading',
      title: "Subheading",
      description: 'The subheading beside the image'
    }, {
      type: 'localeBlock',
      name: 'description',
      title: 'Description',
      description: 'The text below the subheading and beside the image'
    }, {
      type: 'imageWithLocaleAlt',
      name: 'guardianImage',
      title: 'Image',
      description: 'The image beside the text',
    }
  ],
}
