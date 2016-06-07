const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './src/index',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }, {
      test: /\.styl$/,
      /* eslint-disable max-len */
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
      /* eslint-enable max-len */
    }, {
      test: /\.woff$/,
      loader: 'file-loader?name=font/[name].[ext]?[hash]'
    }, {
      test: /\.png$/,
      loader: 'file-loader?name=images/[name].[ext]?[hash]'
    }, {
      test: /\.jade$/,
      loader: 'jade-react-loader'
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
    new webpack.NoErrorsPlugin()
  ]
};
