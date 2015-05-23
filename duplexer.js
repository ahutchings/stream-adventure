var duplexer = require('duplexer');
var spawn = require('child_process').spawn

module.exports = spawner;

function spawner (cmd, args) {
    var process = spawn(cmd, args);
    return duplexer(process.stdin, process.stdout);
}