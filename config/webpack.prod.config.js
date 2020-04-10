const merge = require("webpack-merge");
const path = require("path");

//Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const baseConfig = require("./webpack.base.config");

const prodConfiguration = () => {

  return (
    {
      mode: "production",
      output: {
        path: path.resolve(__dirname, "..", "build"),
        publicPath: "/",
        filename: "[name].[contentHash].bundle.js"
      },
      optimization: {
        // runtimeChunk: 'single',
        // splitChunks: {
        //   cacheGroups: {
        //     vendor: {
        //       test: /[\\/]node_modules[\\/]/,
        //       name: "vendors",
        //       chunks: "all"
        //     }
        //   }
        // },
        minimizer: [new UglifyJsPlugin()],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "..", "index.html"),
          filename: "./index.html",
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
        }),
        new MiniCssExtractPlugin({
          filename: "[name].[contentHash].css"
        }),
        new OptimizeCssAssetsPlugin(),
        new Visualizer({ filename: "./statistics.html" }),
        new CleanWebpackPlugin()
      ],
    }
  )
};

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration());
};