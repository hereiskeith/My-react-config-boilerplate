const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

//Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {
  const { PLATFORM, VERSION } = env;

  return merge([
    {
      entry: "./src/index.js",
      output: {
        path: path.resolve(__dirname, "..", "build"),
        publicPath: "/",
        filename: "[name].[contentHash].bundle.js"
      },
      devServer: {
        contentBase: "./build"
      },
      devtool: "inline-source-map",
      module: {
        rules: [
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[hash].[ext]",
                  outputPath: "static"
                }
              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader","eslint-loader"]
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === "production" ? MiniCssExtractPlugin.loader : "style-loader",
              "css-loader",
              "sass-loader"]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve( "./index.html"),
          filename: "./index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(VERSION),
          "process.env.PLATFORM": JSON.stringify(PLATFORM)
        }),
      ],
    }
  ])
};