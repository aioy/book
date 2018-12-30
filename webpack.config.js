const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      app:'./src/js/index.js',
      test:'./src/js/test2.js'
    },
    devtool: 'source-map ',
    devServer: {
      contentBase: './dist',
      compress: true,
      port: 9000
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
          test: /\.(png|svg|jpg|gif)$/,
           use: [
           'file-loader'
          ]
        }
      ]
   },
};
