import category from '../custom/category'

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
      title: 'Category',
      description: 'What kind of product is it?',
      name: 'category',
      type: 'string',
      options: {
        list: [...category],
      },
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
