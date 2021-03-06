/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const express = require('express');
const webpack = require('webpack');
const webpackMW = require('webpack-dev-middleware');
const path = require('path');

const devConfig = require('./webpack/webpack.config');

const { webpackConfig, staticFiles } = devConfig;
const PORT = process.env.PORT || '8080';

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMW(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

const getStatic = folder => express.static(path.join(__dirname, folder));
staticFiles.forEach(f => app.use(f.route, getStatic(f.folder)));

/* all other requests to index.html */
app.use((req, res) => res.redirect(301, `/?r=${encodeURIComponent(req.path)}`));

app.listen(PORT, () => console.log('Now serving from 8080'));
