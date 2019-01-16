const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    explicit: "./explicit-entry.js",
    resolved: "./resolved-entry.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /explicit-extension\/foo\.js$/,
      "./bar.js"
    ),

    // need backslash separators for Windows, after resolution
    new webpack.NormalModuleReplacementPlugin(
      new RegExp(`resolved-extension${path.sep}foo\.js$`),
      "./bar.js"
    )
  ]
};
