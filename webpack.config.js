const NODE_ENV = process.env.NODE_ENV || 'development';
let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        index: [path.resolve(__dirname, './src/index.js')],
        middleware: [path.resolve(__dirname, './src/middleware.js')]
    },
    output: {
        path: path.resolve(__dirname, './lib/'),
        filename: '[name].js',
        publicPath: '/'
    },
    target: 'web',
    node: {
        __dirname: false,
        __filename: false,
        fs: 'empty'
    },
    resolve: {
        extensions: ['', '.js']
    },
    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,
    module: {
        noParse: /node_modules\/quill\/dist/,
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.scss$/i,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(js|jsx)?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    ],
    devServer: {
        historyApiFallback: true
    }
};