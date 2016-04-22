#!/usr/bin/env node

var file = process.argv[2];
var linum = require('./index');

if (! file) {
    console.log('No file specified');
    process.exit(1);
}

linum(file, (err, data) => {
    if (err)
        return console.log('Could not read file');

    console.log(data);
});
