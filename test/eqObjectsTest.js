const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it(`returns true for two matching objects`, () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  it(`returns false for two objects of different lengths`, () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2", c: "3"}, { a: "1", b: "2" }), false);
  });
  it("returns false for two different objects", () => {
    assert.strictEqual(eqObjects({ a: "1", b: "3"}, { a: "1", b: "2" }), false);
  });
  it("returns true for two empty objects", () => {
    assert.strictEqual(eqObjects({},{}), true);
  });
  it("returns true for arrays nested in objects", () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] },{ d: ["2", 3], c: "1" }), true);
  });
  it("throws error when no objects are entered", () => {
    assert.throw(eqObjects, Error);
  });
});