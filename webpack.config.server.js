const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const serverConfig = {
	name: 'server',
	mode: sharedConfig.mode,
	entry: ['babel-polyfill', 'webpack/hot/poll?1000', './server/index.js'],
	target: 'node',
	externals: [nodeExternals({whitelist: ['webpack/hot/poll?1000']})],
	output: {
		path: sharedConfig.path,
		filename: 'server.js',
		publicPath: sharedConfig.publicPath
	},
	watch: true,
	watchOptions: {
	    aggregateTimeout: 300,
	    poll: 1000
	},
	module: {
		rules: sharedConfig.module.rules
	},

	plugins: [
		new webpack.EvalSourceMapDevToolPlugin(),
		new CleanWebpackPlugin('./dist'),
		new StartServerPlugin('server.js'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server')
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
		new ProgressBarPlugin(),
		...sharedConfig.plugins
	]
};
module.exports = serverConfig;