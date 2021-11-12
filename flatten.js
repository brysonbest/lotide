//Function that flattens a given array by one level, and returns it as a new array

const flatten = function(inputArray) {
  let newArray = [];

  for (let element of inputArray) {
    if (Array.isArray(element)) {
      let newEl = [].concat(flatten(element));
      newArray = newArray.concat(flatten(newEl));
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

module.exports = flatten;