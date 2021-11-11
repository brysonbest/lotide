const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

//Test Code

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