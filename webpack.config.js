var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/main.js'
    ],
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/,
                query: { plugins: ['transform-runtime'], presets: ['es2015'] }
            },
            { test: /\.hbs$/, loader: 'handlebars' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Intro to Webpack',
            template: 'src/index.html'
        })
    ]
};