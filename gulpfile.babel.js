import gulp             from 'gulp';
import ghPages          from 'gulp-gh-pages';
import path             from 'path';
import webpack          from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import productionConfig from './webpack.production.config';
import devServerConfig  from './webpack.dev-server.config';

gulp.task('serve', () => {
  new WebpackDevServer(webpack(devServerConfig), {
    publicPath: devServerConfig.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(devServerConfig.port, 'localhost', (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:' + devServerConfig.port);
  });
});

gulp.task('build', done => {
  webpack(productionConfig).run((err, stats) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(stats.toString());
    }

    if (done) done();
  });
});

gulp.task('deploy', ['build'], () =>
  gulp.src('./dist/**/*')
    .pipe(ghPages({force: true}))
);
