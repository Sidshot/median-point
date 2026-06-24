import { fields } from '@keystatic/core';

export const designSchema = {
  theme: fields.select({
    label: 'Design Theme',
    description: 'Override the global theme for this specific block.',
    options: [
      { label: 'Inherit Global', value: 'inherit' },
      { label: 'Bloomberg (Dark, Monospace, Minimal)', value: 'theme-bloomberg' },
      { label: 'New York Times (Serif, Elegant)', value: 'theme-nyt' },
      { label: 'Apple (San Francisco, Spacious, Glass)', value: 'theme-apple' },
      { label: 'Medium (Clean, Readability focused)', value: 'theme-medium' },
      { label: 'Substack (Classic Newsletter)', value: 'theme-substack' },
      { label: 'Reuters (Utilitarian, Data-focused)', value: 'theme-reuters' },
      { label: 'Academic Journal', value: 'theme-academic' },
      { label: 'Magazine', value: 'theme-magazine' },
      { label: 'Minimal', value: 'theme-minimal' },
      { label: 'Dark Editorial', value: 'theme-dark-editorial' },
    ],
    defaultValue: 'inherit',
  }),
  bgColor: fields.text({ label: 'Background Color (Hex, RGB, or var)', defaultValue: '' }),
  bgGradient: fields.text({ label: 'Background Gradient (CSS)', defaultValue: '' }),
  bgImage: fields.text({ label: 'Background Image URL', defaultValue: '' }),
  padding: fields.text({ label: 'Padding (e.g. "2rem", "10px 20px")', defaultValue: '' }),
  margin: fields.text({ label: 'Margin (e.g. "2rem 0")', defaultValue: '' }),
  maxWidth: fields.select({
    label: 'Max Width',
    options: [
      { label: 'Content Width (Prose)', value: 'max-w-3xl mx-auto' },
      { label: 'Wide (1000px)', value: 'max-w-5xl mx-auto' },
      { label: 'Full Width', value: 'w-full max-w-none' },
    ],
    defaultValue: 'max-w-3xl mx-auto',
  }),
  alignment: fields.select({
    label: 'Content Alignment',
    options: [
      { label: 'Left', value: 'text-left' },
      { label: 'Center', value: 'text-center' },
      { label: 'Right', value: 'text-right' },
    ],
    defaultValue: 'text-left',
  }),
  borderRadius: fields.text({ label: 'Border Radius (e.g. "12px")', defaultValue: '' }),
  border: fields.text({ label: 'Border (CSS)', defaultValue: '' }),
  shadow: fields.select({
    label: 'Shadow',
    options: [
      { label: 'None', value: 'shadow-none' },
      { label: 'Small', value: 'shadow-sm' },
      { label: 'Medium', value: 'shadow-md' },
      { label: 'Large', value: 'shadow-lg' },
      { label: 'Extra Large', value: 'shadow-xl' },
    ],
    defaultValue: 'shadow-none',
  }),
  textColor: fields.text({ label: 'Text Color Override', defaultValue: '' }),
  animation: fields.select({
    label: 'Entrance Animation',
    options: [
      { label: 'None', value: '' },
      { label: 'Fade In', value: 'animate-fade-in' },
      { label: 'Fade Up', value: 'animate-fade-up' },
      { label: 'Zoom In', value: 'animate-zoom-in' },
    ],
    defaultValue: '',
  }),
  responsiveBehavior: fields.select({
    label: 'Responsive Visibility',
    options: [
      { label: 'Show Everywhere', value: 'block' },
      { label: 'Hide on Mobile', value: 'hidden md:block' },
      { label: 'Hide on Desktop', value: 'block md:hidden' },
    ],
    defaultValue: 'block',
  }),
};
