var through = require('through2').obj;
var duplexer = require('duplexer2');

module.exports = function (counter) {
    var counts = {};

    var input = through(write, end);

    function write (row, encoding, next) {
        counts[row.country] || (counts[row.country] = 0);
        counts[row.country]++;
        next();
    }

    function end (done) {
        counter.setCounts(counts);
        done();
    }

    return duplexer(input, counter);
}