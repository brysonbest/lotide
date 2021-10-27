// Function that compares two values and prints a message indicating whether or not they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function that takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
const countLetters = function(originalString){

}