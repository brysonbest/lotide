const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it(`returns true for two matching arrays of numbers`, () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,3]), true);
  });
  it(`returns true for two matching arrays of strings`, () => {
    assert.strictEqual(eqArrays(["Hello","Hi","Wow"], ["Hello","Hi","Wow"]), true);
  });
  it("returns false for two different arrays", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2]), false);
  });
  it("returns true for two matching nested arrays", () => {
    assert.strictEqual(eqArrays([1,2,[3]], [1,2,[3]]), true);
  });
  it("returns false for two mismatched nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
  it("returns true for two empty arrays", () => {
    assert.strictEqual(eqArrays([],[]), true);
  });
  it("returns false for two arrays where the types don't match", () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,"3"]), false);
  });
  it("returns true when no array objects are entered", () => {
    assert.strictEqual(eqArrays(), true);
  });
});