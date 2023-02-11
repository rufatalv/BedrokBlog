module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        md: "768px",
        lg: "984px",
        xl: "1000px",
        "2xl": "1000px",
      },
    },
    fontFamily: {
      display: "var(--display-font)",
    },
    extend: {
      borderRadius: {
        my: "20px",
      },
      colors: {
        neutral: {
          50: '#17181C',
          100: '#2E3038',
          200: '#454854',
          300: '#5C6070',
          400: '#73778C',
          500: '#8F93A3',
          600: '#ABAEBA',
          700: '#C7C9D1',
          800: '#E3E4E8',
          900: '#FFFFFF',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
