var http = require('http');
var uppercase = require('./streams/uppercase');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
    req.pipe(uppercase()).pipe(res);
});

server.listen(port);