import {Block} from 'payload';

export const ContentBlock: Block = {
  slug: "content",
  labels: {
    singular: "Content",
    plural: "Contents",
  },
  fields: [
    {
      type: "richText",
      name: "content",
      required: true,
    }
  ]
};