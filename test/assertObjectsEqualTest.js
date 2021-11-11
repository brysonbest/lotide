const assertObjectsEqual = require('../assertObjectsEqual');

//test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba); //true

const abc = { a: "1", b: "2", c: "3"};
assertObjectsEqual(ab, abc); //false