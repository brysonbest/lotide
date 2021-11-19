//Function that returns a subset of a given array, removing unwanted elements.
const without = function(originalArray, values) {
  let newArray = originalArray.slice();

  for (let i = 0; i < originalArray.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (newArray[i] === values[j]) {
        newArray.splice(i, 1);
        i--;
      }
    }
  }

  return newArray;
};

module.exports = without;