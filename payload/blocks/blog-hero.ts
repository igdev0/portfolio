import {Block, GroupField} from 'payload';

export const BlogHeroBlock: Block = {
  slug: "blog-hero",
  fields: [
    {
      type: "text",
      name: "headline",
      required: true,
    },
    {
      type: "upload",
      relationTo: "media",
      name: "media",
      required: true,
    },
    {
      type: "number",
      label: "Read time",
      name: "read_time",
      required: true,
    }
  ]
}
export const BlogHeroGroup: GroupField  = {
  type: 'group',
  name: 'hero',
  fields: BlogHeroBlock.fields
}