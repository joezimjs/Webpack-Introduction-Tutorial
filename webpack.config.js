var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        vendor: ['babel-polyfill', 'lodash'],
        main: './src/main.js'
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
                options: { plugins: ['transform-runtime'], presets: ['es2015'] }
            },
            { test: /\.hbs$/, loader: 'handlebars-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Intro to Webpack',
            template: 'src/index.html'
        }),
        new UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8 : true },
            compress: { screw_ie8: true, warnings: false },
            comments: false
        }),
        new CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js"
        })
    ]
};