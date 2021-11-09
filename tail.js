//Function that returns the all items from an array as a new array, excluding the first item in the original array
const tail = function(arrayList) {
  let newArray = arrayList.slice();
  newArray.shift();
  return newArray;
};

module.exports = tail;