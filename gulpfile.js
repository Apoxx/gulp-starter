var gulp = require('./gulp')([
    'index',
	'browserify:jade',
	'compass',
    'jade',
	'images',
	'open:serve',
	'watch',
	'serve:build',
    'minifyjs',
    'minifyhtml',
    'minifycss'
    ]);
gulp.task('build', ['index', 'compass', 'browserify'], function(){
    gulp.src('./app/images/**').pipe(gulp.dest('./build/images'));
});
gulp.task('default', ['watch', 'open']);
gulp.task('dist', ['build'], function(){
    gulp.run('minifyjs');
    gulp.run('minifyhtml');
    gulp.run('minifycss');
    gulp.run('images');
});