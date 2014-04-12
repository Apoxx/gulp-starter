var gulp       = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var livereload = require('gulp-livereload');
var notify     = require('gulp-notify');

module.exports = function() {
    return gulp.src('./app/styles/*.stylus')
        .pipe(stylus({use: [nib()]}))
        .pipe(gulp.dest('./build'))
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "STYLUS Error"
        }))
        .pipe(livereload());
};