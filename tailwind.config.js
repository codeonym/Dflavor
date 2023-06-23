module.exports = {
  darkMode: 'class',
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens: {
      "sm": "480px",
      "md": "768px",
      "lg": "976px",
      "xl": "1440px",
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [
    
  ],
}

// require('tailwind-scrollbar')({ nocompatible: true }),

