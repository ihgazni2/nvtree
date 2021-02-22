const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "ndtree.js",
    path: path.resolve(__dirname, "dist"),
    library: "NDTREEJS",
    libraryTarget: "umd",
    globalObject: "this"
  },
  node:{
      fs:'empty'    
  },
  module:{
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": [
                "@babel/preset-env",
                "@babel/preset-typescript"
              ],
              "plugins": [
                "@babel/plugin-proposal-private-methods",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread"
              ]
            }
          }
        }
      ]
  },
  mode: "production",
  devtool: "source-map"
};

