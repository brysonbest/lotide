//Function that flattens a given array by one level, and returns it as a new array
const flatten = function(inputArray) {
  let newArray = [];
  for (let arrayItem of inputArray) {
    if (Array.isArray(arrayItem)) {
      for (let i = 0; i < arrayItem.length; i++) {
        newArray.push(arrayItem[i]);
      } 
    } else {
      newArray.push(arrayItem);
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


//test code
//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])
//console.log(flatten([1, [2, [3], 4], 5, [6]])); // => [ 1, 2, [ 3 ], 4, 5, 6 ]

//assertion tests
assertArraysEqual(flatten([1, [2, [3], 4], 5, [6]]), [ 1, 2, [ 3 ], 4, 5, 6 ]); //doesn't return true, as eqArrays currenly does not work for nested arrays or objects
assertArraysEqual(flatten(["Red", "Blue", ["Green"]]), ["Red", "Blue", "Green"]); //true
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //true