const eqArrays = require('./eqArrays');

//Function that takes in two objects and returns true or false, based on a perfect match.

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  //compares value at each key within obj1 for matching
  for (const obj of obj1Keys) {
    if (Array.isArray(object1[obj])) {
      if (!eqArrays(object1[obj], object2[obj])) {
        return false;
      }
    } else {
      if (object1[obj] !== object2[obj]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;