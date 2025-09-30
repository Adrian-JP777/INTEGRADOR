export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cafe: {
          50:  '#f7efe7',
          100: '#f1e0d0',
          300: '#e0b88f',
          500: '#c48a3a',
          700: '#5a3a24',
          900: '#2b1a12',
        },
      },
      fontFamily: {
        sans: ["Inter","system-ui","sans-serif"],
        marca: ["Great Vibes","cursive"]
      },
      boxShadow: { suave: "0 8px 30px rgba(0,0,0,0.15)" }
    },
  },
  plugins: [],
};
