import { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
};
