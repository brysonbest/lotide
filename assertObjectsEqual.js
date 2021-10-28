//function that checks for matching of arrays
const eqArrays = function(array1, array2) {
  //checks if both arrays are blank;
  if (!array1 && !array2) {
    return true;
  }
  //checks if either array is blank; arrays do not have a falsey equivalent
  if (!array1 || !array2) {
    return false;
  }
  //check if arrays are equal in length
  if (array1.length !== array2.length) {
    return false;
  }
  //checks for matching of array items
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //returns true if no mismatches found
  return true;
};

//Function that takes in two objects and returns true or false, based on a perfect match.

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  //compares value at each key within obj1 for matching
  for (const obj of obj1Keys) {
    if (Array.isArray(object1[obj])) {
      if (!eqArrays(object1[obj], object2[obj])) {
        return false;
      }
    } else {
      if (object1[obj] !== object2[obj]) {
        return false;
      }
    }
  }
  return true;
};

//Function that compares two objects and prints a message regarding whether or not they match.

const assertObjectsEqual = function(actual, expected) {
  //import inspection to read objects to console
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba); //true

const abc = { a: "1", b: "2", c: "3"};
assertObjectsEqual(ab, abc); //false