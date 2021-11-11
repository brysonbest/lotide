//function that takes in an array of items, and returns how many instances of each string were found in the allItems array of strings.

const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  
  return result;
};

module.exports = countOnly;