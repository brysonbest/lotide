// Function that keeps collecting items from a provided array until the callback function provided returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    if (callback(item)) {
      return results;
    }

    results.push(item);
  }

  return results;
};

module.exports = takeUntil;