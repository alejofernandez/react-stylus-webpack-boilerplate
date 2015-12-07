var path              = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!stylus-loader')
    }, {
      test: /\.woff$/,
      loader: 'file-loader?name=font/[name].[ext]&mimetype=application/font-woff'
    }, {
      test: /\.png$/,
      loader: 'file-loader?name=images/[name].[ext]'
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }]
  },
  plugins: [
    new ExtractTextPlugin('static/styles.css', {allChunks: false})
  ]
};
