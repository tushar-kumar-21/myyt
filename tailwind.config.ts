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
        bgBackPrimary:'#0f0f0f',
        textSecondary:"#aaa",
        bluePrimary:"#3ea6ff",
        bgGreyPop:"#282828",
        bgInput:'rgb(247 164 164)',
      },
    },
  },
  plugins: [],
}
export default config
