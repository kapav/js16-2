const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
}
