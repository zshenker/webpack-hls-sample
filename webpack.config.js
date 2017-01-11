const webpack = require('webpack');
const MINIFY = JSON.parse(process.env.MINIFY || '0');
let plugins = [
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(require('./package.json').version),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
];
if (MINIFY) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true,
    mangle: true,
    comments: false
  }));
}

module.exports = {
  entry: {
    'default': './src/builds/default.js',
  },
  output: {
    path: './dist/',
    filename: '[name].js',
    libraryTarget: 'var',
    library: 'VideoPlayer'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react'
          ],
          plugins: [
            'transform-object-rest-spread',
            'transform-function-bind'
          ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      webworkify: 'webworkify-webpack-dropin'
    }
  },
  plugins: plugins
};
