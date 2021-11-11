//Function that takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, it returns undefined.

const findKeyByValue = function(originalObj, value) {
  const objArray = Object.keys(originalObj);
  
  for (const obj of objArray) {
    if (originalObj[obj] === value) {
      return obj;
    }
  }
  
  return undefined;
};

module.exports = findKeyByValue;