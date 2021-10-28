// Function that compares two values and prints a message indicating whether or not they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function that takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, it returns undefined.

const findKeyByValue = function(originalObj, value) {
  const objArray = Object.keys(originalObj);
  for (const obj of objArray) {
    if (originalObj[obj] === value) {
      return obj;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  reality: "The Real Housewives of Beverly Hills",
  comedy: "The Good Place",
  drama:  "How to Get Away With Murder"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Good Place"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Sailor Moon"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Real Housewives of Beverly Hills"), "reality");