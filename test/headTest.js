const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it ("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it ("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
  it (`returns Hello for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it (`returns "Tomato for ["Tomato", "Potato", "Lasagna"]`, () => {
    assert.strictEqual(head(["Tomato", "Potato", "Lasagna"]), "Tomato");
  });
  it ("returns nothing for empty array", () => {
    assert.strictEqual(head([]), );
  });
  it ("returns error for undefined", () => {
    assert.strictEqual(head(), Error);
  });
});