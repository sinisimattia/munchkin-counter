import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
    },
    colors: {
      // Generic
      light: '#fff4d4',
      muted: '#AAAAAA',
      dark: '#2e2200',
      // Accent colors
      primary: '#0f8bf7',
      accent: '#2D9EE0',
      success: '#60D156',
      error: '#DC5960',
      warning: '#FFCF0E',
    },
    fontFamily: {
      title: ['Metamorphous', 'sans-serif'],
      sans: ['Metamorphous', 'sans-serif'],
      serif: ['seMetamorphousrif'],
    },
  },
  content: [
    "./components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "./layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "./pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "./plugins/**/*.{js,ts,mjs}",
    "./composables/**/*.{js,ts,mjs}",
    "./utils/**/*.{js,ts,mjs}",
    "./{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "./{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "./app.config.{js,ts,mjs}",
    "./app/spa-loading-template.html"
  ],
  plugins: [],
}
