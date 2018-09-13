/**
 * @Author: harsha
 * @Date:   2018-09-13T15:35:47+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-09-13T16:48:46+05:30
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var isDev = process.argv.indexOf('-p') === -1;
var config = {
	context: __dirname + '/src',
	entry: {
		main: './index.js'
	},
	output: {
		path: __dirname + '/deploy',
		filename: '[name]-[hash:6].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				query: {
					presets: ['@babel/preset-env', '@babel/react']
				}
			},
			{
				test: /\.css$/,
				loaders: [
					require.resolve('style-loader'),
					require.resolve('css-loader')
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.css']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
};
if (isDev) {
	config.devtool = 'eval-source-map';
} else {
	config.plugins.push(
		new webpack.optimize.AggressiveMergingPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		}),
		new webpack.optimize.DedupePlugin()
	);
}
module.exports = config;
