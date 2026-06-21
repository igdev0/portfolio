import {Field} from 'payload';
import {slugify} from 'payload/shared';

export const SlugField: Field = {
  name: 'slug',
  type: 'text',
  unique: true,
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [
      ({data}) => {
        if (!data?.title) return;
        return slugify(data.title);
      },
    ],
  },
};