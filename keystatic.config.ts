import { config, fields, collection } from '@keystatic/core';
import { block, wrapper, mark } from '@keystatic/core/content-components';

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
            // ── Social Embeds (legacy manual components — auto-embed handles URLs now) ──
            YouTube: block({
              label: 'YouTube Video',
              description: 'Embed a YouTube video. TIP: You can also just paste a YouTube URL on its own line!',
              schema: {
                id: fields.text({ label: 'YouTube Video ID or URL (e.g. dQw4w9WgXcQ)' }),
              },
            }),
            Tweet: block({
              label: 'Twitter/X Post (Paste URL here)',
              description: 'Embed a tweet using the official client-side widget. Paste the full Tweet URL or just the ID.',
              schema: {
                id: fields.text({ label: 'Tweet URL or ID' }),
              },
            }),
            Instagram: block({
              label: 'Instagram Post',
              description: 'Embed an Instagram post in the article.',
              schema: {
                url: fields.text({ label: 'Instagram Post URL (e.g. https://www.instagram.com/p/ABC123/)' }),
              },
            }),
            Facebook: block({
              label: 'Facebook Post',
              description: 'Embed a Facebook post in the article.',
              schema: {
                url: fields.text({ label: 'Facebook Post URL' }),
              },
            }),

            // ── Text Formatting ──
            Highlight: mark({
              label: 'Highlight Text',
              icon: '✏️',
              schema: {},
              style: {
                backgroundColor: 'rgba(185, 28, 28, 0.15)',
                borderBottom: '2px solid rgba(185, 28, 28, 0.4)',
                padding: '0.05em 0.15em',
                borderRadius: '2px',
              },
            }),
            TextSize: wrapper({
              label: 'Text Size',
              description: 'Wrap text in a specific size.',
              schema: {
                size: fields.select({
                  label: 'Size',
                  options: [
                    { label: 'Small', value: 'small' },
                    { label: 'Normal', value: 'normal' },
                    { label: 'Large', value: 'large' },
                    { label: 'Extra Large', value: 'xlarge' },
                  ],
                  defaultValue: 'large',
                }),
              },
            }),

            // ── Editorial Layout Components ──
            Callout: wrapper({
              label: 'Callout Box',
              description: 'A colored callout for notes, warnings, breaking news, or tips.',
              schema: {
                variant: fields.select({
                  label: 'Type',
                  options: [
                    { label: '🔵 Info / Note', value: 'info' },
                    { label: '🟡 Warning', value: 'warning' },
                    { label: '🔴 Important / Breaking', value: 'important' },
                    { label: '🟢 Tip', value: 'tip' },
                  ],
                  defaultValue: 'info',
                }),
                title: fields.text({ label: 'Custom Title (optional)' }),
              },
            }),
            PullQuote: wrapper({
              label: 'Pull Quote',
              description: 'A large, decorative quote to highlight a key statement.',
              schema: {
                attribution: fields.text({ label: 'Attribution / Source (optional)' }),
              },
            }),
            Divider: block({
              label: 'Section Divider',
              description: 'A decorative horizontal divider between sections.',
              schema: {
                style: fields.select({
                  label: 'Style',
                  options: [
                    { label: '◆ Ornamental', value: 'ornamental' },
                    { label: '── Plain', value: 'plain' },
                    { label: '···· Dotted', value: 'dotted' },
                  ],
                  defaultValue: 'ornamental',
                }),
              },
            }),
            ImageCaption: block({
              label: 'Image with Caption',
              description: 'An image with a styled caption and optional photo credit.',
              schema: {
                src: fields.text({ label: 'Image URL or path' }),
                alt: fields.text({ label: 'Alt text (for accessibility)' }),
                caption: fields.text({ label: 'Caption text (optional)' }),
                credit: fields.text({ label: 'Photo credit (optional, e.g. "Photo: Reuters")' }),
                fullWidth: fields.checkbox({ label: 'Full width image', defaultValue: false }),
              },
            }),
            InfoBox: wrapper({
              label: 'Info Box / Fact Box',
              description: 'A sidebar-style box for key facts, definitions, or data summaries.',
              schema: {
                heading: fields.text({ label: 'Heading', defaultValue: 'Key Facts' }),
              },
            }),
            RelatedReading: block({
              label: 'Related Reading Link',
              description: 'An inline link card to cross-reference another article.',
              schema: {
                title: fields.text({ label: 'Article title' }),
                url: fields.text({ label: 'Article URL' }),
                description: fields.text({ label: 'Short description (optional)' }),
              },
            }),
          },
        }),
      },
    }),
  },
});
