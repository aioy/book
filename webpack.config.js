const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  entry: {
      app:'./src/js/index.js'
    },
    devtool: 'source-map ',
    devServer: {
      contentBase: './dist',
      compress: true,
      port: 8080,
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'Menu',
          template: './src/views/index.ejs',
      })
    ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
          {
           test: /\.scss$/,
           use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.jsnpm$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', {
              'debug':true
            }]
          }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
           use: [
           'file-loader'
          ]
        }
      ]
   },
};
