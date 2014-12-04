iojs-logos
==========

```js
var http = require('http')
var logos = require('iojs-logos')

http.createServer(function(req, res) {
  logos.random().pipe(res)
}).listen('10101')
```