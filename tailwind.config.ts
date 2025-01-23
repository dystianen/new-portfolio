import type { Config } from 'tailwindcss';

export default {
  prefix: 'tw-',
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      backgroundImage: {
        'pattern-wave': "url('/assets/backgrounds/pattern_wave.svg')"
      }
    }
  },
  plugins: []
} satisfies Config;
