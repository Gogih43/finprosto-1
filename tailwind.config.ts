import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // <-- Вот тут я убрал src/
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <-- И тут убрал
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        white: '#FFFFFF',
        primary: '#2563EB',
        primaryLight: '#EFF6FF',
        success: '#16A34A',
        text: '#111827',
        secondary: '#667085',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
        mono: ['var(--font-roboto-mono)'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'float': '0 24px 60px rgba(0, 0, 0, 0.08)',
        'app': '0 10px 40px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
};
export default config;