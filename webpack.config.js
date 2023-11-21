const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {//css
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {//sass
        test: /\.s[ac]ss$/i, //(a|c) de olur. i=ignore case sensitive
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
