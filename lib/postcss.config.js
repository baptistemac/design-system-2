const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    nested,
    autoprefixer,
  ],
};