import gulp from 'gulp';
import run from 'gulp-run';

gulp.task('husky', (done) => {
  const husky = run('npm run husky', { silent: true });
  husky.exec();
  done();
});

gulp.task('default', gulp.series('husky'));
