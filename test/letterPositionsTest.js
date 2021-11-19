const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it(`returns [6,10] for "Work it Out" when looking for indices of the letter t`, () => {
    assert.deepEqual(letterPositions("Work it Out").t, [6, 10]);
  });
  it(`returns undefined for "lighthouse" when looking for indices of the letter z`, () => {
    assert.deepEqual(letterPositions("lighthouse").z, undefined);
  });
  it(`returns an object {A: 0, 3, B: 1, 2} for the string "ABBA" `, () => {
    assert.deepEqual(letterPositions("ABBA"), {a: [0, 3], b: [1 ,2]});
  });
  it("returns an empty object for an empty string", () => {
    assert.deepEqual(letterPositions(""), {});
  });
  it("returns empty object for undefined", () => {
    assert.deepEqual(letterPositions(), {});
  });
  it("returns [0] for the value of h in hello", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
});