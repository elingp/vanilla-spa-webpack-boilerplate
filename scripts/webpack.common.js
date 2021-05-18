const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.js"),
  resolve: {
    alias: {
      App: path.resolve(__dirname, "..", "src"),
      Apis: path.resolve(__dirname, "..", "src", "apis"),
      Assets: path.resolve(__dirname, "..", "src", "assets"),
      Utils: path.resolve(__dirname, "..", "src", "utils"),
      lodash: path.resolve(__dirname, "..", "node_modules", "lodash-es"),
    },
    modules: [path.resolve(__dirname, "..", "node_modules")],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(jpe?g|png|gif|tif|webp|avif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [path.resolve(__dirname, "..", "public")],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "src", "index.html"),
    }),
    new WebpackPwaManifest({
      name: "Vanilla SPA Webpack Boilerplate",
      short_name: "Vanilla SPA",
      description:
        "SPA with vanilla js, Webpack 5, and opinionated configuration",
      background_color: "#FFFFFF",
      theme_color: "#FFFFFF",
      icons: [
        {
          src: path.resolve(
            __dirname,
            "..",
            "src",
            "assets",
            "images",
            "icon-192.png"
          ),
          sizes: "192x192",
          destination: "assets",
        },
        {
          src: path.resolve(
            __dirname,
            "..",
            "src",
            "assets",
            "images",
            "icon-512.png"
          ),
          sizes: "512x512",
          destination: "assets",
        },
      ],
      publicPath: "./",
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["gifsicle", { interlaced: true, optimizationLevel: 2 }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          ["svgo", { plugins: [{ name: "removeViewBox", active: false }] }],
        ],
      },
    }),
    new PreloadWebpackPlugin({
      rel: "prefetch",
      include: "all",
    }),
    new LodashModuleReplacementPlugin(),
    new ESLintPlugin(),
    new StylelintPlugin(),
  ],
};
