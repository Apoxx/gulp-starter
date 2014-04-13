var gulp       = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(){

    var reload = function(){return gulp.src('').pipe(livereload());};

    gulp.task('rlindex',['index'],reload);
    gulp.task('rlbrowserify',['browserify'],reload);
    gulp.task('rlcompass',['compass'],reload);
    gulp.task('rlimages',['images'],reload);

    gulp.watch('app/index.jade', ['rlindex']);
    gulp.watch('app/views/**', ['rlbrowserify']);
    gulp.watch('app/scripts/**/*', ['rlbrowserify']);
    gulp.watch('app/styles/**', ['rlcompass']);
    gulp.watch('app/images/**', ['rlimages']);

    livereload();
};
