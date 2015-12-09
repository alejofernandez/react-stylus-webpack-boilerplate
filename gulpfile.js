var gulp             = require('gulp');
var ghPages          = require('gulp-gh-pages');
var path             = require('path');
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var productionConfig = require('./webpack.production.config');
var devServerConfig  = require('./webpack.dev-server.config');

gulp.task('serve', function() {
  new WebpackDevServer(webpack(devServerConfig), {
    publicPath: devServerConfig.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(devServerConfig.port, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:' + devServerConfig.port);
  });
});

gulp.task('build', function (done) {
  webpack(productionConfig).run(function(err, stats) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(stats.toString());
    }

    if (done) done();
  });
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({force: true}))
  ;
});
