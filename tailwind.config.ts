import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryColor:'#fff',
        bgPrimary: 'rgba(126,126,126,0.25)',
        bgSecondary:"rgba(255, 255, 255, 0.1)",
        bgSecondaryLow:"rgba(255, 255, 255, 0.2)",
        bgBackPrimary:'#0f0f0f',
        textSecondary:"#aaa",
        greyColor:"#606060",
        bluePrimary:"#3ea6ff",
        bgInput:'rgb(247 164 164)',
        bgGreySolid:'#282828',
      },
    },
  },
  plugins: [],
}
export default config
