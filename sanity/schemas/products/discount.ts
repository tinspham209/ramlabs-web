import { SCHEMA_KEY } from '@sanity-key';
import { RuleType } from '@sanity-type';
const discount = {
  name: SCHEMA_KEY.PRODUCT_DISCOUNT,
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
