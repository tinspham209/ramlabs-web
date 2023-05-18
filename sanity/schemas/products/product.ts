import { RuleType } from '@sanity-type';
const productCategory = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'product-category',
          },
        },
      ],
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: {
        type: 'artists',
      },
    },
    {
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: {
        type: 'collection',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'new',
      title: 'Is New?',
      type: 'boolean',
      description: 'Highlight New Arrival product in Homepage',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'onSale',
      title: 'On Sale?',
      type: 'reference',
      to: {
        type: 'product-discount',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, media } = selection;
      return {
        title: title,
        media: media && media[0],
      };
    },
  },
};

export default productCategory;
