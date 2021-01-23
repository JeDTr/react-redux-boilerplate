const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const base = require("./webpack.base");
const { appPath, outputPath } = require("./constants");

module.exports = merge(base, {
  mode: "production",
  entry: appPath,
  output: {
    path: outputPath,
    publicPath: "/",
    filename: "[name].[contenthash].js",
    // chunkFilename: '[name].chunk.js',
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: "public/index.html",
      favicon: "public/favicon.ico",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],

  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: "source-map",

  // performance: {
  //   hints: false,
  // },
});
