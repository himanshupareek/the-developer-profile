'use strict';

var gulp = require('gulp'),
    requireAll = require('require-all'),
    tasks = requireAll(__dirname + '/gulp-tasks/'),
	task;

for (task in tasks) {
	if (typeof tasks[task] === 'function') {
		gulp.task(task, tasks[task](gulp, plugins, config));
	}
}

gulp.task('default', ['browser-sync', 'sass', 'scss-lint'], function(callback) {
	console.info('Build is running on port : 9000');
});

gulp.task('build', ['html-min'], function(callback) {
	console.info('Build is completed.');
});