const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
const dotenv = require("dotenv");

let env = dotenv.config().parsed;
let envKeys = {};
if (!env) {
	env = process.env;
}
envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});
module.exports = {
	entry: { app: "./src/index.js" },
	devServer: {
	    static: './dist',
	    hot: true,
	  },
	output: {
		path: path.join(__dirname, "dist"),
		filename: "index_bundle.js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					"sass-loader",

					// Compiles Sass to CSS
				],
			},
			{
				test: /\.css$/,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
				],
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				use: "url-loader?limit=100000",
			},
			{
				test: /\.(ico)$/,
				use: "file-loader?name=[name].[ext]",
			},
			{
				test: /\.pdf$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			favicon: "public/favicon.ico",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "node_modules/pdfjs-dist/cmaps/",
					to: "cmaps/",
				},
			],
		}),
		new DefinePlugin(envKeys),
	],
	devServer: {
		//host: "192.168.1.59",
		historyApiFallback: true,
		hot: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers":
				"X-Requested-With, content-type, Authorization",
		},
	},
	resolve: {
		modules: [path.resolve(__dirname, './src'), 'node_modules'],
	}
};
