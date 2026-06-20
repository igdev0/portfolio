import {CollectionConfig} from 'payload';

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  fields: [
    {
      name: 'avatar',
      type: "upload",
      relationTo: "media"
    }
  ]
}