var colors = require('colors');
var pad = require('pad');

module.exports = function(data, line, callback) {
    var split = data.split('\n');

    var padLen = (split.length + '').length;

    split = split.map((item, idx) => colors.yellow(pad(padLen, ''+idx)) + ': ' + item);

    if (line != null)
        return callback(null, split[line]);

    callback(null, split.join('\n'));
}
