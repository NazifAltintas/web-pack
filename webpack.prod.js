const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const prod = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        //css
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        //sass
        test: /\.s[ac]ss$/i, //(a|c) de olur. i=ignore case sensitive
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
            
         

          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[contenthash].css",
    }),
  ],
};

module.exports = merge(common, prod);
