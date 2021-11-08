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
        lightgrey: '#f8f8f8',
        red: '#ff4d4d',
        blue: 'skyblue'
      }
    },
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus", "group-hover"],
    height: ["responsive", "hover", "focus"],
    transform: ["responsive", "hover", "focus", "group-hover"]
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
