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

module.exports = eqArrays;
