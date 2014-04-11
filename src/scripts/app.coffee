angular = require "angular"
$ = require "jquery"
plugin = require "plugin"

index = require "./views/index"

$ "body"
.append index name : "Apox"

angular.module("helloworld", [])

plugin()

console.log "Hello World"