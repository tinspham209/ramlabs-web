import { SCHEMA_KEY } from '@sanity-key';
import { RuleType } from '@sanity-type';

const productCategory = {
  name: SCHEMA_KEY.PRODUCT_CATEGORY,
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
