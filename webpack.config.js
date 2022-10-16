
var path = require('path');

module.exports = {

    mode: 'none',

    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: 'App.bundle.js',
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