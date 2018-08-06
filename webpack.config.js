var path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	devtool: 'eval-source-map',
	entry: path.join(__dirname, './src/main.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3001
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: path.join(__dirname, './src/index.html') }),
		new webpack.BannerPlugin('这个是Leolulu做的！'),
		new VueLoaderPlugin()
	]
}