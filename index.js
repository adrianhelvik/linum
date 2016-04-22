var colors = require('colors');
var fs = require('fs');
var pad = require('pad');

module.exports = function(fileName, line, callback) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err)
            return callback(err);

        var split = data.split('\n');

        var padLen = (split.length + '').length;

        split = split.map((item, idx) => colors.yellow(pad(padLen, ''+idx)) + ': ' + item);

        if (line != null)
            return callback(null, split[line]);

        callback(null, split.join('\n'));
    });
}
