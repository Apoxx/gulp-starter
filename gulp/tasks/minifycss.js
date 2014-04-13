var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');

module.exports =  function() {
    return gulp.src('./build/*.css')
            .pipe(minifyCSS(opts))
            .pipe(gulp.dest('./dist/'));
};