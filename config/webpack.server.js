const express = require('express');
const webpack = require('webpack');
const webpackMW = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack/webpack.config');
const compiler = webpack(config);

app.use(webpackMW( compiler, {
	publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.listen(8080, function() {
	console.log('Now serving from 8080');
});