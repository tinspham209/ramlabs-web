import { RuleType } from '@sanity-type';
const discount = {
  name: 'product-discount',
  title: 'Product Discount',
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
      name: 'Discount',
      title: 'Discount (%)',
      type: 'number',
      validation: (Rule: RuleType) => Rule.required(),
    },
  ],
};

export default discount;
