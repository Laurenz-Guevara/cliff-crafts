import category from '../custom/category'
import navcategory from '../custom/navcategory'
import subcategory from '../custom/subcategory'
import gender from '../custom/gender'

export default {
  name: 'product',
  title: 'Add a Product',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name / Title',
      description: 'The name of the product or a suitable title.',
      type: 'string',
    },
    {
      name: 'productId',
      title: 'Product ID',
      description: 'The number ID of the product.',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug URL - Hit Generate',
      type: 'slug',
      options: {
        source: 'productName',
        maxLength: 96,
      },
    },

    {
      title: 'Category',
      description: 'What kind of product is it?',
      name: 'categoryItems',
      type: 'string',
      options: {
        list: [...category],
      },
    },
    {
      title: 'Navigation Category',
      description: 'What navigation category does this fall under?',
      name: 'navCategory',
      type: 'string',
      options: {
        list: [...navcategory],
      },
    },
    {
      title: 'Sub Category',
      description: 'What sub-category does this product fall under?',
      name: 'subCategory',
      type: 'string',
      options: {
        list: [...subcategory],
      },
    },
    {
      name: 'brand',
      title: 'Brand Name',
      description: 'The brand name of the product.',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Image',
      description: 'Image of the product.',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      description: 'The description of the product.',
      type: 'text',
    },
    {
      name: 'specification',
      title: 'Specification',
      description: 'Details about the product such as size...',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      description: 'The price of the product.',
      type: 'number',
    },
    {
      name: 'stripePrice',
      title: 'Stripe Price ID',
      description: 'The ID from stripe',
      type: 'string',
    },
    {
      name: 'gender',
      title: 'Gender',
      description: 'Gender of the product.',
      type: 'string',
      options: {
        list: [...gender],
      },
    },
  ],
}
