import { RuleType } from '@sanity-type';

const productCategory = {
  name: 'collection',
  title: 'Collection',
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
      validation: (Rule: RuleType) => Rule.required(),
      options: { source: 'title', maxLength: 96 },
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
      name: 'price',
      title: 'Price (VND)',
      type: 'number',
      validation: (Rule: RuleType) => Rule.required(),
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
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'product',
          },
        },
      ],
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
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
