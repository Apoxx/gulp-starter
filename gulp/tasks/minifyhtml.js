var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');

module.exports =  function() {
    var opts = {comments:true,spare:true};
    return gulp.src('./build/*.html')
            .pipe(minifyHTML(opts))
            .pipe(gulp.dest('./dist/'));
};