var gulp = require('gulp'),
    browserify = require('browserify'),
    transform = require('vinyl-transform');

gulp.task('browserify', function () {
  var browserified = transform(function (filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(['./src/*.js'])
    .pipe(browserified)
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['browserify'])
