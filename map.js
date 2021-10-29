//Function that takes in two arguments - an array to map, and a callback function - and returns a new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

//console.log(results1);

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
  //checks for initial matching of array items
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //returns true if no mismatches found
  return true;
};


assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const places = ["Mexico", "Madrid", "New York"];

assertArraysEqual(map(places, word => word[0]), ["M", "M", "N"]); //true

const things = ["Potatoes", "Tables", "Pens"];

assertArraysEqual(map(things, word => word.length), [8, 6, 4]); //true

const numbers = [5, 10, 15, 20];

assertArraysEqual(map(numbers, number => number * 10), [50, 100, 150, 200]); //true

