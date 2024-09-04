export default {
  title: 'Guardian Info',
  type: 'document',
  name: 'guardianInfo',
  fields: [
    {
      type: 'localeString',
      name: 'header',
      title: 'Page header',
      description: 'The big bold letters at the top',
    }, {
      type: 'localeString',
      name: 'intro',
      title: 'Introduction Text',
      description: 'The text below the big bold letters at the top'
    }, {
      type: 'localeString',
      name: 'subHeading',
      title: "Subheading",
      description: 'The subheading beside the image'
    }, {
      type: 'localeString',
      name: 'description',
      title: 'Description',
      description: 'The text below the subheading and beside the image'
    }, {
      type: 'image',
      name: 'guardianImage',
      title: 'Image',
      description: 'The image beside the text'
    }
  ],
}