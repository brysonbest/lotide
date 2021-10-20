// Function that compares two values and prints a message indicating whether or not they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅  Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

// Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Tomatoes", "Tomatoes");
assertEqual(4,17);