const eqObjects = require('./eqObjects');

//Function that compares two objects and prints a message regarding whether or not they match.

const assertObjectsEqual = function(actual, expected) {
  //import inspection to read objects to console
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;