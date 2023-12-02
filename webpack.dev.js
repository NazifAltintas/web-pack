
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
  module: {
    rules: [
      { //css
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {//sass
        test: /\.s[ac]ss$/i, //(a|c) de olur. i=ignore case sensitive
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  
};

module.exports = merge(common, dev);
