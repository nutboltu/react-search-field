const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/docs/index.jsx"),
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "docs"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "docs",
    host: "localhost",
  },
  plugins: [
    new TerserPlugin({
      cache: true,
      parallel: true,
      terserOptions: { ecma: 8 },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/docs/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src/docs/react-search-field.png"),
        },
      ],
    }),
  ],
};
