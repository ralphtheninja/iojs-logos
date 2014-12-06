#!/usr/bin/env node

var http = require('http')
var logos = require('../')
var port = 10101

http.createServer(function(req, res) {
  logos.random().pipe(res)
}).listen(port, function() {
  console.log('iojs-logos served randomly on http://localhost:%d', port)
})
