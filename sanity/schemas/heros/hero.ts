import { SCHEMA_KEY } from '@sanity-key';
import { RuleType } from '@sanity-type';

const hero = {
  name: SCHEMA_KEY.HERO_BANNER,
  title: 'Hero Banner',
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
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};

export default hero;
