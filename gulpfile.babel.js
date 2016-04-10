import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import productionConfig from './webpack.production.config';
import devServerConfig from './webpack.dev-server.config';
import eslint from 'gulp-eslint';

gulp.task('lint', () => (
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
));

gulp.task('serve', () => {
  new WebpackDevServer(webpack(devServerConfig), {
    hot: true,
    publicPath: devServerConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(devServerConfig.port, 'localhost', (err) => {
    /* eslint-disable no-console */
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Listening at localhost: ${devServerConfig.port}`);
    /* eslint-enable no-console */
  });
});

gulp.task('build', ['lint'], done => {
  webpack(productionConfig).run((err, stats) => {
    /* eslint-disable no-console */
    err && console.log('Error', err);
    stats && console.log(stats.toString({ colors: true }));
    done && done();
    /* eslint-enable no-console */
  });
});

gulp.task('deploy', ['build'], () =>
  gulp.src('./dist/**/*').pipe(ghPages({ force: true }))
);
