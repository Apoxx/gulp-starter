var gulp       = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(){
    gulp.watch('app/index.jade', ['index']);
    gulp.watch('app/views/**', ['jade', 'browserify']);
	gulp.watch('app/scripts/**/*', ['browserify']);
	gulp.watch('app/styles/**', ['compass']);
	gulp.watch('app/images/**', ['images']);
	livereload();
};
