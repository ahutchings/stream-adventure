var http = require('http');
var through = require('through2');
var port = process.argv[2];

function toUpperCase () {
    return through(function (buf, encoding, next) {
        this.push(buf.toString().toUpperCase());
        next();
    });
}

var server = http.createServer(function (req, res) {
    req.pipe(toUpperCase()).pipe(res);
});

server.listen(port);