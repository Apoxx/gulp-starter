var gulp = require("gulp");
var jade = require('gulp-jade');
var livereload = require('gulp-livereload');

module.exports = function(){
    return gulp.src('./app/index.jade')
            .pipe(jade({
                locals: {},
                pretty: true
            }))
            .pipe(gulp.dest('./build/'))
            .pipe(livereload());
};