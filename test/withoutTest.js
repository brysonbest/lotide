const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');


//test codes
//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"])

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //true

//assertion tests
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); //true
assertArraysEqual(without([4, "5", 7, "Tomato"], [5, "Tomato"]), [4, 7, "Tomato"]); //false as type mismatch and tomato removed
assertArraysEqual(without([4, "5", 7, "Tomato"], [5, "Tomato"]), [4, "5", 7]); //true
