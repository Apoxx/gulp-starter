var gulp       = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(){
    gulp.watch('src/jade/**', ['jade', 'browserify']);
	gulp.watch('src/scripts/**/*', ['browserify']);
	gulp.watch('src/stylus/**', ['stylus']);
	gulp.watch('src/images/**', ['images']);
	livereload();
};
