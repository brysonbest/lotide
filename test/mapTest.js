const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  const places = ["Mexico", "Madrid", "New York"];
  it(`returns ["M", "M", "N"] for callback word => word[0]`, () => {
    assert.deepEqual(map(places,word => word[0]), ["M", "M", "N"]);
  });
  it(`returns [6, 6, 8] for callback word => word.length`, () => {
    assert.deepEqual(map(places, word => word.length), [6, 6, 8]);
  });
  it(`returns [50, 100, 150, 200] for callback number => number * 10 on array [5, 10, 15, 20]`, () => {
    assert.deepEqual(map([5, 10, 15, 20], number => number * 10), [50, 100, 150, 200]);
  });
  it("returns empty array for empty array", () => {
    assert.deepEqual(map([]), []);
  });
  it("returns error for undefined", () => {
    assert.throw(map, Error);
  });
});