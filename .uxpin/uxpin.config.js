module.exports = {
  components: {
    categories: [
      {
        name: 'Layout',
        include: ['src/Layout/Box.tsx'],
      },
      {
        name: 'Components',
        include: [
          'src/Button/Button.tsx',
          'src/IconButton/IconButton.tsx',
          'src/TextInput/TextInput.tsx',
        ],
      },
      {
        name: 'Icons',
        include: [
          'src/parte-icons/Icons/ActionAddIcon.tsx',
          'src/parte-icons/Icons/ActionAddToArtifactIcon.tsx',
          'src/parte-icons/Icons/ActionArchiveIcon.tsx',
          'src/parte-icons/Icons/ActionAutomaticUpdatesIcon.tsx',
          'src/parte-icons/Icons/ActionBanCircleIcon.tsx',
          'src/parte-icons/Icons/ActionBookmarkIcon.tsx',
        ],
      },
    ],
    wrapper: '.uxpin/UXPinWrapper/UXPinWrapper.jsx',
    webpackConfig: '.uxpin/uxpin.webpack.config.js',
  },
  name: 'parte-ui',
};
