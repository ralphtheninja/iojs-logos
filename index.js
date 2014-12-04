var PassThrough = require('stream').PassThrough
var fs = require('fs')
var path = require('path')
var logos = __dirname + '/logos'

exports.random = function() {
  var out = PassThrough()
  fs.readdir(logos, function(err, files) {
    var index = Math.floor(Math.random()*files.length)
    var logo = path.join(logos, files[index])
    fs.createReadStream(logo).pipe(out)
  })
  return out
}
