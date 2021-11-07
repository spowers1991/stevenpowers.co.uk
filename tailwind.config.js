module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': 'inter'
      },
      colors: {
        grey: '#bbbbbb',
        lightgrey: '#f8f8f8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter`
        ],
        display: 'swap'
      }
    }
  ],
}
