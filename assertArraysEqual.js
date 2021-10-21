//Function that compares two arrays and prints a message indicating whether or not they match.
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

//function that checks for matching of arrays and returns a boolean

const eqArrays = function(array1, array2) {
  //checks for blanks; arrays do not have a falsey equivalent
  if (!array1 && !array2) {
    return true;
  } else if (!array1 || !array2) {
    return false;
  }
  //checks for initial matching of array items
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //checks for case where array2 may be longer
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] !== array1[i]) {
      return false;
    }
  }
  //returns true if no mismatches found
  return true;
};