module.exports = {
	entry: ['./utils', './app'], // this is a key concept here. Utils.js is available to all code in the application. It's not required into any file.
	output: {
		filename: 'bundle.js'
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
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}