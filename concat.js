var concat = require('concat-stream');

function reverse (string) {
  return string.split('').reverse().join('');
}

process.stdin.pipe(concat(function (input) {
  console.log(reverse(input.toString()));
}))
