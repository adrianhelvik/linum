'use strict';

module.exports = function() {
    var idx, str, padDirection;

    const LEFT = 0, RIGHT = 1;

    // Basically.. xor number

    if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number')
        throw new Error('Both arguments can not be a number')

    else if (typeof arguments[0] == 'number') {
        idx = arguments[0];
        str = arguments[1];

        padDirection = LEFT;
    }

    else if (typeof arguments[1] == 'number') {
        idx = arguments[1];
        str = arguments[0];

        padDirection = RIGHT;
    }

    else
        throw new Error( 'No index specified' );

    // Argument parsing done

    for (let i = str.length; i < idx; i++) {

        if (padDirection == LEFT) {
            str = ' ' + str;
        }

        else if (padDirection == RIGHT) {
            str = str + ' ';
        }

        else {
            throw new Error('Coding error. Left or right not chosen. Notify developer.');
        }

    }

    return str;
}
