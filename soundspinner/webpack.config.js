/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var path = require("path")
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin')

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
	"context": __dirname,
	entry: {
		main: "./app/Main",
	},
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'soundspinner'),
		filename: "./js/[name].js",
		chunkFilename: "./js/[id].js",
		sourceMapFilename : "[file].map",
	},
	resolve: {
		modules : ["node_modules", "style", "third_party/Tone.js/", "app"],
		extensions: ['.ts', '.js']
	},
	plugins: [
	    // new webpack.optimize.UglifyJsPlugin({
		// 	minimize: true
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: 'index.html'
		// })
	],
	devServer: {
		static: {
		  directory: path.join(__dirname, ''),
		},
		compress: true,
		port: 4000,
	},
	 module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
			},
			{
				test: /\.(png|gif)$/,
				use: ["url-loader"],
			},
			{
				test: /\.json$/,
				use: ["json-loader"],
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use: ["file-loader?name=images/font/[hash].[ext]"]
			}
		]
	}
};