var gulp = require('gulp');
var open = require("gulp-open");

module.exports = function() {

	var options = {
		url: "http://localhost:8080",
		app: "chrome"
	};

	return gulp.src("./build/index.html").pipe(open("", options));
};
