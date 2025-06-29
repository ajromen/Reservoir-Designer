import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFFFF",
        secondary: "#A6A6A6",
        background: "#0d0d0d",
        resBlue: "#278AD0",
        resWhite: "#DDDDDD",
        resBlack: "#1E1E1E"
      },
    },
  },
  plugins: [],
}

export default config
