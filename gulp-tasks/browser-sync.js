var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        port:9000,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./app/scss/*.scss", ['sass']);
    gulp.watch("./app/*.html").on('change', browserSync.reload);
});