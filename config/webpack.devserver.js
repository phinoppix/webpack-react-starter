/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const express = require('express');
const webpack = require('webpack');
const webpackMW = require('webpack-dev-middleware');
const path = require('path');

const config = require('./webpack/webpack.config');

const PORT = process.env.PORT || '8080';

const app = express();
const compiler = webpack(config);

app.use(webpackMW(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

// __dirname returns /config, the location of this js file.
// TODO: /mock folder must be config to BUILD folder.
//       Better to maintain a list of static folders and use
//       copy plugin
app.use('/mock', express.static(path.join(__dirname, '../mock')));

app.listen(PORT, () => console.log('Now serving from 8080'));
