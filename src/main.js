var map = require('lodash/map');

function square(n) {
    return n*n;
}

console.log(map([1,2,3,4,5,6], square));