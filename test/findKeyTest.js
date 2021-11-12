const findKey = require('../findKey');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

//Test Code


describe("#findKey", () => {
  let objectStars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }}
  it(`returns "noma" for callback x => x.stars === 2`, () => {
    assert.strictEqual(findKey(objectStars, x => x.stars === 2), "noma");
  });
  it(`returns undefined for callback x => x.stars === 0`, () => {
    assert.strictEqual(findKey(objectStars, x => x.stars === 0), undefined);
  });
  it("returns undefined for a key that doesn't exist", () => {
    assert.strictEqual(findKey(objectStars, x => x.yes === "yes"), undefined);
  });
  it("returns undefined for an empty object and a callback", () => {
    assert.strictEqual(findKey({}, x => x.stars === 2), undefined);
  });
  it("throws error when no object or callback are entered", () => {
    assert.throw(findKey, Error);
  });
});