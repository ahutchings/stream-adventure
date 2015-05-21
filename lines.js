var through = require('through2');
var split = require('split');

var count = 0;

function write (line, encoding, next) {
	count++;
	this.push(line.toString()[
		count % 2 ? 'toLowerCase' : 'toUpperCase'
	]() + '\n');
	next();
}

process.stdin
	.pipe(split())
	.pipe(through(write))
	.pipe(process.stdout);
