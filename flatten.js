//Function that flattens a given array by one level, and returns it as a new array
const flatten = function(inputArray) {
  let newArray = [];
  for (let element of inputArray) {
    if (Array.isArray(element)) {
      for (let item of element) {
        newArray.push(item);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};


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
  //checks for matching of array items
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //returns true if no mismatches found
  return true;
};


//test code
//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])
//console.log(flatten([1, [2, [3], 4], 5, [6]])); // => [ 1, 2, [ 3 ], 4, 5, 6 ]

//assertion tests
assertArraysEqual(flatten([1, [2, [3], 4], 5, [6]]), [ 1, 2, [ 3 ], 4, 5, 6 ]); //doesn't return true, as eqArrays currenly does not work for nested arrays or objects
assertArraysEqual(flatten(["Red", "Blue", ["Green"]]), ["Red", "Blue", "Green"]); //true
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //true