
var path = require('path');

module.exports = {

    mode: 'none',

    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js",
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: '[name].bundle.js',
    },

    module: {

        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },

                test: /\.js$/,

                exclude: /node_modules/,
            }
        ]
    }
}