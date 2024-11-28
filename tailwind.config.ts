import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primaryColor: '#b4acf9',
        secondary: '#363041',
      },

      width: {
        areaTask: '62rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-clear': {
          '&::-webkit-search-cancel-button': {
            display: 'none',
          },
        },
      })
    },
  ],
} satisfies Config
