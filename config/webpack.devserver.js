/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const express = require('express');
const webpack = require('webpack');
const webpackMW = require('webpack-dev-middleware');
const config = require('./webpack/webpack.config');

const app = express();
const compiler = webpack(config);

app.use(webpackMW(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('mock'));

app.listen(8080, () => console.log('Now serving from 8080'));
