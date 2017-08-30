var webpack = require("webpack");

module.exports = {
  entry: __dirname + "/src/main.jsx",
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js",
    publicPath: "/js/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  plugins: [],
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    contentBase: __dirname + '/public',
    proxy: {
      '**': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
}