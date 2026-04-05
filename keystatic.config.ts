import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'Sidshot/median-point'
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true, validation: { isRequired: true } }),
        pubDate: fields.date({ label: 'Publish Date', validation: { isRequired: true } }),
        author: fields.text({ label: 'Author' }),
        category: fields.text({ label: 'Category' }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.value }
        ),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/blog',
              publicPath: '/images/blog/'
            }
          },
          components: {
            YouTube: {
              label: 'YouTube Video',
              schema: {
                id: fields.text({ label: 'YouTube Video ID or URL (e.g. dQw4w9WgXcQ)' }),
              },
            },
            Tweet: {
              label: 'Twitter Post',
              schema: {
                id: fields.text({ label: 'Tweet ID (long number from URL)' }),
              },
            },
          },
        }),
      },
    }),
  },
});
