// function that returns all indices (zero-based positions) in the string where each character is found

const letterPositions = function(sentence) {
  const results = {};
  if (!sentence) {
    return results;
  }
  let i = 0;
  for (let char of sentence) {
    if (char !== ' ') {
      let formatChar = char.toUpperCase();
      if (results[formatChar]) {
        results[formatChar].push(i);
      } else {
        results[formatChar] = [i];
      }
    }
    i++;
  }
  return results;
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
  //checks for initial matching of array items
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //returns true if no mismatches found
  return true;
};

//test code

assertArraysEqual(letterPositions("Work it Out").t, [6, 10]); //true
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]); //true
assertArraysEqual(letterPositions(""), {}); //true