const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment ? 'eval-source-map' : 'source-map',
	entry: path.resolve(__dirname, 'src', 'index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
		plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		})
	],
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'public')
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx$/i,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.s?css$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				use: 'file-loader'
			}
		]
	}
}