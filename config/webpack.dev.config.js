const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = require("./webpack.base.config");

const devConfiguration = () => {

  return (
    {
      mode: "development",
      output: {
        path: path.resolve(__dirname, "..", "build"),
        publicPath: "/",
        filename: "[name].bundle.js"
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve( "./index.html"),
          filename: "./index.html"
        }),
      ]
    }
  )
};

module.exports = env => {
  return merge(baseConfig(env), devConfiguration())
};


