import { RuleType } from '@sanity-type';

const productCategory = {
  name: 'product-category',
  title: 'Product Category',
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
  ],
};

export default productCategory;
