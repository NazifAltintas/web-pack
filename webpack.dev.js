const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const dev = {
  mode: "development",
 
  devServer: {
    watchFiles: ["src/**/*.html", "src/**/*.scss"],
    port: 3000,
    open: true,
    hot: true,
    
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
    clean: false,
  },
};

module.exports = merge(common, dev);
