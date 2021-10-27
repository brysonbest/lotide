// Function that compares two values and prints a message indicating whether or not they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function that takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
const countLetters = function(originalString) {
  let stringCount = {};
  if (!originalString) {
    return stringCount;
  }
  for (let char of originalString) {
    if (char !== ' ') {
      let formatChar = char.toUpperCase();
      if (stringCount[formatChar]) {
        stringCount[formatChar] += 1;
      } else {
        stringCount[formatChar] = 1;
      }
    }
  }
  return stringCount;
};


// Test code
console.log(countLetters("Tomatoes are great"));


assertEqual(countLetters("Tomatoes are great"), { T: 3, O: 2, M: 1, A: 3, E: 3, S: 1, R: 2, G: 1 }); //false as objects can't compare
assertEqual(countLetters(""), {}); //false, same as previous

