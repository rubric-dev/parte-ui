module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: ['src/Button/Button.tsx'],
      },
      {
        name: 'General2',
        include: ['src/Card/Card.tsx'],
      },
    ],
    wrapper: '.uxpin/UXPinWrapper/UXPinWrapper.jsx',
    webpackConfig: '.uxpin/uxpin.webpack.config.js',
  },
  name: 'parte-ui',
};
