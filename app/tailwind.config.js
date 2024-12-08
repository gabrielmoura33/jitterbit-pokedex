module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        '2076': '360px',
        '760': '640px',
      },
      boxShadow: {
        'pokemon-card': '0px 1px 3px 1px rgba(0, 0, 0, 0.20)'
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        identity: {
          primary: '#DC0A2D',
        },
        type: {
          bug: '#A7B723',
          dark: '#75574C',
          dragon: '#7037FF',
          electric: '#F9CF30',
          fairy: '#E69EAC',
          fighting: '#C12239',
          fire: '#F57D31',
          flying: '#A891EC',
          ghost: '#70559B',
          normal: '#AAA67F',
          grass: '#74CB48',
          ground: '#DEC16B',
          ice: '#9AD6DF',
          poison: '#A43E9E',
          psychic: '#FB5584',
          rock: '#B69E31',
          steel: '#B7B9D0',
          water: '#6493EB',
        },
        grayscale: {
          dark: '#212121',
          medium: '#666666',
          light: '#E0E0E0',
          background: '#EFEFEF',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
