const path = require('path');
const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


console.log(path.resolve(process.cwd(), 'app', 'images/'), '==================================================== Here is the path');

const clientConfig = {

	name: 'client',
	mode: sharedConfig.mode,
	entry: ['babel-polyfill', './app/index.js'],
	output: {
		path: sharedConfig.path,
		filename: 'bundle.js',
		publicPath: sharedConfig.publicPath
	},
	watch: true,
	watchOptions: {
	    aggregateTimeout: 300,
	    poll: 1000
	},

	resolve: {
		alias: {
			Images: path.resolve(process.cwd(), './app/images/')
		}
	},
	module: {
		rules: sharedConfig.module.rules
	},

	plugins: [
		new webpack.DefinePlugin({
			isServer: 'false'
		}),
		new MiniCssExtractPlugin({
			name: 'main.css',
			chunkFilename: '[id].css'
		}),
		...sharedConfig.plugins
	]
};

module.exports = clientConfig;
