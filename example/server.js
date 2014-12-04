var http = require('http')
var logos = require('../')

http.createServer(function(req, res) {
  logos.random().pipe(res)
}).listen('10101')
