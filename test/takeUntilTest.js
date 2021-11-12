const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it(`returns [1, 2, 5, 7, 2] for callback x => x < 0 on original array [1, 2, 5, 7, 2, -1, 2, 4, 5]`, () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5],x => x < 0), [1, 2, 5, 7, 2]);
  });
  it(`returns shortened array when first matching string found for callback x => x === ','.`, () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
  it(`returns complete original array when number that meets callback criteria not present`, () => {
    assert.deepEqual(takeUntil([5, 10, 15, 20],x => x < 0), [5, 10, 15, 20]);
  });
  it("returns empty array for empty array", () => {
    assert.deepEqual(takeUntil([]), []);
  });
  it("returns error for undefined", () => {
    assert.throw(takeUntil, Error);
  });
});