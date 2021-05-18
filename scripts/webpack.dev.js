const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "..", ".env.development"),
});
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", ".env.development"),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "..", "dist"),
    compress: true,
    historyApiFallback: true,
    port: 8081,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  devtool: "eval-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
    assetModuleFilename: "assets/[name].[contenthash][ext][query]",
    clean: true,
  },
};
