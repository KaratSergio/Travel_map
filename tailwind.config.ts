import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,vue,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3743D'
      }
    }
  },
  plugins: []
}

export default config
