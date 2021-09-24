module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    "react-hot-loader/babel",
    // ["styled-components", { fileName: false }],
  ],
};
