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
        rules: [
            {
                test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
                options: { plugins: ['transform-runtime'], presets: ['es2015'] }
            },
            { test: /\.hbs$/, loader: 'handlebars-loader' }
        ]
    }
};