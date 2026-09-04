/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maison: {
          bg: "#FAF8F5",
          surface: "#F3EDE6",
          card: "#FFFFFF",
          elevated: "#FFFFFF",
          border: "rgba(28, 23, 20, 0.08)",
          "border-dark": "rgba(28, 23, 20, 0.16)",
          bronze: "#965E3A",
          "bronze-hover": "#7D4B2A",
          espresso: "#1C1714",
          charcoal: "#2D2622",
          muted: "#78716C",
          stone: "#A8A29E",
          parchment: "#F5EFEB",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'maison': '0 10px 30px -10px rgba(28, 23, 20, 0.06), 0 0 0 1px rgba(28, 23, 20, 0.05)',
        'maison-hover': '0 20px 40px -15px rgba(28, 23, 20, 0.1), 0 0 0 1px rgba(150, 94, 58, 0.25)',
      }
    },
  },
  plugins: [],
}
