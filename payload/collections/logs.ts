import {CollectionConfig} from 'payload';
import {PreviewGroup} from '@/payload/blocks/preview';
import {BlogHeroBlock} from '@/payload/blocks/blog-hero';
import {SlugField} from '@/payload/fields/slug';

export const Logs: CollectionConfig = {
  slug: "logs",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      type: "text",
      name: "title",
      unique: true
    },
    SlugField,
    {
      type: "relationship",
      relationTo: "categories",
      name: "category"
    },
    PreviewGroup,
    {
      type: "blocks",
      validate: (value) => {
        if (!value || !Array.isArray(value)) return true;

        const heroCount = value.filter(block => block.blockType === 'blog-hero').length;

        if (heroCount > 1) {
          return 'You can only include one "Blog Hero" block in the article body.';
        }

        return true;
      },
      blocks: [
          BlogHeroBlock,
        {
          slug: "main",
          labels: {
            singular: "Hyper Text",
            plural: "Hyper Texts"
          },
          fields: [
            {
              type: "richText",
              name: "html",
            }
          ]
        }
      ],
      required: true,
      name: "content",
    },
  ]
};