const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//assertions
assertArraysEqual(middle([5, 6]), []); //true
assertArraysEqual(middle([5, 6, 9, 22, 6, 99, 0, 4]), [22, 6]); //true
assertArraysEqual(middle([5, 4, 3, 8, 10, 2, 1]), [8]); //true
assertArraysEqual(middle([5, 6]), [5]); //false