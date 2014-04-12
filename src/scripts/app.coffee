$ = require "jquery"
plugin = require "plugin"

index = require "./views/index"

$("body").append index name: "World"

plugin()

console.log "Hello World"