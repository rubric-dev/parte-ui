const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
        ],
      },
      {
        loader: require.resolve('babel-loader', {
          paths: ['./node_modules/@uxpin/merge-cli'],
        }),
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        options: {
          presets: [
            require.resolve('@babel/preset-env', {
              paths: ['./node_modules/@uxpin/merge-cli'],
            }),
            require.resolve('@babel/preset-react', {
              paths: ['./node_modules/@uxpin/merge-cli'],
            }),
          ],
        },
      },
    ],
  },
};
