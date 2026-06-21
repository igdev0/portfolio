import {CollectionConfig} from 'payload';
import {PreviewGroup} from '@/payload/blocks/preview';
import {SlugField} from '@/payload/fields/slug';

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      type: "text",
      name: "title",
      required: true,
    },
    SlugField,
    PreviewGroup,
  ]
};