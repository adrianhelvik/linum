#!/usr/bin/env node

var file = process.argv[2];
var line = process.argv[3];
var linum = require('./index');

if (! file) {
    console.log('No file specified');
    process.exit(1);
}

linum(file, line, (err, data) => {
    if (err)
        return console.log('Could not read file');

    console.log(data);
});
