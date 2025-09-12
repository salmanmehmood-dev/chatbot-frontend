import { CollectionConfig } from 'payload';

export const Websites: CollectionConfig = {
  slug: 'websites',
  admin: {
    useAsTitle: 'url',
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
    },
  ],
};
