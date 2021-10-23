//Function that returns a subset of a given array, removing unwanted elements.
const without = function(originalArray, values) {
  let newArray = originalArray.slice();
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (newArray[i] === values[j]) {
        newArray.splice(i, 1);
      }
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


//test codes
//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"])

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //true

//assertion tests
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); //true
assertArraysEqual(without([4, "5", 7, "Tomato"], [5, "Tomato"]), [4, 7, "Tomato"]); //false as type mismatch and tomato removed
assertArraysEqual(without([4, "5", 7, "Tomato"], [5, "Tomato"]), [4, "5", 7]); //true

