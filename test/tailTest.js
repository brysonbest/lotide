const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it (`returns ["Tomato", "Lasagna"] for ["Potato", "Tomato", "Lasagna"]`, () => {
    assert.deepEqual(tail(["Potato", "Tomato", "Lasagna"]), ["Tomato", "Lasagna"]);
  });
  it (`returns [1, 2] for [0, 1, 2]`, () => {
    assert.deepEqual(tail([0, 1, 2]), [1, 2]);
  });
  it (`returns [] for []`, () => {
    assert.deepEqual(tail([]), []);
  });
  it (`returns an error when undefined`, () => {
    assert.throws(tail, Error);
  });
});