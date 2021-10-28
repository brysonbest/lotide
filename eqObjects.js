// Function that compares two values and prints a message indicating whether or not they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
        //console.log(eqArrays(object1[obj], object2[obj]));
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

//test codes
//testing primitives
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); //true as identical contents
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3"};
//eqObjects(ab, abc); //false as different lengths
assertEqual(eqObjects(ab, abc), false);

const aba = { a: "1", b: "3"};
//eqObjects(ab, aba); //false as different numbers
assertEqual(eqObjects(ab, aba), false);

//testing arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false