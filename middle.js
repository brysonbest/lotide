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

//function that takes in an array and returns the middle-most element(s) of the given array.
const middle = function(originalArray){
  let newArray = [];
  if (originalArray.length <= 2) {
    return newArray;
  }
  //if divisible by 2, pushes 2 middle values
  if (originalArray.length % 2 === 0) {
    let middleVals = Math.floor(originalArray.length/2);
    newArray.push(originalArray[middleVals-1]);
    newArray.push(originalArray[middleVals]);
    return newArray;
  }
  else {
    let middleVals = Math.floor(originalArray.length/2);
    newArray.push((originalArray[middleVals]));
    return newArray;
  }
};


//test codes
/* console.log(middle([1])); // => []
console.log(middle([1, 2])); // => [])
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3])
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]) */

//assertions
assertArraysEqual(middle([5, 6]), []); //true
assertArraysEqual(middle([5, 6, 9, 22, 6, 99, 0, 4]), [22, 6]); //true
assertArraysEqual(middle([5, 4, 3, 8, 10, 2, 1]), [8]); //true
assertArraysEqual(middle([5, 6]), [5]); //false