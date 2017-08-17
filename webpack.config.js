const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        vendor:'./src/vendor.js',
        app:'./src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js','.scss','.json']
    },
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
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(gif|png|jpe?g)$/i, loader: 'file-loader?name=dist/images/[name].[ext]' },
            { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            {
                test: /\.scss$/,
                use: [ { loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};

const isProd = (process.env.NODE_ENV === 'production');
if (!isProd) {
  config.watch = true;
  config.devtool = 'inline-source-map';
} else {
  config.devtool = 'hidden-source-map';
  config.plugins = config.plugins.concat([
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoEmitOnErrorsPlugin(),
    // new CompressionPlugin({
    //     asset: "[path].gz[query]",
    //     algorithm: "gzip",
    //     test: /\.js$|\.css$|\.html$/,
    //     threshold: 10240,
    //     minRatio: 0
    // }),
    new CopyWebpackPlugin([{ from: './src/index.html' }], {})
  ]);
}


module.exports = config;
 