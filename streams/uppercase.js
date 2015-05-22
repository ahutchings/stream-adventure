var through = require('through2');

module.exports = uppercase;

function write (buf, encoding, next) {
    this.push(buf.toString().toUpperCase());
    next();
}

function uppercase () {
    return through(write);
}
