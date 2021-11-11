const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  let names = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason"," Salima","Fang","Joe"];
  it(`returns mapped object with keys for count of true value names in an array`, () => {
    assert.include(countOnly(names, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}), {Jason: 1, Fang: 2});
  });
  it(`returns undefined if a name was not found on the list given`, () => {
    assert.strictEqual(countOnly(names, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})["Karima"], undefined);
  });
  it("returns undefined if a given name was on the list, but it had a false value", () => {
    assert.strictEqual(countOnly(names, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})["Agouhanna"], undefined);
  });
  it("returns an empty object for undefined", () => {
    assert.include(countOnly, {});
  });
  it("returns an empty object for a blank array", () => {
    assert.include(countOnly([]), {});
  });
});