# iojs-logos

Get random [`io.js`](https://github.com/iojs/io.js) logo.

## Install

```
$ npm install iojs-logos
```

## Example

```js
var http = require('http')
var logos = require('iojs-logos')

http.createServer(function(req, res) {
  logos.random().pipe(res)
}).listen(10101)
```

## Cli

```
$ npm install -g iojs-logos
$ iojs-logos
iojs-logos served randomly on http://localhost:10101
```