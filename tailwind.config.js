module.exports = {
  content: ["./src/**/*.{html,js}tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#f5f2f0',
          500: '#242020'
        }
      }
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
