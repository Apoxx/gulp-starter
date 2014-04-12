var jade = require('gulp-jade');
var insert = require("gulp-insert");
var gulp       = require('gulp');
var notify     = require('gulp-notify');

module.exports = function() {
    return gulp.src('./app/views/*.jade')
        .pipe(jade({
            client: true
        }))
        .pipe(insert.prepend('jade = require("jade/runtime");\nmodule.exports = template;\n'))
        .pipe(gulp.dest('./app/scripts/views'))
        .on('error', notify.onError({
            message: "<%= error.message %>",
            title: "JADE Error"
        }));
};