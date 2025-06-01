const { default: daisyui } = require('daisyui');

// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        background: {
          DEFAULT: "#f9fafb", // gray-50
          dark: "#111827",    // gray-900
        },
        card: {
          DEFAULT: "#fff",
          dark: "#1f2937",    // gray-800
        },
        cardborder: {
          dark: "#374151",    // gray-700
        },
        // label text
        label: {
          DEFAULT: "#111827", // gray-900
          dark: "#fff",
        },
        inputbg: {
          DEFAULT: "#f9fafb", // gray-50
          dark: "#374151",    // gray-700
        },
        inputborder: {
          DEFAULT: "#d1d5db", // gray-300
          dark: "#4b5563",    // gray-600
        },
        inputtext: {
          DEFAULT: "#111827", // gray-900
          dark: "#fff",
        },
        link: {
          DEFAULT: "#2563eb", // primary-600
          dark: "#3b82f6",    // primary-500
        }
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: true,
  }
};