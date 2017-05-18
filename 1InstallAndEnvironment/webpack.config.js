var webpack = require('webpack');

module.exports = {
	entry: {
		index1: './index1.js',
		index2: './index2.js',
		index3: './index3.js',
		index4: './index4.js',
	},
	output: {
	    path: __dirname + '/modules',
	    filename: '[name].js'
	},
  	plugins: [
    	new webpack.optimize.CommonsChunkPlugin({name:'index',filename:'index.js'})
  	]
}