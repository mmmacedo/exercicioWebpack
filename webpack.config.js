const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: '.bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }, plugins: [
        new MiniCssExtractPlugin({
            filename: "app.css",
            chunkFilename: "app.css"
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/react']
            }
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './public'
                    }
                },
                "css-loader"
            ]
        }
        ]
    }
}