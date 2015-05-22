var trumpet = require('trumpet');
var uppercase = require('./streams/uppercase');
var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(uppercase()).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);