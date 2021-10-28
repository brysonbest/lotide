// Function that compares two values and prints a message indicating whether or not they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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
    if (object1[obj] !== object2[obj]) {
      return false;
    }
  }
  return true;
};

//test codes

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
