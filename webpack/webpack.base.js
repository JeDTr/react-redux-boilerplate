// const path = require("path");
// const webpack = require("webpack");

const { appPath } = require("./constants");

module.exports = {
  // entry: {
  //   app: appPath,
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transform all .js and .jsx files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: options.babelQuery,
        },
      },
      // {
      //   // Preprocess our own .css files
      //   // This is the place to add your own loaders (e.g. sass/less etc.)
      //   // for a list of loaders, see https://webpack.js.org/loaders/#styling
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   // Preprocess 3rd party .css files located in node_modules
      //   test: /\.css$/,
      //   include: /node_modules/,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.(eot|otf|ttf|woff|woff2)$/,
      //   use: "file-loader",
      // },
      // {
      //   test: /\.svg$/,
      //   use: ['@svgr/webpack'],
      // },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      // {
      //   test: /\.(mp4|webm)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 10000,
      //     },
      //   },
      // },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
      "@": appPath,
    },
    extensions: [".js", ".jsx"],
    mainFields: ["browser", "jsnext:main", "main"],
  },
  target: "web", // Make web variables accessible to webpack, e.g. window
};
