//function that takes in an array and returns the middle-most element(s) of the given array.
const middle = function(originalArray) {
  let newArray = [];
  if (originalArray.length <= 2) {
    return newArray;
  }
  //if divisible by 2, pushes 2 middle values
  if (originalArray.length % 2 === 0) {
    let middleVals = Math.floor(originalArray.length / 2);
    newArray.push(originalArray[middleVals - 1]);
    newArray.push(originalArray[middleVals]);
    return newArray;
  } else {
    let middleVals = Math.floor(originalArray.length / 2);
    newArray.push((originalArray[middleVals]));
    return newArray;
  }
};

module.exports = middle;