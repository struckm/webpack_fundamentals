var path = require('path');

module.exports = {
	context: path.resolve('js'),
	entry: ['./utils', './app'], // this is a key concept here. Utils.js is available to all code in the application. It's not required into any file.
	output: {
		path: path.resolve('build/js'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: 'public'
	},
	watch: true,
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	resolve: {
		extensions: ['', '.js']
	}
}