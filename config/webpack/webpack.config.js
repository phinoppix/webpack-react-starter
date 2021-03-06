const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');

const BUILD = path.resolve('build/debug');

loaders.push({
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
  exclude: ['node_modules'],
});

const webpackConfig = {
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/app/startClient.jsx', // your app's entry point
  ],
  /* Required to work on Firefox Quantum v58.0b2.
     The dev tool is only able to use cheap-module-source-map.
  */
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/',
    path: BUILD,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/app/template.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      },
    }),
    new WriteFilePlugin(),
    new FlowWebpackPlugin(),
  ],
};

/* Collection of key-values: route : folder
  The <folder> is relative to config/webpack.devserver.js app.
 */
const staticFiles = [
  { route: '/mock', folder: '../mock' },
];

module.exports = {
  webpackConfig,
  staticFiles,
};
