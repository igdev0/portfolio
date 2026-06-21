import {CollectionConfig} from 'payload';

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    mimeTypes: ['image/*']
  },
  fields: [
    {
      type: "text",
      name: "alt",
      defaultValue: "Alt",
      required: true,
    }
  ],
};