var browserify = require('browserify');
var gulp = require('gulp');
var notify = require("gulp-notify");
var source = require('vinyl-source-stream');

module.exports = function() {
	return browserify({
			entries: ['./app/scripts/app.coffee'],
			extensions: ['.coffee']
		})
		.require('underscore')
		.bundle({debug: true})
		.on('error', notify.onError({
			message: "<%= error.message %>",
			title: "JavaScript Error"
		}))
		.pipe(source('app.js'))
		.pipe(gulp.dest('./build/'));
};
