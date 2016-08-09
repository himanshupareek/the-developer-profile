'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' , sourceComments: true})
        .on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});