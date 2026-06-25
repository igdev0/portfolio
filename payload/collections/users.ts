import {CollectionConfig} from 'payload';
import {User_Roles} from '@/remote/client/gql-generated';

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: 'avatar',
      type: "upload",
      relationTo: "media"
    },
    {
      name: "name",
      type: "text",
      required: true,
      defaultValue: "Gajeu"
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true, // Crucial: Includes roles in the session token
      options: ['admin', 'editor', 'user'],
      defaultValue: ['user'],
      required: true,
      access: {
        // Only existing admins can assign or modify roles
        update: ({req: {user}}) => user ?.roles?.includes(User_Roles.Admin),
      },
    },
  ]
};