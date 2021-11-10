const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it ("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it ("returns [22, 6] for [5, 6, 9, 22, 6, 99, 0, 4]", () => {
    assert.deepEqual(middle([5, 6, 9, 22, 6, 99, 0, 4]), [22, 6]);
  });
  it ("returns [8] for [5, 4, 3, 8, 10, 2, 1]", () => {
    assert.deepEqual(middle([5, 4, 3, 8, 10, 2, 1]), [8]);
  });
  it ("returns [] for [5, 6]", () => {
    assert.deepEqual(middle([5, 6]), []);
  });
  it ("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it ("returns an error when undefined", () => {
    assert.throw(middle, Error);
  });
});