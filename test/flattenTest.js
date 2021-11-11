const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');


//test code
//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])
//console.log(flatten([1, [2, [3], 4], 5, [6]])); // => [ 1, 2, [ 3 ], 4, 5, 6 ]

//assertion tests
assertArraysEqual(flatten([1, [2, [3], 4], 5, [6]]), [ 1, 2, [ 3 ], 4, 5, 6 ]); //doesn't return true, as eqArrays currenly does not work for nested arrays or objects
assertArraysEqual(flatten(["Red", "Blue", ["Green"]]), ["Red", "Blue", "Green"]); //true
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //true