module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: ['src/Button/Button.tsx', 'src/IconButton/IconButton.tsx'],
      },
    ],
    wrapper: '.uxpin/UXPinWrapper/UXPinWrapper.jsx',
    webpackConfig: '.uxpin/uxpin.webpack.config.js',
  },
  name: 'parte-ui',
};
