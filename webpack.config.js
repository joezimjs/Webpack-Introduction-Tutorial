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
                test: /\.jsx?$/,
                loader: 'babel',
                // blacklist node_modules scripts from being processed via Babel
                exclude: /node_modules/,
                // or you can use a whitelist:
                // include: [ path.resolve(__dirname, "src") ],

                // pass in options to babel loader
                query: {
                    // prevents multiple versions of e.g. regeneratorRuntime from
                    // being created when using generators in multiple files
                    plugins: ['transform-runtime'],
                    // tell Babel which presets to use
                    presets: ['es2015']
                }
            }
        ]
    }
};