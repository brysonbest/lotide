const assertArraysEqual = require('../assertArraysEqual');


//test codes

assertArraysEqual([],[]); //true
assertArraysEqual([1,2,3,4],[1,2,3,4]); //true
assertArraysEqual(["yes", "no", "maybe"],["yes", "no", "maybe"]); //true
assertArraysEqual(["yes", "no", "maybe"],["yes", "no"]); //false
assertArraysEqual(["yes", "no", "maybe"],["yes", "no", 1]); //false