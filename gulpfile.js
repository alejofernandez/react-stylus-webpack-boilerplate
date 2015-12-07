var gulp             = require('gulp');
var ghPages          = require('gulp-gh-pages');
var path             = require('path');
var webpack          = require('webpack');
var webpackStream    = require('webpack-stream');
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

gulp.task('static', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist/'))
  ;
});

gulp.task('bundle', function (done) {
  webpack(productionConfig).run(function(err, stats) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(stats.toString());
    }

    if (done) done();
  });
});

gulp.task('build', ['static', 'bundle']);

gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({force: true}))
  ;
});
