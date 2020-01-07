const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const sharedConfig = {
	mode: process.env.NODE_ENV || 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader'
				}
			},

			{
				test: /\.(less|css)$/,
				exclude: '/node_modules/',
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				]
			},

			{
				test: /\.(jpg|png|gif|svg)/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 84372
					}
				}
			}
		]
	},

	plugins: [

		new MiniCssExtractPlugin({
			name: 'main.css',
			chunkFilename: '[id].css'
		}),
        new webpack.HotModuleReplacementPlugin(),

	]
}

module.exports = sharedConfig;
