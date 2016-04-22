var fs = require('fs');
var colors = require('colors');
var pad = require('./pad');

var fn = process.argv[2];
var stream;

if (fn) {
    stream = fs.createReadStream(fn)
} else {
    stream = process.stdin;
}

stream.setEncoding('utf8');

var lineNumber = 0;
var result = '';

stream.on('data', (chunk) => {
    var split = chunk.split('\n');

    split.forEach((value) => {
        result += colors.blue(pad(lineNumber++ + ': ', 5)) + value + '\n';
    });

    result = result.substring(0, result.length - 1);
});

stream.on('end', () => {
    console.log(result);
});

module.exports = function () {
    throw new Error('This package should be installed/used globally');
};
