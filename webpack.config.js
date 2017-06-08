var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: {
        app:'./src/app.js'
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js','.scss']
    },
    watch:true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['node_modules'],
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, 
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, 
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
 