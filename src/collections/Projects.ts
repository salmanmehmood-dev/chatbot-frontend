import { CollectionConfig } from 'payload';

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
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
    },
  ],
};

export { Projects };
