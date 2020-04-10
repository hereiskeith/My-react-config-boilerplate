const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

//Plugins

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {
  const { PLATFORM, VERSION } = env;

  return (
    {
      entry: "./src/index.js",
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
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(VERSION),
          "process.env.PLATFORM": JSON.stringify(PLATFORM)
        }),
      ],
    }
  )
};