var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};