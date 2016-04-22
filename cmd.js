#!/usr/bin/env node

var file = process.argv[2];
var line = process.argv[3];
var fs = require('fs');
var linum = require('./index');

if (! file) {
    var data = '';
    var i = 0;

    process.stdin.on('readable', () => {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            linum(chunk.toString(), null, (err, data) => {
                if (err) {
                    console.log('Could not read data');
                    process.exit(1);
                }

                process.stdout.write(data);
            });
        }
    });

    process.stdin.on('end', () => {
        console.log('end');
    });
}

else {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err)
            return console.log('Could not read file');

        linum(data, line, (err, data) => {
            if (err)
                return console.log('Could not read file');

            console.log(data);
        });
    });
}
