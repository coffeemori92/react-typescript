const path = require('path');

module.exports = {
  name: 'webpack-setting',
  mode: 'development', // production
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  entry: {
    app: './client'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
    }],
  },
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  }
};