const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it(`returns "comedy" for "The Good Place"`, () => {
    assert.strictEqual(findKeyByValue({
      reality: "The Real Housewives of Beverly Hills",
      comedy: "The Good Place",
      drama:  "How to Get Away With Murder"
    }, "The Good Place"), "comedy");
  });
  it(`returns undefined for item not listed in object`, () => {
    assert.strictEqual(findKeyByValue({
      reality: "The Real Housewives of Beverly Hills",
      comedy: "The Good Place",
      drama:  "How to Get Away With Murder"
    }, "Sailor Moon"), undefined);
  });
  it("returns undefined for a blank string value", () => {
    assert.strictEqual(findKeyByValue({
      reality: "The Real Housewives of Beverly Hills",
      comedy: "The Good Place",
      drama:  "How to Get Away With Murder"
    },""), undefined);
  });
  it("returns undefined for an empty object and a value", () => {
    assert.strictEqual(findKeyByValue({}, "How to Get Away With Murder"), undefined);
  });
  it("throws error when no object or value are entered", () => {
    assert.throw(findKeyByValue, Error);
  });
});