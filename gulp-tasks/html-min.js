var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin');

gulp.task('html-min', function() {
  return gulp.src('app/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});