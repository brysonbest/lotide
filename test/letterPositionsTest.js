const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it(`returns [6,10] for "Work it Out" when looking for indices of the letter t`, () => {
    assert.deepEqual(letterPositions("Work it Out").T, [6, 10]);
  });
  it(`returns undefined for "lighthouse" when looking for indices of the letter z`, () => {
    assert.deepEqual(letterPositions("lighthouse").Z, undefined);
  });
  it(`returns an object {A: 0, 3, B: 1, 2} for the string "ABBA" `, () => {
    assert.deepEqual(letterPositions("ABBA"), {A: [0, 3], B: [1 ,2]});
  });
  it("returns an empty object for an empty string", () => {
    assert.deepEqual(letterPositions(""), {});
  });
  it("returns empty object for undefined", () => {
    assert.deepEqual(letterPositions(), {});
  });
});