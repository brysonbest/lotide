const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it(`returns ["Red", "Blue", "Green"] for ["Red", "Blue", ["Green"]]`, () => {
    assert.deepEqual(flatten(["Red", "Blue", ["Green"]]), ["Red", "Blue", "Green"]);
  });
  it("flattens an array multiple levels, so it returns [1, 2, 3, 4, 5, 6] from [1, [2, [3], 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, [2, [3], 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns an empty array for empty array", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("returns error for undefined", () => {
    assert.throw(flatten, Error);
  });
});