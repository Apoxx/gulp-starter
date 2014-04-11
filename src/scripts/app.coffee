angular = require "angular"
$ = require "jquery"
plugin = require "plugin"

index = require "./views/index"

$ "body"
.append index name : "World"

angular.module("helloworld", [])

plugin()

console.log "Hello World"