module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './blog.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'banner-desc': '#F9EFE6',
        'orange-cta': '#ED6B48',
        'dark-gray': '#3A393B',
        'nw-bg': '#A8C4AD',
        'slider-arrow-bg': '#FFF7F0'
      },
      // screen (max-width)
      screens: {
        'large-pc': { 'max': '1376px' },
        'pc': { 'max': '1280px' },
        'notebook': { 'max': '1024px' },
        'ipad': { 'max': '995px' },
        'mobile': { 'max': '768px' },
        'phone': { 'max': '640px' },
        'phone_med': { 'max': '500px' },
        'phone_por': { 'max': '375px' },
        'iphone': { 'max': '320px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
