/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bondBlue: '#2563EB',
        bondSlate: '#64748b',
        bondDark: '#0F172A',
        bondBg: '#FDFDFD',
      },
      boxShadow: {
        'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}