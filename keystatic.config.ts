import { config, fields, collection, singleton } from '@keystatic/core';
import { block, wrapper, mark } from '@keystatic/core/content-components';
import { createElement } from 'react';
import { designSchema } from './src/keystatic/designSchema';

export default config({
  storage: {
    kind: 'github',
    repo: 'Sidshot/median-point'
  },
  singletons: {
    settings: singleton({
      label: 'Global Settings',
      path: 'src/content/settings/global',
      format: 'json',
      schema: {
        siteTheme: fields.select({
          label: 'Global Site Theme',
          options: [
            { label: 'Default', value: 'theme-default' },
            { label: 'Bloomberg', value: 'theme-bloomberg' },
            { label: 'New York Times', value: 'theme-nyt' },
            { label: 'Apple', value: 'theme-apple' },
            { label: 'Medium', value: 'theme-medium' },
            { label: 'Substack', value: 'theme-substack' },
            { label: 'Reuters', value: 'theme-reuters' },
            { label: 'Academic Journal', value: 'theme-academic' },
            { label: 'Magazine', value: 'theme-magazine' },
            { label: 'Minimal', value: 'theme-minimal' },
            { label: 'Dark Editorial', value: 'theme-dark-editorial' },
          ],
          defaultValue: 'theme-default',
        }),
        typographyPreset: fields.select({
          label: 'Typography Preset',
          options: [
            { label: 'Modern Sans', value: 'font-sans' },
            { label: 'Classic Serif', value: 'font-serif' },
            { label: 'Monospace', value: 'font-mono' },
          ],
          defaultValue: 'font-sans',
        }),
        primaryColor: fields.text({ label: 'Primary Brand Color (Hex)', defaultValue: '#B91C1C' }),
      },
    }),
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        isDraft: fields.checkbox({ label: 'Save as Draft (Do not publish yet)', defaultValue: false }),
        seoTitle: fields.text({ label: 'SEO Title (Optional - overrides article title for search engines)' }),
        seoDescription: fields.text({ label: 'SEO Description (Optional - overrides description for search engines)', multiline: true }),
        coverImage: fields.image({
          label: 'Cover Image (Optional)',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        description: fields.text({ label: 'Excerpt / Short Description', multiline: true, validation: { isRequired: true } }),
        pubDate: fields.date({ label: 'Publish Date', validation: { isRequired: true } }),
        updatedDate: fields.date({ label: 'Last Updated Date (Optional)' }),
        author: fields.text({ label: 'Author', defaultValue: 'Sudhanshu Verma' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Geopolitics', value: 'Geopolitics' },
            { label: 'Defense & Security', value: 'Defense & Security' },
            { label: 'Economy & Trade', value: 'Economy & Trade' },
            { label: 'Diplomacy', value: 'Diplomacy' },
            { label: 'Analysis', value: 'Analysis' },
            { label: 'Opinion', value: 'Opinion' },
          ],
          defaultValue: 'Analysis',
        }),
        headingColor: fields.select({
          label: 'Heading Color',
          description: 'Color for the main headline and all subheadings.',
          options: [
            { label: 'Deep Red (Brand)', value: 'brand' },
            { label: 'Black/Default', value: 'default' },
          ],
          defaultValue: 'brand',
        }),
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
                id: fields.text({ label: 'YouTube Video ID or URL (e.g. dQw4w9WgXcQ)', validation: { isRequired: true } }),
              },
            }),
            Tweet: block({
              label: 'Twitter/X Post (Paste URL here)',
              description: 'Embed a tweet using the official client-side widget. Paste the full Tweet URL or just the ID.',
              schema: {
                id: fields.text({ label: 'Tweet URL or ID', validation: { isRequired: true } }),
              },
            }),
            Instagram: block({
              label: 'Instagram Post',
              description: 'Embed an Instagram post in the article.',
              schema: {
                url: fields.text({ label: 'Instagram Post URL (e.g. https://www.instagram.com/p/ABC123/)', validation: { isRequired: true } }),
              },
            }),
            Facebook: block({
              label: 'Facebook Post',
              description: 'Embed a Facebook post in the article.',
              schema: {
                url: fields.text({ label: 'Facebook Post URL', validation: { isRequired: true } }),
              },
            }),

            // ── Text Formatting ──
            Highlight: mark({
              label: 'Highlight Text',
              icon: createElement('span', { 'aria-hidden': true }, '✏️'),
              schema: {},
              style: {
                backgroundColor: 'rgba(185, 28, 28, 0.15)',
                borderBottom: '2px solid rgba(185, 28, 28, 0.4)',
                padding: '0.05em 0.15em',
                borderRadius: '2px',
              },
            }),
            SmallCaps: mark({
              label: 'Small Caps',
              icon: createElement('span', { 'aria-hidden': true }, 'Aa'),
              schema: {},
              style: {
                fontVariant: 'small-caps',
                fontWeight: '600',
              },
            }),
            TextGradient: mark({
              label: 'Text Gradient',
              icon: createElement('span', { 'aria-hidden': true }, '✨'),
              schema: {},
              style: {
                background: 'linear-gradient(to right, #B91C1C, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
            Topline: wrapper({
              label: 'Topline (Forbes-style Box)',
              description: 'FAQ Guide: Use this for a Forbes-style summary highlight at the very top of your article.',
              schema: {
                ...designSchema,
              },
            }),

            // ── Editorial Layout Components ──
            Callout: wrapper({
              label: 'Callout Box',
              description: 'A colored callout for notes, warnings, breaking news, or tips.',
              schema: {
                ...designSchema,
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
                ...designSchema,
                attribution: fields.text({ label: 'Attribution / Source (optional)' }),
              },
            }),
            Divider: block({
              label: 'Section Divider',
              description: 'A decorative horizontal divider between sections.',
              schema: {
                ...designSchema,
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
                src: fields.text({ label: 'Image URL or path', validation: { isRequired: true } }),
                alt: fields.text({ label: 'Alt text (for accessibility)', validation: { isRequired: true } }),
                caption: fields.text({ label: 'Caption text (optional)' }),
                credit: fields.text({ label: 'Photo credit (optional, e.g. "Photo: Reuters")' }),
                fullWidth: fields.checkbox({ label: 'Full width image', defaultValue: false }),
              },
            }),
            InfoBox: wrapper({
              label: 'Info Box / Fact Box',
              description: 'A sidebar-style box for key facts, definitions, or data summaries.',
              schema: {
                ...designSchema,
                heading: fields.text({ label: 'Heading', defaultValue: 'Key Facts' }),
              },
            }),
            RelatedReading: block({
              label: 'Related Reading Link',
              description: 'An inline link card to cross-reference another article.',
              schema: {
                ...designSchema,
                title: fields.text({ label: 'Article title', validation: { isRequired: true } }),
                url: fields.text({ label: 'Article URL', validation: { isRequired: true } }),
                description: fields.text({ label: 'Short description (optional)' }),
              },
            }),

            // ── Advanced Layouts ──
            Hero: block({
              label: 'Cinematic Hero',
              description: 'A massive, cinematic hero section for the top of the article.',
              schema: {
                ...designSchema,
                headline: fields.text({ label: 'Headline', validation: { isRequired: true } }),
                subtitle: fields.text({ label: 'Subtitle', multiline: true }),
                bgType: fields.select({
                  label: 'Background Type',
                  options: [
                    { label: 'Image', value: 'image' },
                    { label: 'Video', value: 'video' },
                    { label: 'Gradient', value: 'gradient' },
                    { label: 'Solid Color', value: 'color' },
                  ],
                  defaultValue: 'image',
                }),
                bgUrl: fields.image({ 
                  label: 'Background Image', 
                  directory: 'public/images/blog', 
                  publicPath: '/images/blog/'
                }),
                overlayOpacity: fields.select({
                  label: 'Overlay Opacity',
                  options: [
                    { label: '0%', value: 'bg-black/0' },
                    { label: '20%', value: 'bg-black/20' },
                    { label: '40%', value: 'bg-black/40' },
                    { label: '60%', value: 'bg-black/60' },
                    { label: '80%', value: 'bg-black/80' },
                  ],
                  defaultValue: 'bg-black/40',
                }),
                height: fields.select({
                  label: 'Section Height',
                  options: [
                    { label: 'Full Screen', value: 'min-h-screen' },
                    { label: 'Half Screen', value: 'min-h-[50vh]' },
                    { label: 'Auto', value: 'py-24' },
                  ],
                  defaultValue: 'min-h-[50vh]',
                }),
                parallax: fields.checkbox({ label: 'Enable Parallax (Images only)', defaultValue: false }),
              },
            }),
            Section: wrapper({
              label: 'Content Section',
              description: 'A wrapper to group other blocks together with a shared background or padding.',
              schema: {
                ...designSchema,
              },
            }),
            Grid: wrapper({
              label: 'Responsive Grid',
              description: 'A flexible grid layout for cards or images.',
              schema: {
                ...designSchema,
                columns: fields.select({
                  label: 'Columns',
                  options: [
                    { label: '2 Columns', value: 'grid-cols-1 md:grid-cols-2' },
                    { label: '3 Columns', value: 'grid-cols-1 md:grid-cols-3' },
                    { label: '4 Columns', value: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' },
                  ],
                  defaultValue: 'grid-cols-1 md:grid-cols-2',
                }),
                gap: fields.select({
                  label: 'Gap',
                  options: [
                    { label: 'Small', value: 'gap-4' },
                    { label: 'Medium', value: 'gap-8' },
                    { label: 'Large', value: 'gap-12' },
                  ],
                  defaultValue: 'gap-8',
                }),
              },
            }),
            Columns: wrapper({
              label: 'Columns Grid',
              description: 'Create a multi-column layout.',
              schema: {
                ...designSchema,
                layout: fields.select({
                  label: 'Column Layout',
                  options: [
                    { label: '50 / 50', value: '1-1' },
                    { label: '1/3 - 2/3', value: '1-2' },
                    { label: '2/3 - 1/3', value: '2-1' },
                  ],
                  defaultValue: '1-1',
                }),
              },
            }),
            Accordion: wrapper({
              label: 'Accordion (Collapsible)',
              description: 'A collapsible section for FAQs or extra context.',
              schema: {
                ...designSchema,
                title: fields.text({ label: 'Accordion Title', validation: { isRequired: true } }),
              },
            }),
            Timeline: wrapper({
              label: 'Timeline Item',
              description: 'A single point in a vertical timeline.',
              schema: {
                ...designSchema,
                date: fields.text({ label: 'Date / Time', validation: { isRequired: true } }),
                title: fields.text({ label: 'Event Title', validation: { isRequired: true } }),
              },
            }),

            // ── Deep Typography ──
            DropCap: wrapper({
              label: 'Drop Cap Paragraph',
              description: 'Makes the first letter of this paragraph large and elegant.',
              schema: {
                ...designSchema,
              },
            }),
            CustomHeading: block({
              label: 'Custom Colored Heading',
              description: 'FAQ Guide: A colored H2 or H3 heading. Overrides the default theme colors.',
              schema: {
                ...designSchema,
                text: fields.text({ label: 'Heading Text', validation: { isRequired: true } }),
                color: fields.select({
                  label: 'Color',
                  options: [
                    { label: 'Brand Red', value: 'red' },
                    { label: 'Brand Blue', value: 'blue' },
                    { label: 'Deep Charcoal', value: 'charcoal' },
                  ],
                  defaultValue: 'red',
                }),
                level: fields.select({
                  label: 'Heading Level',
                  options: [
                    { label: 'H2 (Main Section)', value: 'h2' },
                    { label: 'H3 (Subsection)', value: 'h3' },
                    { label: 'H4 (Minor Section)', value: 'h4' },
                  ],
                  defaultValue: 'h2',
                }),
              },
            }),
            SideNote: wrapper({
              label: 'Side Note',
              description: 'FAQ Guide: A box that floats to the left or right of paragraphs on large screens, keeping the main text flowing.',
              schema: {
                ...designSchema,
                title: fields.text({ label: 'Note Title' }),
                float: fields.select({
                  label: 'Float Direction',
                  options: [
                    { label: 'None (Inline)', value: 'none' },
                    { label: 'Float Right', value: 'float-right' },
                    { label: 'Float Left', value: 'float-left' },
                  ],
                  defaultValue: 'none',
                }),
              },
            }),
            HistoricalContext: wrapper({
              label: 'Historical Context',
              description: 'FAQ Guide: Styled with prominent "Year" labels to clearly separate historical context from modern analysis.',
              schema: {
                ...designSchema,
                year: fields.text({ label: 'Year or Era (e.g., "1994", "Cold War")' }),
              },
            }),
            Typography: wrapper({
              label: 'Advanced Typography',
              description: 'FAQ Guide: The ultimate font override. Change font family, weight, spacing, or capitalization for any text inside.',
              schema: {
                fontFamily: fields.select({
                  label: 'Font Family',
                  options: [
                    { label: 'Inherit', value: '' },
                    { label: 'Sans Serif', value: 'font-sans' },
                    { label: 'Serif', value: 'font-serif' },
                    { label: 'Monospace', value: 'font-mono' },
                  ],
                  defaultValue: '',
                }),
                fontWeight: fields.select({
                  label: 'Font Weight',
                  options: [
                    { label: 'Inherit', value: '' },
                    { label: 'Light', value: 'font-light' },
                    { label: 'Normal', value: 'font-normal' },
                    { label: 'Medium', value: 'font-medium' },
                    { label: 'Bold', value: 'font-bold' },
                    { label: 'Black', value: 'font-black' },
                  ],
                  defaultValue: '',
                }),
                tracking: fields.select({
                  label: 'Letter Spacing',
                  options: [
                    { label: 'Inherit', value: '' },
                    { label: 'Tight', value: 'tracking-tight' },
                    { label: 'Normal', value: 'tracking-normal' },
                    { label: 'Wide', value: 'tracking-wide' },
                    { label: 'Widest', value: 'tracking-widest' },
                  ],
                  defaultValue: '',
                }),
                transform: fields.select({
                  label: 'Text Transform',
                  options: [
                    { label: 'None', value: '' },
                    { label: 'Uppercase', value: 'uppercase' },
                    { label: 'Lowercase', value: 'lowercase' },
                    { label: 'Capitalize', value: 'capitalize' },
                  ],
                  defaultValue: '',
                }),
              },
            }),

            // ── New Elements ──
            ActionBtn: block({
              label: 'Action Button',
              description: 'FAQ Guide: A prominent call-to-action button (solid or outlined).',
              schema: {
                ...designSchema,
                label: fields.text({ label: 'Button Text', validation: { isRequired: true } }),
                url: fields.text({ label: 'Button Link URL', validation: { isRequired: true } }),
                style: fields.select({
                  label: 'Button Style',
                  options: [
                    { label: 'Solid Brand', value: 'solid' },
                    { label: 'Outline', value: 'outline' },
                  ],
                  defaultValue: 'solid',
                }),
              },
            }),
            MapEmbed: block({
              label: 'Google Maps Embed',
              description: 'FAQ Guide: Drops an interactive map into the article. Requires the iframe embed URL.',
              schema: {
                ...designSchema,
                url: fields.text({ label: 'Google Maps Embed URL (src from iframe)', validation: { isRequired: true } }),
                caption: fields.text({ label: 'Map Caption (Optional)' }),
              },
            }),
            Gallery: block({
              label: 'Image Gallery',
              description: 'FAQ Guide: Displays multiple images. Choose "Masonry" for asymmetrical layouts or "Grid" for standard squares.',
              schema: {
                ...designSchema,
                layout: fields.select({
                  label: 'Layout Style',
                  options: [
                    { label: 'Masonry', value: 'masonry' },
                    { label: 'Standard Grid', value: 'grid' },
                  ],
                  defaultValue: 'grid',
                }),
                images: fields.array(
                  fields.object({
                    src: fields.text({ label: 'Image URL' }),
                    alt: fields.text({ label: 'Alt Text' }),
                    caption: fields.text({ label: 'Caption (Optional)' }),
                  }),
                  { label: 'Images', itemLabel: props => props.fields.alt.value }
                ),
              },
            }),
            Carousel: block({
              label: 'Image Carousel',
              description: 'FAQ Guide: An interactive, swipeable photo slider. Perfect for photo essays.',
              schema: {
                ...designSchema,
                images: fields.array(
                  fields.object({
                    src: fields.text({ label: 'Image URL' }),
                    alt: fields.text({ label: 'Alt Text' }),
                    caption: fields.text({ label: 'Caption (Optional)' }),
                  }),
                  { label: 'Images', itemLabel: props => props.fields.alt.value }
                ),
              },
            }),
            BeforeAfterSlider: block({
              label: 'Before/After Slider',
              description: 'FAQ Guide: A scrubbable before-and-after image viewer. Excellent for satellite imagery or visual changes.',
              schema: {
                ...designSchema,
                beforeImage: fields.text({ label: 'Before Image URL' }),
                afterImage: fields.text({ label: 'After Image URL' }),
                beforeLabel: fields.text({ label: 'Before Label', defaultValue: 'Before' }),
                afterLabel: fields.text({ label: 'After Label', defaultValue: 'After' }),
              },
            }),
            ComparisonTable: block({
              label: 'Comparison Table',
              description: 'FAQ Guide: An analytical table layout to compare features, stats, or specs between two subjects.',
              schema: {
                ...designSchema,
                titleA: fields.text({ label: 'Column A Title' }),
                titleB: fields.text({ label: 'Column B Title' }),
                rows: fields.array(
                  fields.object({
                    label: fields.text({ label: 'Feature/Row Label' }),
                    valA: fields.text({ label: 'Column A Value' }),
                    valB: fields.text({ label: 'Column B Value' }),
                  }),
                  { label: 'Table Rows', itemLabel: props => props.fields.label.value }
                ),
              },
            }),
            ProsCons: block({
              label: 'Pros & Cons',
              description: 'FAQ Guide: A split two-column list highlighting positives (green) and negatives (red).',
              schema: {
                ...designSchema,
                pros: fields.array(fields.text({ label: 'Pro' }), { label: 'Pros' }),
                cons: fields.array(fields.text({ label: 'Con' }), { label: 'Cons' }),
              },
            }),
            StatisticsGrid: block({
              label: 'Statistics Grid',
              description: 'FAQ Guide: A dashboard-style grid of numbers with optional up/down trend arrows.',
              schema: {
                ...designSchema,
                stats: fields.array(
                  fields.object({
                    value: fields.text({ label: 'Value (e.g. 50%, $1M)' }),
                    label: fields.text({ label: 'Description' }),
                    trend: fields.select({
                      label: 'Trend',
                      options: [
                        { label: 'None', value: 'none' },
                        { label: 'Up', value: 'up' },
                        { label: 'Down', value: 'down' },
                      ],
                      defaultValue: 'none',
                    }),
                  }),
                  { label: 'Statistics', itemLabel: props => props.fields.label.value }
                ),
              },
            }),
            FAQ: block({
              label: 'FAQ Section',
              description: 'FAQ Guide: Specifically formatted for Q&A sections. Readers can toggle answers open/closed.',
              schema: {
                ...designSchema,
                rawContent: fields.text({ label: 'Auto-Detect FAQ (Paste text here)', multiline: true, description: 'Paste a paragraph of Q&A. Auto-detects lines ending with ? or starting with Q:' }),
                questions: fields.array(
                  fields.object({
                    question: fields.text({ label: 'Question' }),
                    answer: fields.text({ label: 'Answer', multiline: true }),
                  }),
                  { label: 'Q&A Items', itemLabel: props => props.fields.question.value }
                ),
              },
            }),
            References: block({
              label: 'References / Citations',
              description: 'FAQ Guide: An auto-numbered citation list designed to sit at the very end of deep analysis pieces.',
              schema: {
                ...designSchema,
                title: fields.text({ label: 'Title', defaultValue: 'References' }),
                rawContent: fields.text({ label: 'Auto-Detect References (Paste text here)', multiline: true, description: 'Paste a list of references. URLs will be auto-detected.' }),
                citations: fields.array(
                  fields.object({
                    text: fields.text({ label: 'Citation Text (e.g. APA format)', multiline: true }),
                    url: fields.text({ label: 'Link (Optional)' }),
                  }),
                  { label: 'Citations', itemLabel: props => props.fields.text.value }
                ),
              },
            }),
            CustomHTML: block({
              label: 'Custom HTML / Embed',
              description: 'FAQ Guide: The ultimate escape hatch. Paste raw HTML iframe codes from Datawrapper or Flourish here.',
              schema: {
                ...designSchema,
                code: fields.text({ label: 'HTML Code', multiline: true }),
              },
            }),
          },
        }),
      },
    }),
  },
});
