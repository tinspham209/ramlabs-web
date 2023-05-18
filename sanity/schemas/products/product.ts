import { SCHEMA_KEY } from '@sanity-key';
import { RuleType } from '@sanity-type';
const productCategory = {
  name: SCHEMA_KEY.PRODUCT,
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
            type: SCHEMA_KEY.PRODUCT_CATEGORY,
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
        type: SCHEMA_KEY.ARTISTS,
      },
    },
    {
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: {
        type: SCHEMA_KEY.COLLECTION,
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
        type: SCHEMA_KEY.PRODUCT_DISCOUNT,
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
