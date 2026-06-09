/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:       "#090D16",       // very deep blue-gray dark background
          surface:  "#0F1420",       // card background
          border:   "#1E293B",       // slate-800 subtle border
          primary:  "#6366F1",       // indigo-500 primary action
          primaryHover: "#4f46e5",   // indigo-600 hover
          secondary: "#8B5CF6",      // violet-500 secondary
          secondaryHover: "#7c3aed", // violet-600 hover
          text:     "#F8FAFC",       // slate-50 bright text
          muted:    "#94A3B8",       // slate-400 secondary text
          faint:    "#475569",       // slate-600 muted/placeholder text
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
        'btn': '0 1px 3px 0 rgba(99,102,241,0.5)',
      },
    },
  },
  plugins: [],
}
