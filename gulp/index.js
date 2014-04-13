var gulp = require('gulp');

module.exports = function(tasks) {
	tasks.forEach(function(input) {
        var split = input.split(':');
        var name = split[0];
        var dependencies = split[1];
        dependencies = dependencies ? dependencies.split(',') : [];
		gulp.task(name,dependencies, require('./tasks/' + name));
	});

	return gulp;
};
