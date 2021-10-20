// Function that compares two values and prints a message indicating whether or not they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function that returns the all items from an array as a new array, excluding the first item in the original array

const tail = function(arrayList) {
  let newArray = arrayList.slice();
  newArray.shift();
  return newArray;
};

// Test Case: Check the original and new array to ensure proper behaviour
const words = ["Potato", "Tomato", "Lasagna"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length,2); //new array has 2 elements