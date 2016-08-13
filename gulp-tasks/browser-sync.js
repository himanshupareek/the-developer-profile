'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        port:9000,
        injectChanges: true,
        files:['./**/*'],
        server: {
            baseDir: "./app"
        },
        watchOptions: {
            ignored: 'node_modules/*',
            ignoreInitial : true
        }
    });

    gulp.watch("./app/*.html").on('change', browserSync.reload);
});