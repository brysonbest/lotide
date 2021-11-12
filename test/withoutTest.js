const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  it(`returns ["hello", "world"] for values 'lighthouse'`, () => {
    assert.deepEqual(without(words,['lighthouse']), ["hello", "world"]);
  });
  it(`returns [1, 3, 4] for value [2] in original array [1, 2, 3, 4]`, () => {
    assert.deepEqual(without([1,2,3,4], [2]), [1, 3, 4]);
  });
  it(`returns [4, 7] for removing 2 values from an array.`, () => {
    assert.deepEqual(without([4, 5, 7, "Tomato"], [5, "Tomato"]), [4, 7]);
  });
  it("returns empty array for empty array", () => {
    assert.deepEqual(without([]), []);
  });
  it("returns error for undefined", () => {
    assert.throw(without, Error);
  });
});