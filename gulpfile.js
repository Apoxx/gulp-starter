var gulp = require('./gulp')([
	'browserify',
	'stylus',
    'jade',
	'images',
	'open',
	'watch',
	'serve'
]);

gulp.task('build', ['browserify', 'stylus','jade', 'images']);
gulp.task('default', ['build', 'watch', 'serve', 'open']);
