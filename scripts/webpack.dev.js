const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "..", ".env.development"),
});
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
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
    new CspHtmlWebpackPlugin({
      "default-src": "'self'",
      "connect-src": ["'self'", process.env.API_URL],
      "font-src": [
        "'self'",
        "https://fonts.gstatic.com/",
        "https://cdnjs.cloudflare.com/",
      ],
      "img-src": ["'self'", "data:", "https://via.placeholder.com/"],
      "script-src": ["'self'", "'unsafe-eval'"],
      "style-src": [
        "'unsafe-inline'",
        "'self'",
        "https://fonts.googleapis.com/",
        "https://cdnjs.cloudflare.com/",
      ],
      "form-action": "'self'",
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
