'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' , sourceComments: false})
        .on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream({match: '**/*.css'}));
});