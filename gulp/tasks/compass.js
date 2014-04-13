var compass    = require('gulp-compass');
var gulp       = require('gulp');
var notify     = require('gulp-notify');

module.exports = function() {
    return gulp.src('./app/styles/app.sass')
        .pipe(compass({
            config_file: 'compass.rb',
            css: 'build',
            sass: 'app/styles'
        }))
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "SASS Error"
        }));
};