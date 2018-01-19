/** eslint-disable */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/docs/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: 'docs',
    host: 'localhost',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src/docs/index.html') },
    ]),
  ],
};

/** eslint-enable */
