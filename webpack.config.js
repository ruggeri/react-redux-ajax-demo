// webpack.config.js
const path = require('path');

module.exports = {
  entry: './frontend/cats_redux.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  mode: 'development',
};
