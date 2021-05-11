const path = require("path");
const glob = require("glob");
require("dotenv").config({
  path: path.resolve(__dirname, "..", ".env.production"),
});
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgeCSSPlugin = require("purgecss-webpack-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", ".env.production"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      experimentalUseImportModule: true,
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, "..", "src")}/**/*`, {
        nodir: true,
      }),
    }),
    new CompressionPlugin(),
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
        "'self'",
        "https://fonts.googleapis.com/",
        "https://cdnjs.cloudflare.com/",
      ],
      "form-action": "'self'",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
    },
  },
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "..", "dist"),
    assetModuleFilename: "assets/[name].[contenthash][ext][query]",
    clean: true,
  },
};
