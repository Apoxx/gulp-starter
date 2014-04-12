var connect = require('connect');
var gulp    = require('gulp');
var http    = require('http');
var path    = require('path');

module.exports = function(){
    var toRemove = path.normalize('/gulp/tasks');
	var buildPath = __dirname.split(toRemove)[0];
    console.log(buildPath);
	var app = connect()
		.use(connect.logger('dev'))
		.use(connect.static(buildPath));

	http.createServer(app).listen(8080);
};
