var gulp = require("gulp");
var livereload = require('gulp-livereload');

module.exports = function(){
  return gulp.src('').pipe(livereload());
};