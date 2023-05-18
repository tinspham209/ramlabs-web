import { RuleType } from '@sanity-type';

const hero = {
  name: 'hero-poster',
  title: 'Hero Poster',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
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
      title: 'name',
      media: 'image',
    },
  },
};

export default hero;
