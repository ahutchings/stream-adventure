var through = require('through2');
var toUpperCase = through(write, end);

function write (buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

function end (done) {
	done();
}

process.stdin.pipe(toUpperCase).pipe(process.stdout);
