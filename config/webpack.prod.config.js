const merge = require("webpack-merge");

//Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const baseConfig = require("./webpack.base.config");

const prodConfiguration = env => {
  return merge([
    {
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
        new MiniCssExtractPlugin({
          filename: "[name].[contentHash].css"
        }),
        new OptimizeCssAssetsPlugin(),
        new Visualizer({ filename: "./statistics.html" }),
        new CleanWebpackPlugin()
      ],
    },
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
};