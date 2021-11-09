const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test cases
assertEqual(eqArrays([1, 2, 3],), false); //one blank
assertEqual(eqArrays([], []), true); //both blank
assertEqual(eqArrays([1, 2, 3],[1, 2]), false); //different lengths
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);