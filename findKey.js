// Function that compares two values and prints a message indicating whether or not they match
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); //true

assertEqual(findKey({
  "number 3": { hello: "maybe" },
  "potato":   { right: 3 },
  "who?":      { wrong: "Bon" },
  "you know":   { if: 3 },
}, x => x.wrong === "Bon"), "who?"); //true

assertEqual(findKey({
}, x => x.yes === "yes"), undefined); //true

assertEqual(findKey({
  "number 3": { hello: "maybe" },
  "potato":   { right: 3 },
  "who?":      { wrong: "Bon" },
  "you know":   { if: 3 },
}, x => x.if === "maybe"), undefined); //true