var path = require("path");
var webpack = require("webpack");

module.exports = function(env) {

	var pack = require("./package.json");
	var babelSettings = {
		extends: path.join(__dirname, '/.babelrc')
	};

	var config = {
		entry: {
			"plugins-theme" : "./sources/plugins-theme.js",
			"plugins-locale" : "./sources/plugins-locale.js",
			"plugins-status" : "./sources/plugins-status.js",
			"plugins-unload" : "./sources/plugins-unload.js",

			"routers-url" : "./sources/routers-url.js",

			"appguard" : "./sources/appguard.js",
			"promises" : "./sources/promises.js",
			"viewguard" : "./sources/viewguard.js",
			"windows" : "./sources/windows.js",
			"routes" : "./sources/routes.js",
			"redirects" : "./sources/redirects.js",
			"screensize" : "./sources/screensize.js",
			"viewresolve" : "./sources/viewresolve.js",
			"viewapp" : "./sources/viewapp.js"
		},
		output: {
			path: path.join(__dirname, "codebase"),
			publicPath:"/codebase/",
			filename: "[name].js"
		},
		devtool: "inline-source-map",
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader?" + JSON.stringify(babelSettings)
				}
			]
		},
		resolve: {
			extensions: [".js"],
			modules: ["./sources", "node_modules"],
			alias:{
				"jet-views":path.resolve(__dirname, "sources/views"),
				"jet-locales":path.resolve(__dirname, "sources/locales")
			}
		},
		//next config is used only by router-url sample
		devServer:{
			historyApiFallback:{
				index : "routers-url.html"
			}
		}
	};

	return config;
}