const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

//test codes
//testing primitives
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); //true as identical contents
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3"};
//eqObjects(ab, abc); //false as different lengths
assertEqual(eqObjects(ab, abc), false);

const aba = { a: "1", b: "3"};
//eqObjects(ab, aba); //false as different numbers
assertEqual(eqObjects(ab, aba), false);

//testing arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
