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
                loader: ['style-loader','css-loader'],
                exclude: '/node_modules/'
            }
        ]
    }
};