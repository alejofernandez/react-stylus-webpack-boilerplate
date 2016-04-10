import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.styl$/,
      /* eslint-disable max-len */
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!stylus-loader')
      /* eslint-enable max-len */
    }, {
      test: /\.woff$/,
      loader: 'file-loader?name=font/[name].[ext]?[hash]'
    }, {
      test: /\.png$/,
      loader: 'file-loader?name=images/[name].[ext]?[hash]'
    }, {
      test: /\.md$/,
      loader: 'html!markdown'
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: false }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new HtmlWebpackPlugin({ template: 'src/index.html', inject: 'body' })
  ]
};
