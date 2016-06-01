'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(livereload());
});


gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch('./app/sass/**/*.scss', ['sass']);
});