'use strict';

var gulp = require('gulp'),
    scsslint = require('gulp-scss-lint');
 
gulp.task('scss-lint', function() {
  return gulp.src('/scss/*.scss')
    .pipe(scsslint());
});