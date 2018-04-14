const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    path.join(__dirname, "src/index.js")
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].[hash].js'
  },
  devServer: {
    historyApiFallback: true,
    port: 8081
  },
  module: {
    rules: [
      { test: /\.(js|jsx)?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.(css|scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    })
  ]
};
