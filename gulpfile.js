var gulp = require('./gulp')([
    'index',
	'browserify',
	'stylus',
    'jade',
	'images',
	'open',
	'watch',
	'serve'
]);

gulp.task('build', ['index','browserify', 'stylus','jade', 'images']);
gulp.task('default', ['build', 'watch', 'serve', 'open']);
