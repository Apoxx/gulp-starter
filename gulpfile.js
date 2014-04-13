var gulp = require('./gulp')([
    'index',
	'browserify',
	'compass',
    'jade',
	'images',
	'open',
	'watch',
	'serve'
]);

gulp.task('build', ['index','browserify', 'compass','jade', 'images']);
gulp.task('default', ['build', 'watch', 'serve', 'open']);
