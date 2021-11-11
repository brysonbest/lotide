const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');


// Test code

assertEqual(countLetters("Tomatoes are great"), { T: 3, O: 2, M: 1, A: 3, E: 3, S: 1, R: 2, G: 1 }); //false as objects can't compare
assertEqual(countLetters(""), {}); //false, same as previous
assertEqual(countLetters("Red Buns").R, 1); //true
assertEqual(countLetters("Purple People").P, 4); //true
