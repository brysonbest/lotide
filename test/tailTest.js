const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Case: Check the original and new array to ensure proper behaviour
const words = ["Potato", "Tomato", "Lasagna"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length,2); //new array has 2 elements