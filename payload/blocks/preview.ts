import {Block, GroupField} from 'payload';
// IGDev's logs Introduction
// A blog which describes the thematics of the posts which IGDev writes weekly.
export const PreviewBlock: Block = {
  slug: "preview",
  labels: {
    singular: "Content With Preview Block",
    plural: "Content With Preview Blocks",
  },
  fields: [
    {
      type: "text",
      name: "title",
    },
    {
      type: "textarea",
      name: "description",
    },
    {
      type: "upload",
      name: "image",
      relationTo: "media"
    }
  ]
};

export const PreviewGroup: GroupField = {
  type: "group",
  name: "preview",
  fields: PreviewBlock.fields,
};