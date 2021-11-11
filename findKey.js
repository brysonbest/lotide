//Function that takes in an object and a callback function. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.

const findKey = function(object, callback) {
  const objArray = Object.keys(object);
  
  for (const obj of objArray) {
    if (callback(object[obj])) {
      return obj;
    }
  }
  
  return undefined;
};

module.exports = findKey;