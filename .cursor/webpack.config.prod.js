const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/app.ts",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  externals: [nodeExternals()],
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
