export default {
  name: 'meganav',
  title: 'Add elements to the Mega Nav',
  type: 'document',
  fields: [
    {
      name: 'navheader',
      title: 'Navigation header',
      type: 'string',
    },
    {
      name: 'navelement',
      title: 'Navigation element',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'slug',
      title: 'Slug URL - Hit Generate',
      type: 'slug',
      options: {
        source: 'navheader',
        maxLength: 96,
      },
    },
  ],
}
