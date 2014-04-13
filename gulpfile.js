var gulp = require('./gulp')([
    'index',
	'browserify',
	'compass',
    'jade',
	'images',
	'open',
	'watch',
	'serve',
    'minifyjs',
    'minifyhtml',
    'minifycss'
    ]);
gulp.task('build', ['index','browserify', 'compass', 'jade', 'images']);
gulp.task('default', ['build', 'watch', 'serve', 'open']);
gulp.task('dist', ['build', 'minifyjs', 'minifyhtml', 'minifycss']);