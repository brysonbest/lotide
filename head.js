// Function that compares two values and prints a message indicating whether or not they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function which returns the first item in an array
const head = function(arrayList) {
  return arrayList[0];
};

// Test code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Tomato", "Potato", "Lasagna"]), "Lasagna");
assertEqual(head([5,6,7]), 6);
assertEqual(head([]), 3);
assertEqual(head([3]), 3);